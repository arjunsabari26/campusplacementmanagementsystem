import React from 'react';
import { Briefcase, Building, Send } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function StudentCompanies() {
  const { currentUser, companies, applyToCompany } = useAppContext();

  const handleApply = (companyId) => {
    applyToCompany(companyId);
    alert('Successfully applied to the company!');
  };

  return (
    <div>
      <h1 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <Briefcase size={32} style={{ color: 'var(--primary-color)' }} />
        Available Companies
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {companies.map(company => {
          const isEligible = currentUser?.cgpa >= company.cgpaRequired;
          const hasApplied = currentUser?.applications?.some(app => app.companyId === company.id);

          return (
            <div key={company.id} className="card" style={{ borderTop: `4px solid ${isEligible ? 'var(--success-color)' : 'var(--danger-color)'}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '0.5rem', backgroundColor: 'rgba(15, 23, 42, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Building size={24} style={{ color: 'var(--text-secondary)' }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{company.name}</h3>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{company.role}</div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>CTC Offered</span>
                  <span style={{ fontWeight: 600 }}>{company.ctc}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>CGPA Cutoff</span>
                  <span>{company.cgpaRequired}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Key Skills</span>
                  <span style={{ textAlign: 'right', maxWidth: '60%' }}>{company.skillsRequired}</span>
                </div>
              </div>

              {hasApplied ? (
                <button className="btn" style={{ width: '100%', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--success-color)', cursor: 'default' }} disabled>
                  Applied Successfully
                </button>
              ) : isEligible ? (
                <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => handleApply(company.id)}>
                  <Send size={18} /> Apply Now
                </button>
              ) : (
                <button className="btn" style={{ width: '100%', backgroundColor: 'rgba(239, 68, 68, 0.1)', color: 'var(--danger-color)', cursor: 'not-allowed' }} disabled>
                  Minimum CGPA not met
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
