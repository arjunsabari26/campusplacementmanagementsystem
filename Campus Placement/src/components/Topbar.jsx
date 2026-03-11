import React from 'react';
import { Search, UserCircle } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function Topbar() {
  const { currentUser, userRole } = useAppContext();
  return (
    <div className="topbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
          <input 
            type="text" 
            placeholder="Search..." 
            className="form-input" 
            style={{ paddingLeft: '2.5rem', width: '300px' }}
          />
        </div>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        

        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{currentUser?.name || 'User'}</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>{userRole === 'student' ? 'Student' : 'Staff'}</div>
          </div>
          <UserCircle size={32} style={{ color: 'var(--primary-color)' }} />
        </div>
      </div>
    </div>
  );
}
