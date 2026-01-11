import { useEffect, useState } from "react";
import api from "../api/axios";
import PostJobForm from "../components/PostJobForm";
import Button from "../components/Button";
import Card from "../components/Card";
import Badge from "../components/Badge";

const ClientDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [alert, setAlert] = useState(null);
  const [showPostJob, setShowPostJob] = useState(false);

  const fetchJobs = async () => {
    try {
      const { data } = await api.get("/jobs/client");
      setJobs(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to fetch jobs");
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const hireFreelancer = async (jobId, freelancerId) => {
    try {
      const res = await api.post(
        `/jobs/${jobId}/hire/${freelancerId}`
      );

      setAlert({
        type: "success",
        message: res.data.message || "Freelancer hired successfully",
      });

      fetchJobs();
      setTimeout(() => setAlert(null), 3000);
    } catch (err) {
      setAlert({
        type: "error",
        message: "Failed to hire freelancer",
      });
      setTimeout(() => setAlert(null), 3000);
    }
  };

  const postJob = async (jobData) => {
    try {
      await api.post("/jobs", jobData);
      setShowPostJob(false);
      fetchJobs();
    } catch (err) {
      window.alert("Failed to post job");
    }
  };

  return (
    <div className="container py-8">
      <div className="dashboard-header">
        <div>
          <h1 className="page-title">Client Dashboard</h1>
          <p className="page-subtitle">Manage your job postings and applicants</p>
        </div>
        {!showPostJob && (
          <Button onClick={() => setShowPostJob(true)}>
             + Post New Job
          </Button>
        )}
      </div>

      {/* ALERT */}
      {alert && (
        <div className={`alert alert-${alert.type}`}>
          {alert.message}
        </div>
      )}

      {/* EMPTY STATE FOR NEW CLIENT */}
      {jobs.length === 0 && !showPostJob && (
        <Card className="empty-state-card">
          <h2 className="empty-title">Welcome to FreelanceHub 👋</h2>
          <p className="empty-text">
            You haven’t posted any jobs yet. Post your first job and start hiring skilled freelancers.
          </p>
          <Button onClick={() => setShowPostJob(true)}>
            Post Your First Job
          </Button>
        </Card>
      )}

      {/* POST JOB FORM */}
      {showPostJob && (
        <Card className="post-job-container">
          <h2 className="form-title">Post a New Job</h2>
          <PostJobForm
            onSubmit={postJob}
            onCancel={() => setShowPostJob(false)}
          />
        </Card>
      )}

      {/* JOB LIST */}
      <div className="dashboard-grid">
        {jobs.map((job) => (
          <Card key={job._id} className="job-item">
            <div className="job-header">
              <div>
                <h3 className="job-title-sm">{job.title}</h3>
                <p className="job-desc-sm">{job.description}</p>
              </div>
              <Badge variant="neutral" className="budget-badge">
                Budget: ${job.budget}
              </Badge>
            </div>

            <div className="job-applicants-section">
              <h4 className="applicants-title">
                Applicants ({job.applications.length})
              </h4>

              {job.applications.length === 0 && (
                <p className="no-applicants">
                  No applicants yet.
                </p>
              )}

              <div className="applicants-list">
                {job.applications.map((app) => (
                  <div className="applicant-row" key={app._id}>
                    <span className="applicant-name">
                      {app.freelancer.name}
                    </span>

                    {app.status === "pending" ? (
                      <Button
                        size="sm"
                        onClick={() => hireFreelancer(job._id, app.freelancer._id)}
                      >
                        Hire Applicant
                      </Button>
                    ) : (
                      <Badge variant={app.status === 'hired' ? 'success' : 'danger'}>
                        {app.status}
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ClientDashboard;
