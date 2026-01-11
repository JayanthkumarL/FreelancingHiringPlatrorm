import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    budget: Number,
    client: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    applications: [
      {
        freelancer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        status: { type: String, default: "pending" },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobSchema);
