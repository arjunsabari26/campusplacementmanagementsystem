import React from 'react';
import { Target, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function StudentDashboard() {
  const { currentUser, companies } = useAppContext();

  // Basic mock data
  const appliedCount = currentUser?.applications?.length || 0;
  
  // Calculate eligible companies
  const eligibleCompanies = companies.filter(c => currentUser?.cgpa >= c.cgpaRequired);
  
  // Check profile completion (simple logic)
  const isProfileComplete = currentUser?.skills && currentUser?.projects && currentUser?.resume;

  return (
    <div>
      <h1 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '2rem' }}>Welcome back, {currentUser?.name?.split(' ')[0]} 👋</h1>
      
      <div className="grid-cards">
        <div className="card">
          <div className="card-icon" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--success-color)' }}>
            <Target size={24} />
          </div>
          <div className="card-title">Placement Probability</div>
          <div className="card-value">
            {currentUser?.probability || 0}%
            <span style={{ fontSize: '0.875rem', fontWeight: 'normal', color: 'var(--text-secondary)', marginLeft: '0.5rem' }}>AI Predicted</span>
          </div>
        </div>

        <div className="card">
          <div className="card-icon" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', color: 'var(--primary-color)' }}>
            <CheckCircle size={24} />
          </div>
          <div className="card-title">Applications Submitted</div>
          <div className="card-value">{appliedCount}</div>
        </div>

        <div className="card">
          <div className="card-icon" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', color: 'var(--warning-color)' }}>
            <AlertCircle size={24} />
          </div>
          <div className="card-title">Eligible Companies</div>
          <div className="card-value">{eligibleCompanies.length}</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        <div className="card">
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Clock size={20} className="text-primary" /> Application Activity
          </h2>
          {appliedCount === 0 ? (
            <p style={{ color: 'var(--text-secondary)' }}>You haven't applied to any companies yet.</p>
          ) : (
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {currentUser.applications.map((app, idx) => (
                    <tr key={idx}>
                      <td>{companies.find(c => c.id === app.companyId)?.name || 'Unknown'}</td>
                      <td>
                        <span className={`badge ${app.status === 'Shortlisted' ? 'badge-success' : 'badge-primary'}`}>
                          {app.status}
                        </span>
                      </td>
                      <td>Today</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="card">
            <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Profile Status</h2>
            <div style={{ padding: '1rem', backgroundColor: isProfileComplete ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)', borderRadius: '0.5rem', color: isProfileComplete ? 'var(--success-color)' : 'var(--warning-color)' }}>
              {isProfileComplete ? 'Your profile is 100% complete! Great job.' : 'Your profile is incomplete. Please update your skills, projects, and resume to improve your placement chances.'}
            </div>
          </div>
          
          <div className="card">
            <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Notifications</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ padding: '1rem', borderLeft: '4px solid var(--primary-color)', backgroundColor: 'rgba(15, 23, 42, 0.5)' }}>
                <strong>TCS Off-Campus Drive</strong>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Registration closes in 2 days.</div>
              </div>
              <div style={{ padding: '1rem', borderLeft: '4px solid var(--warning-color)', backgroundColor: 'rgba(15, 23, 42, 0.5)' }}>
                <strong>Resume Formatting Workshop</strong>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Join the webinar on Friday at 4 PM.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
