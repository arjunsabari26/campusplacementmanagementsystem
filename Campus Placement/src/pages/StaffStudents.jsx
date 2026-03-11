import React, { useState } from 'react';
import { Search, Filter, Mail, MessageSquare } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function StaffStudents() {
  const { students, companies } = useAppContext();
  const [filterCompany, setFilterCompany] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  let displayedStudents = students;

  if (searchTerm) {
    displayedStudents = displayedStudents.filter(s => 
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      s.department.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (filterCompany) {
    const company = companies.find(c => c.id === Number(filterCompany));
    if (company) {
      displayedStudents = displayedStudents.filter(s => s.cgpa >= company.cgpaRequired);
    }
  }

  return (
    <div>
      <h1 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '2rem' }}>Student Profiles & Shortlisting</h1>

      <div className="card" style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <div style={{ flex: 1, position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
          <input 
            type="text" 
            placeholder="Search by name or department..." 
            className="form-input" 
            style={{ paddingLeft: '2.5rem' }}
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Filter size={18} style={{ color: 'var(--text-secondary)' }} />
          <select className="form-input" value={filterCompany} onChange={e => setFilterCompany(e.target.value)} style={{ width: 'auto' }}>
            <option value="">All Students</option>
            {companies.map(c => (
              <option key={c.id} value={c.id}>Shortlist for {c.name}</option>
            ))}
          </select>
        </div>

        <button className="btn btn-primary">
          <Mail size={18} /> Notify Group
        </button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Reg No</th>
              <th>Department</th>
              <th>CGPA</th>
              <th>Skills</th>
              <th>AI Probability</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayedStudents.map((student) => (
              <tr key={student.id}>
                <td style={{ fontWeight: 500 }}>{student.name}</td>
                <td style={{ color: 'var(--text-secondary)' }}>{student.registerNumber}</td>
                <td>{student.department}</td>
                <td>{student.cgpa}</td>
                <td>
                  <div style={{ maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {student.skills || 'N/A'}
                  </div>
                </td>
                <td>
                  <span className={`badge ${student.probability > 70 ? 'badge-success' : student.probability > 40 ? 'badge-warning' : 'badge-danger'}`}>
                    {student.probability || 0}%
                  </span>
                </td>
                <td>
                  <button className="btn" style={{ padding: '0.5rem', color: 'var(--primary-color)' }}>
                    <MessageSquare size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {displayedStudents.length === 0 && (
              <tr>
                <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>No students found matching your criteria.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
