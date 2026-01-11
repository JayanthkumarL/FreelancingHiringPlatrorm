import Job from "../models/Job.js";

/* CLIENT CREATES JOB */
export const createJob = async (req, res) => {
  const job = await Job.create({
    ...req.body,
    client: req.user.id,
  });
  res.status(201).json(job);
};

/* FREELANCER APPLIES TO JOB */
export const applyJob = async (req, res) => {
  const job = await Job.findById(req.params.id);

  if (!job) {
    return res.status(404).json({ message: "Job not found" });
  }

  const alreadyApplied = job.applications.find(
    (app) => app.freelancer.toString() === req.user.id
  );

  if (alreadyApplied) {
    return res.status(400).json({ message: "Already applied" });
  }

  job.applications.push({
    freelancer: req.user.id,
    status: "pending",
  });

  await job.save();
  res.json({ message: "Applied successfully" });
};

/* FREELANCER VIEW ALL JOBS */
export const getJobs = async (req, res) => {
  const jobs = await Job.find().populate("client", "name email");
  res.json(jobs);
};

/* CLIENT VIEW OWN JOBS + APPLICANTS */
export const getClientJobs = async (req, res) => {
  const jobs = await Job.find({ client: req.user.id })
    .populate("applications.freelancer", "name email");
  res.json(jobs);
};

/* CLIENT HIRES FREELANCER */
export const hireFreelancer = async (req, res) => {
  const { jobId, freelancerId } = req.params;

  const job = await Job.findById(jobId).populate("applications.freelancer");

  job.applications.forEach(app => {
    if (app.freelancer._id.toString() === freelancerId) {
      app.status = "hired";

      // Simulated email
      console.log(`
        📧 EMAIL SENT
        To: ${app.freelancer.email}
        Subject: You have been hired!
        Message: Congratulations! You are hired for the job "${job.title}"
      `);
    } else {
      app.status = "rejected";
    }
  });

  await job.save();

  res.json({
    message: "Freelancer hired successfully. Email notification sent."
  });
};