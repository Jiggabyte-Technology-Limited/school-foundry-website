import { Router, type IRouter } from "express";
import { DemoSubmissionRequest } from "@workspace/api-zod";
import { deliverSubmissionEmail } from "../lib/submissions";

const router: IRouter = Router();

router.post("/demo", async (req, res) => {
  const parsed = DemoSubmissionRequest.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({
      error: parsed.error.issues[0]?.message || "Invalid demo request",
    });
    return;
  }

  const { name, email, phone, school, message } = parsed.data;

  try {
    const result = await deliverSubmissionEmail({
      source: "demo",
      subject: `New demo request from ${name}${school ? ` (${school})` : ""}`,
      heading: "New Demo Request - SchoolFoundry",
      replyTo: email,
      fields: [
        { label: "Name", value: name },
        { label: "Email", value: email },
        ...(phone ? [{ label: "Phone", value: phone }] : []),
        ...(school ? [{ label: "School", value: school }] : []),
      ],
      message,
    });

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      error: err instanceof Error ? err.message : "Failed to send message. Please try again.",
    });
  }
});

export default router;
