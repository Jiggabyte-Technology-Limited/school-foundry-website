import * as zod from "zod";

const optionalText = (maxLength: number) =>
  zod.preprocess((value) => {
    if (typeof value !== "string") {
      return value;
    }

    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : undefined;
  }, zod.string().trim().max(maxLength).optional());

const requiredText = (minLength: number, maxLength: number) =>
  zod.string().trim().min(minLength).max(maxLength);

export const ContactSubmissionRequest = zod.object({
  name: requiredText(2, 120),
  email: zod.string().trim().email(),
  phone: optionalText(50),
  school: optionalText(120),
  message: requiredText(10, 2000),
});

export const DemoSubmissionRequest = ContactSubmissionRequest;

export const WaitlistSubmissionRequest = zod.object({
  name: optionalText(120),
  email: zod.string().trim().email(),
  school: optionalText(120),
});

export type ContactSubmission = zod.infer<typeof ContactSubmissionRequest>;
export type DemoSubmission = zod.infer<typeof DemoSubmissionRequest>;
export type WaitlistSubmission = zod.infer<typeof WaitlistSubmissionRequest>;
