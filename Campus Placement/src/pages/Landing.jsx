import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Briefcase } from 'lucide-react';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div style={{ textAlign: 'center', maxWidth: '800px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', background: 'linear-gradient(to right, #3b82f6, #10b981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          AI-Driven Campus Placement System
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
          Empowering your career journey with artificial intelligence. Connect with top employers, predict your placement probability, and secure your dream job.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div className="card" style={{ cursor: 'pointer', textAlign: 'center', padding: '3rem 2rem' }} onClick={() => navigate('/student/login')}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)' }}>
                <GraduationCap size={40} />
              </div>
            </div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Student Portal</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Log in or sign up to update your profile, view eligible companies, and chat with your AI assistant.</p>
          </div>

          <div className="card" style={{ cursor: 'pointer', textAlign: 'center', padding: '3rem 2rem' }} onClick={() => navigate('/staff/login')}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary-color)' }}>
                <Briefcase size={40} />
              </div>
            </div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Staff / Admin Portal</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Log in to monitor student activities, view analytics, and manage company visits.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
