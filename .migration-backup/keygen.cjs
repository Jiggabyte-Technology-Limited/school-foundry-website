#!/usr/bin/env node

/**
 * ============================================================
 *  SchoolFoundry Offline License Key Generator
 * ============================================================
 *
 *  PURPOSE:
 *    Generates a cryptographically signed activation key for a
 *    given Machine ID. Run this on YOUR admin machine only.
 *    The private key never leaves this machine.
 *
 *  FIRST-TIME SETUP (run once to generate your RSA key pair):
 *    node keygen.cjs --generate-keys
 *
 *    This writes:
 *      schoolfoundry_private.pem  <- KEEP SECRET, never share
 *      schoolfoundry_public.pem   <- embed in the Electron app
 *
 *  GENERATING A LICENSE KEY:
 *    node keygen.cjs --machine-id <MACHINE_ID>
 *    node keygen.cjs --machine-id <MACHINE_ID> --expires 2027-12-31
 *    node keygen.cjs --machine-id <MACHINE_ID> --expires 2027-12-31 --tier pro
 *
 *  EXAMPLES:
 *    node keygen.cjs --generate-keys
 *    node keygen.cjs --machine-id "a3f8c2d1e9b047f6a1234567890abcde" --expires 2027-06-01
 *    node keygen.cjs --machine-id "a3f8c2d1e9b047f6a1234567890abcde"
 *
 *  OUTPUT:
 *    Prints a Base64-encoded activation key string you can
 *    send over SMS or WhatsApp. The school admin pastes it
 *    into the Activation screen.
 *
 *  REQUIREMENTS:
 *    Node.js >= 16. No npm packages required (uses built-in
 *    'crypto', 'fs', 'path', 'os' modules only).
 * ============================================================
 */

'use strict';

const crypto = require('crypto');
const fs     = require('fs');
const path   = require('path');

// ── Configuration ────────────────────────────────────────────
const PRIVATE_KEY_FILE = path.join(__dirname, 'schoolfoundry_private.pem');
const PUBLIC_KEY_FILE  = path.join(__dirname, 'schoolfoundry_public.pem');

// This salt must match the one used in the Electron app's
// fingerprint extraction module exactly.
const FINGERPRINT_SALT = 'SchoolFoundry-HW-Salt-v1-ZMW';

// License format version — bump this when the payload schema changes
const LICENSE_VERSION  = 1;
// ─────────────────────────────────────────────────────────────


// ── Key Pair Generation ───────────────────────────────────────
function generateKeyPair() {
  console.log('\n  Generating RSA-2048 key pair...\n');

  const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding:  { type: 'spki',  format: 'pem' },
    privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
  });

  fs.writeFileSync(PRIVATE_KEY_FILE, privateKey, { mode: 0o600 });
  fs.writeFileSync(PUBLIC_KEY_FILE,  publicKey,  { mode: 0o644 });

  console.log('  [OK] Private key written to:', PRIVATE_KEY_FILE);
  console.log('       chmod 600 applied — keep this file PRIVATE.\n');
  console.log('  [OK] Public key written to: ', PUBLIC_KEY_FILE);
  console.log('       Embed the contents of this file in your Electron app.\n');
  console.log('  ─────────────────────────────────────────────');
  console.log('  PUBLIC KEY (copy this into your Electron app)');
  console.log('  ─────────────────────────────────────────────');
  console.log(publicKey);
}


// ── License Payload Builder ───────────────────────────────────
function buildPayload(machineId, expiresAt, tier) {
  return {
    v:         LICENSE_VERSION,
    machineId: machineId,
    issuedAt:  new Date().toISOString(),
    expiresAt: expiresAt || null,   // null = perpetual
    tier:      tier     || 'standard',
    product:   'SchoolFoundry',
    salt:      FINGERPRINT_SALT,
  };
}


// ── RSA-SHA256 Signer ─────────────────────────────────────────
function signPayload(payload, privateKeyPem) {
  const data  = JSON.stringify(payload);
  const sign  = crypto.createSign('RSA-SHA256');
  sign.update(data);
  sign.end();
  const signature = sign.sign(privateKeyPem);

  // Bundle payload + signature into one envelope
  const envelope = {
    payload:   payload,
    signature: signature.toString('base64'),
  };

  // Final activation key: Base64-encoded JSON envelope
  return Buffer.from(JSON.stringify(envelope)).toString('base64');
}


// ── License Verifier (mirrors what the Electron app does) ─────
function verifyActivationKey(activationKey, publicKeyPem) {
  try {
    const envelopeJson = Buffer.from(activationKey, 'base64').toString('utf8');
    const envelope     = JSON.parse(envelopeJson);
    const { payload, signature } = envelope;

    if (!payload || !signature) return { valid: false, reason: 'Malformed envelope' };

    const data   = JSON.stringify(payload);
    const verify = crypto.createVerify('RSA-SHA256');
    verify.update(data);
    verify.end();

    const sigValid = verify.verify(
      publicKeyPem,
      Buffer.from(signature, 'base64')
    );

    if (!sigValid) return { valid: false, reason: 'Invalid signature' };

    if (payload.expiresAt) {
      const expiry = new Date(payload.expiresAt);
      if (Date.now() > expiry.getTime()) {
        return { valid: false, reason: `License expired on ${payload.expiresAt}` };
      }
    }

    return { valid: true, payload };
  } catch (err) {
    return { valid: false, reason: `Parse error: ${err.message}` };
  }
}


