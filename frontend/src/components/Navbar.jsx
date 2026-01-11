import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
  const navigate = useNavigate();
  // Simple check for auth - in a real app use a Context
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          FreelanceHub
        </Link>

        <div className="navbar-links">
          {!token ? (
            <>
              <Link to="/" className="navbar-link">Find Work</Link>
              <Link to="/" className="navbar-link">Hire Talent</Link>
              <div className="navbar-actions">
                <Button variant="ghost" onClick={() => navigate('/login')}>Log In</Button>
                <Button variant="primary" onClick={() => navigate('/register')}>Sign Up</Button>
              </div>
            </>
          ) : (
            <>
              <span className="navbar-user">
                {role === 'client' ? 'Client' : 'Freelancer'}
              </span>
              <div className="navbar-actions">
                 <Button 
                  variant="primary" 
                  size="sm"
                  onClick={() => navigate(role === 'client' ? '/client' : '/freelancer')}
                >
                  Dashboard
                </Button>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  Log Out
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
