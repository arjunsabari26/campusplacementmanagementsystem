import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function StaffAuth() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const { login } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    login('staff', {});
    navigate('/staff/dashboard');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem', color: 'var(--secondary-color)' }}>
            <Briefcase size={48} />
          </div>
          <h2 className="auth-title">Staff / Admin Portal</h2>
          <p className="auth-subtitle">{isLogin ? 'Sign in to access admin dashboard' : 'Request admin access'}</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-input" placeholder="Admin Name" required />
            </div>
          )}
          
          <div className="form-group">
            <label className="form-label">Staff Email / ID</label>
            <input type="text" className="form-input" placeholder="admin@college.edu" required />
          </div>
          
          <div className="form-group">
            <label className="form-label">Password</label>
            <input type="password" className="form-input" placeholder="••••••••" required />
          </div>
          
          <button type="submit" className="btn" style={{ backgroundColor: 'var(--secondary-color)', color: 'white', width: '100%', padding: '1rem', marginTop: '1rem' }}>
            {isLogin ? 'Sign In as Staff' : 'Request Access'}
          </button>
        </form>
        
        <div style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--text-secondary)' }}>
          {isLogin ? "Need staff access? " : "Already verified? "}
          <button 
            type="button" 
            onClick={() => setIsLogin(!isLogin)}
            style={{ color: 'var(--secondary-color)', fontWeight: 600, textDecoration: 'underline' }}
          >
            {isLogin ? 'Request' : 'Log In'}
          </button>
        </div>
      </div>
    </div>
  );
}
