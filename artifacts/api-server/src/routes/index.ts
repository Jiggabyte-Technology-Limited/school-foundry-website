import { Router, type IRouter } from "express";
import healthRouter from "./health";
import contactRouter from "./contact";
import demoRouter from "./demo";
import waitlistRouter from "./waitlist";

const router: IRouter = Router();

router.use(healthRouter);
router.use(contactRouter);
router.use(demoRouter);
router.use(waitlistRouter);

export default router;
