import React from 'react';
import { Users, FileText, Building2, CheckCircle2 } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function StaffDashboard() {
  const { students, companies } = useAppContext();

  // Basic stats
  const totalStudents = students.length;
  const activeStudents = students.length; // mock
  const totalApplications = students.reduce((acc, s) => acc + (s.applications?.length || 0), 0);
  const shortlistedCount = students.reduce((acc, s) => {
    return acc + (s.applications?.filter(a => a.status === 'Shortlisted').length || 0);
  }, 0);

  return (
    <div>
      <h1 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '2rem' }}>Staff Dashboard</h1>
      
      <div className="grid-cards">
        <div className="card">
          <div className="card-icon" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', color: 'var(--primary-color)' }}>
            <Users size={24} />
          </div>
          <div className="card-title">Total Registered Students</div>
          <div className="card-value">{totalStudents}</div>
        </div>

        <div className="card">
          <div className="card-icon" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', color: 'var(--warning-color)' }}>
            <FileText size={24} />
          </div>
          <div className="card-title">Total Applications</div>
          <div className="card-value">{totalApplications}</div>
        </div>

        <div className="card">
          <div className="card-icon" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--success-color)' }}>
            <CheckCircle2 size={24} />
          </div>
          <div className="card-title">Shortlisted Candidates</div>
          <div className="card-value">{shortlistedCount}</div>
        </div>

        <div className="card">
          <div className="card-icon" style={{ backgroundColor: 'rgba(148, 163, 184, 0.1)', color: 'var(--muted)' }}>
            <Building2 size={24} />
          </div>
          <div className="card-title">Companies Visiting</div>
          <div className="card-value">{companies.length}</div>
        </div>
      </div>

      <div style={{ display: 'grid', gap: '2rem' }}>
        <div className="card">
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Recent Activity
          </h2>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Department</th>
                  <th>Company Applied</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {students.map(student => (
                  student.applications?.map((app, idx) => (
                    <tr key={`${student.id}-${idx}`}>
                      <td>{student.name}</td>
                      <td>{student.department}</td>
                      <td>{companies.find(c => c.id === app.companyId)?.name || 'Unknown'}</td>
                      <td>
                        <span className={`badge ${app.status === 'Shortlisted' ? 'badge-success' : 'badge-primary'}`}>
                          {app.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
