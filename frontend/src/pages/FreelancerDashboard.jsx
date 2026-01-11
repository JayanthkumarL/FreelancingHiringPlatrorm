import { useEffect, useState } from "react";
import api from "../api/axios";
import Button from "../components/Button";
import Card from "../components/Card";
import Badge from "../components/Badge";

const FreelancerDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await api.get("/jobs");
        setJobs(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        setMessage({
          type: "error",
          text: "Failed to load jobs",
        });
      }
    };

    fetchJobs();
  }, []);

  const applyJob = async (jobId) => {
    try {
      const res = await api.post(`/jobs/${jobId}/apply`);
      setMessage({
        type: "success",
        text: res.data.message || "Applied successfully",
      });
    } catch (err) {
      setMessage({
        type: "error",
        text: "Already applied or something went wrong",
      });
    }

    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <div className="container py-8">
      <div className="dashboard-header mb-8">
        <h1 className="page-title">Freelancer Dashboard</h1>
        <p className="page-subtitle">Browse and apply to the latest opportunities</p>
      </div>

      {message && (
        <div className={`alert alert-${message.type}`}>
          {message.text}
        </div>
      )}

      <div className="job-grid">
        {jobs.length === 0 && (
          <div className="no-jobs-message">
            <p>No jobs available at the moment.</p>
          </div>
        )}

        {jobs.map((job) => (
          <Card key={job._id} hover className="job-card-content">
            <div className="card-header">
               <Badge variant="neutral">Budget: ${job.budget ?? "N/A"}</Badge>
            </div>

            <h3 className="job-title">{job.title || "Untitled Job"}</h3>

            <p className="job-description">
              {job.description || "No description provided"}
            </p>

            <div className="mt-auto">
              <Button 
                className="w-full"
                onClick={() => applyJob(job._id)}
              >
                Apply Now
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FreelancerDashboard;
