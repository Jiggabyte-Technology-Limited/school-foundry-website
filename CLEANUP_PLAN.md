Cleanup plan for dead-code findings

- Goal: reduce reported dead-code and tidy unused deps.

- Actions:
  - Remove `zod` from `lib/db/package.json` if truly unused, or move to the package that consumes it (`lib/api-zod`). Run `pnpm -w why zod` to confirm.
  - Investigate `lib/api-client-react/src/custom-fetch.ts` and either remove `BodyType` or update consumers to import it.
  - Keep `artifacts/` ignored (already added to `.fallowrc.json`). Consider archiving or removing `artifacts/` if not needed.
  - Re-run `npx fallow dead-code --format json` after changes to verify progress.

- Quick commands:
```
pnpm -w why zod
npx fallow dead-code --format json > fallow-report.json
git add .fallowrc.json CLEANUP_PLAN.md && git commit -m "fallow: ignore artifacts; add cleanup plan"
```

If you want, I can open the `lib/db/package.json` and `lib/api-client-react/src/custom-fetch.ts` and prepare the exact edits.
