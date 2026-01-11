import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import Badge from "../components/Badge";

const dummyJobs = [
  {
    id: 1,
    title: "Senior Content Writer",
    category: "Writing",
    description: "We need an experienced writer to craft compelling blog posts and technical documentation for our SaaS product.",
    budget: 500,
    type: "Remote",
    posted: "2h ago"
  },
  {
    id: 2,
    title: "Frontend Developer (React)",
    category: "Development",
    description: "Looking for a React expert to build a responsive dashboard with complex data visualization requirements.",
    budget: 1500,
    type: "Remote",
    posted: "5h ago"
  },
  {
    id: 3,
    title: "Brand Identity Designer",
    category: "Design",
    description: "Create a complete brand identity including logo, color palette, and typography for a fintech startup.",
    budget: 800,
    type: "Contract",
    posted: "1d ago"
  },
  {
    id: 4,
    title: "Data Entry Specialist",
    category: "Typing",
    description: "Accurate data entry required for a large ecommerce inventory project. Excel proficiency needed.",
    budget: 300,
    type: "Part-time",
    posted: "1d ago"
  },
  {
    id: 5,
    title: "SEO Manager",
    category: "Marketing",
    description: "Develop and implement an effective SEO strategy to increase organic traffic and search rankings.",
    budget: 1200,
    type: "Remote",
    posted: "2d ago"
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("All");

  const filteredJobs =
    category === "All"
      ? dummyJobs
      : dummyJobs.filter((job) => job.category === category);

  return (
    <>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title">
              Find the perfect <span className="text-highlight">freelance</span> services for your business
            </h1>
            <p className="hero-subtitle">
              Work with talented people at the most affordable price to get the most out of your time and cost.
            </p>
            <div className="hero-actions">
               <Button size="lg" onClick={() => navigate("/register")}>
                Get Started
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('jobs').scrollIntoView()}>
                Browse Jobs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS / TRUSTED BY */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">10k+</div>
              <div className="stat-label">Freelancers</div>
            </div>
             <div className="stat-item">
              <div className="stat-number">20k+</div>
              <div className="stat-label">Invoices Paid</div>
            </div>
             <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfaction</div>
            </div>
             <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* JOBS SECTION */}
      <section id="jobs" className="jobs-section container">
        <div className="jobs-header">
          <div>
            <h2 className="section-title">Latest Opportunities</h2>
            <p className="section-subtitle">Hand-picked jobs for you to explore.</p>
          </div>

          {/* FILTER BAR */}
          <div className="filter-wrapper">
             <label className="filter-label">Category:</label>
             <select 
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
              className="filter-select"
            >
              <option value="All">All Categories</option>
              <option value="Writing">Writing</option>
              <option value="Development">Development</option>
              <option value="Design">Design</option>
              <option value="Typing">Typing</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>
        </div>

        {/* JOB GRID */}
        <div className="job-grid">
          {filteredJobs.map((job) => (
            <Card key={job.id} hover className="job-card-content">
              <div className="card-header">
                <Badge variant="neutral">{job.category}</Badge>
                <span className="timestamp">{job.posted}</span>
              </div>
              
              <h3 className="job-title">{job.title}</h3>
              <p className="job-description">
                {job.description}
              </p>

              <div className="card-footer">
                <span className="budget">
                  ${job.budget} <span className="budget-type">Fixed</span>
                </span>
                <Button size="sm" onClick={() => navigate("/login")}>
                  Apply Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};


export default Home;
