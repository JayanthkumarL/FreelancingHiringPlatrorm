import { useState } from "react";
import Button from "./Button";

const PostJobForm = ({ onSubmit, onCancel }) => {
  const [job, setJob] = useState({
    title: "",
    description: "",
    budget: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(job);
  };

  return (
    <form onSubmit={handleSubmit} className="form-stack">
      <div className="form-group">
        <label>Job Title</label>
        <input
          placeholder="e.g. Senior Content Writer"
          required
          value={job.title}
          onChange={(e) =>
            setJob({ ...job, title: e.target.value })
          }
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          placeholder="Describe the job requirements..."
          required
          rows={4}
          value={job.description}
          onChange={(e) =>
            setJob({ ...job, description: e.target.value })
          }
        />
      </div>

      <div className="form-group">
        <label>Budget ($)</label>
        <input
          type="number"
          placeholder="500"
          required
          value={job.budget}
          onChange={(e) =>
            setJob({ ...job, budget: e.target.value })
          }
        />
      </div>

      <div className="form-actions">
        <Button variant="ghost" type="button" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="primary" type="submit">
          Post Job
        </Button>
      </div>
    </form>
  );
};

export default PostJobForm;
