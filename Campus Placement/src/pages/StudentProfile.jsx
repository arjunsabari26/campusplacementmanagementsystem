import React, { useState, useEffect } from 'react';
import { UserCircle, Save } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function StudentProfile() {
  const { currentUser, updateStudentProfile } = useAppContext();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (currentUser) {
      setFormData(currentUser);
    }
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, resume: e.target.files[0]?.name }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateStudentProfile(formData);
    alert('Profile updated successfully! AI prediction score recalculated.');
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <UserCircle size={32} style={{ color: 'var(--primary-color)' }} />
        My Profile
      </h1>

      <form className="card" onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
          
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input type="text" name="name" value={formData.name || ''} onChange={handleChange} className="form-input" required />
          </div>
          
          <div className="form-group">
            <label className="form-label">Register Number</label>
            <input type="text" name="registerNumber" value={formData.registerNumber || ''} onChange={handleChange} className="form-input" required />
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input type="email" name="email" value={formData.email || ''} onChange={handleChange} className="form-input" required />
          </div>

          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input type="tel" name="phone" value={formData.phone || ''} onChange={handleChange} className="form-input" required />
          </div>

          <div className="form-group">
            <label className="form-label">Department</label>
            <input type="text" name="department" value={formData.department || ''} onChange={handleChange} className="form-input" required />
          </div>

          <div className="form-group">
            <label className="form-label">CGPA (out of 10)</label>
            <input type="number" step="0.01" name="cgpa" value={formData.cgpa || ''} onChange={handleChange} className="form-input" required />
          </div>

          <div className="form-group">
            <label className="form-label">10th Percentage</label>
            <input type="number" step="0.1" name="percentage10th" value={formData.percentage10th || ''} onChange={handleChange} className="form-input" required />
          </div>

          <div className="form-group">
            <label className="form-label">12th / Diploma Percentage</label>
            <input type="number" step="0.1" name="percentage12th" value={formData.percentage12th || ''} onChange={handleChange} className="form-input" required />
          </div>

          <div className="form-group" style={{ gridColumn: 'span 2' }}>
            <label className="form-label">Programming Languages (Comma-separated)</label>
            <input type="text" name="languages" value={formData.languages || ''} onChange={handleChange} className="form-input" placeholder="C++, Java, Python" />
          </div>

          <div className="form-group" style={{ gridColumn: 'span 2' }}>
            <label className="form-label">Technical Skills (Comma-separated)</label>
            <input type="text" name="skills" value={formData.skills || ''} onChange={handleChange} className="form-input" placeholder="React, Node.js, SQL" />
          </div>

          <div className="form-group" style={{ gridColumn: 'span 2' }}>
            <label className="form-label">Projects</label>
            <textarea name="projects" value={formData.projects || ''} onChange={handleChange} className="form-input" rows="3" placeholder="Describe your key projects"></textarea>
          </div>

          <div className="form-group" style={{ gridColumn: 'span 2' }}>
            <label className="form-label">Internship Experience</label>
            <textarea name="internships" value={formData.internships || ''} onChange={handleChange} className="form-input" rows="2" placeholder="Where have you interned?"></textarea>
          </div>

          <div className="form-group" style={{ gridColumn: 'span 2' }}>
            <label className="form-label">Certifications</label>
            <input type="text" name="certifications" value={formData.certifications || ''} onChange={handleChange} className="form-input" placeholder="AWS, Coursera React" />
          </div>

          <div className="form-group" style={{ gridColumn: 'span 2' }}>
            <label className="form-label">Upload Resume (PDF)</label>
            <input type="file" onChange={handleFileChange} className="form-input" accept=".pdf" />
            {formData.resume && <div style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: 'var(--success-color)' }}>Currently uploaded: {formData.resume}</div>}
          </div>

          <div className="form-group">
            <label className="form-label">GitHub Profile</label>
            <input type="url" name="github" value={formData.github || ''} onChange={handleChange} className="form-input" placeholder="github.com/username" />
          </div>

          <div className="form-group">
            <label className="form-label">LinkedIn Profile</label>
            <input type="url" name="linkedin" value={formData.linkedin || ''} onChange={handleChange} className="form-input" placeholder="linkedin.com/in/username" />
          </div>

          <div className="form-group">
            <label className="form-label">LeetCode Profile</label>
            <input type="url" name="leetcode" value={formData.leetcode || ''} onChange={handleChange} className="form-input" placeholder="leetcode.com/username" />
          </div>

        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
          <button type="submit" className="btn btn-primary">
            <Save size={18} />
            Save & Update Profile
          </button>
        </div>
      </form>
    </div>
  );
}
