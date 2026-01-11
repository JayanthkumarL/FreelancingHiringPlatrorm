import express from "express";
import {
  createJob,
  applyJob,
  getJobs,
  getClientJobs,
  hireFreelancer,
} from "../controllers/jobController.js";
import { protect, authorize } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getJobs);
router.post("/", protect, authorize("client"), createJob);
router.post("/:id/apply", protect, authorize("freelancer"), applyJob);

router.get("/client", protect, authorize("client"), getClientJobs);

router.post(
  "/:jobId/hire/:freelancerId",
  protect,
  authorize("client"),
  hireFreelancer
);

export default router;
