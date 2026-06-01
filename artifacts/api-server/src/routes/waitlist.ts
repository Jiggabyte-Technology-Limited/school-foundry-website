import { Router, type IRouter } from "express";
import { WaitlistSubmissionRequest } from "@workspace/api-zod";
import { deliverSubmissionEmail } from "../lib/submissions";

const router: IRouter = Router();

router.post("/waitlist", async (req, res) => {
  const parsed = WaitlistSubmissionRequest.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({
      error: parsed.error.issues[0]?.message || "Invalid waitlist request",
    });
    return;
  }

  const { name, email, school } = parsed.data;

  try {
    const result = await deliverSubmissionEmail({
      source: "waitlist",
      subject: `New waitlist signup from ${email}`,
      heading: "New Waitlist Signup - SchoolFoundry",
      replyTo: email,
      fields: [
        { label: "Email", value: email },
        ...(name ? [{ label: "Name", value: name }] : []),
        ...(school ? [{ label: "School", value: school }] : []),
      ],
    });

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      error: err instanceof Error ? err.message : "Failed to send message. Please try again.",
    });
  }
});

export default router;