// ── Argument Parser ───────────────────────────────────────────
function parseArgs(argv) {
  const args = {};
  for (let i = 2; i < argv.length; i++) {
    switch (argv[i]) {
      case '--generate-keys': args.generateKeys = true; break;
      case '--machine-id':    args.machineId    = argv[++i]; break;
      case '--expires':       args.expires      = argv[++i]; break;
      case '--tier':          args.tier         = argv[++i]; break;
      case '--verify':        args.verify       = argv[++i]; break;
      case '--help': case '-h': args.help = true; break;
    }
  }
  return args;
}

function printHelp() {
  console.log(`
  Usage:
    node keygen.cjs --generate-keys
    node keygen.cjs --machine-id <ID> [--expires YYYY-MM-DD] [--tier standard|pro]
    node keygen.cjs --verify <ACTIVATION_KEY>
    node keygen.cjs --help
  `);
}

function validateDateFormat(dateStr) {
  const pattern = /^\d{4}-\d{2}-\d{2}$/;
  if (!pattern.test(dateStr)) return false;
  const d = new Date(dateStr);
  return !isNaN(d.getTime());
}


// ── Main Entry ────────────────────────────────────────────────
function main() {
  const args = parseArgs(process.argv);

  if (args.help) {
    printHelp();
    process.exit(0);
  }

  // ── Generate RSA key pair ──────────────────────────────────
  if (args.generateKeys) {
    if (fs.existsSync(PRIVATE_KEY_FILE)) {
      console.error('\n  [WARN] Private key already exists at:', PRIVATE_KEY_FILE);
      console.error('         Delete it manually if you want to regenerate.\n');
      process.exit(1);
    }
    generateKeyPair();
    process.exit(0);
  }

  // ── Verify an existing activation key ─────────────────────
  if (args.verify) {
    if (!fs.existsSync(PUBLIC_KEY_FILE)) {
      console.error('\n  [ERROR] Public key not found. Run --generate-keys first.\n');
      process.exit(1);
    }
    const publicKey = fs.readFileSync(PUBLIC_KEY_FILE, 'utf8');
    const result    = verifyActivationKey(args.verify, publicKey);
    console.log('\n  Verification result:');
    console.log('  ', JSON.stringify(result, null, 4));
    process.exit(result.valid ? 0 : 1);
  }

  // ── Generate a license key ─────────────────────────────────
  if (!args.machineId) {
    console.error('\n  [ERROR] --machine-id is required.\n');
    printHelp();
    process.exit(1);
  }

  if (args.machineId.trim().length < 8) {
    console.error('\n  [ERROR] Machine ID looks too short. Double-check it.\n');
    process.exit(1);
  }

  if (args.expires && !validateDateFormat(args.expires)) {
    console.error('\n  [ERROR] --expires must be in YYYY-MM-DD format.\n');
    process.exit(1);
  }

  const validTiers = ['standard', 'pro'];
  if (args.tier && !validTiers.includes(args.tier)) {
    console.error(`\n  [ERROR] --tier must be one of: ${validTiers.join(', ')}\n`);
    process.exit(1);
  }

  if (!fs.existsSync(PRIVATE_KEY_FILE)) {
    console.error('\n  [ERROR] Private key not found:', PRIVATE_KEY_FILE);
    console.error('          Run: node keygen.js --generate-keys\n');
    process.exit(1);
  }

  const privateKey  = fs.readFileSync(PRIVATE_KEY_FILE, 'utf8');
  const publicKey   = fs.existsSync(PUBLIC_KEY_FILE)
    ? fs.readFileSync(PUBLIC_KEY_FILE, 'utf8')
    : null;

  const payload       = buildPayload(args.machineId.trim(), args.expires || null, args.tier);
  const activationKey = signPayload(payload, privateKey);

  // Self-verify before printing (catches key mismatch bugs)
  if (publicKey) {
    const check = verifyActivationKey(activationKey, publicKey);
    if (!check.valid) {
      console.error('\n  [FATAL] Self-verification failed:', check.reason);
      console.error('          The generated key is invalid. Do NOT send it.\n');
      process.exit(1);
    }
  }

  // ── Output ─────────────────────────────────────────────────
  console.log('\n  ╔══════════════════════════════════════════════════╗');
  console.log('  ║        SchoolFoundry Activation Key              ║');
  console.log('  ╚══════════════════════════════════════════════════╝\n');
  console.log('  Machine ID :', payload.machineId);
  console.log('  Issued At  :', payload.issuedAt);
  console.log('  Expires At :', payload.expiresAt || 'Never (perpetual)');
  console.log('  Tier       :', payload.tier);
  console.log('  Self-check : PASSED\n');
  console.log('  ── ACTIVATION KEY (copy everything between the lines) ──\n');
  console.log(activationKey);
  console.log('\n  ────────────────────────────────────────────────────\n');
  console.log('  Send this key to the school admin via SMS or WhatsApp.');
  console.log('  They paste it into the Activation screen in the app.\n');
}

main();
