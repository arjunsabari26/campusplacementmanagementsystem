import React, { useState, useEffect } from 'react';
import { Bell, Search, UserCircle, X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function Topbar() {
  const { currentUser, userRole } = useAppContext();
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);

  // Initialize mock notifications based on role
  useEffect(() => {
    setNotifications(
      userRole === 'student' ? [
        { id: 1, title: 'TCS Off-Campus Drive', time: '2 mins ago', read: false },
        { id: 2, title: 'Resume Formatting Workshop', time: '1 hour ago', read: false },
        { id: 3, title: 'Profile completed automatically', time: '1 day ago', read: true },
      ] : [
        { id: 1, title: '5 students applied to Tech Mahindra', time: '10 mins ago', read: false },
        { id: 2, title: 'New registration: Arjun', time: '30 mins ago', read: false },
      ]
    );
  }, [userRole]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleMarkAsRead = (id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const handleMarkAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

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
        
        <div style={{ position: 'relative' }}>
          <button 
            style={{ color: 'var(--text-secondary)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: showNotifications ? 'rgba(59, 130, 246, 0.1)' : 'transparent', transition: 'background-color 0.2s' }}
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <Bell size={20} style={{ color: showNotifications ? 'var(--primary-color)' : 'inherit' }} />
            {unreadCount > 0 && (
              <span style={{ position: 'absolute', top: 6, right: 6, width: '8px', height: '8px', backgroundColor: 'var(--danger-color)', borderRadius: '50%' }}></span>
            )}
          </button>

          {showNotifications && (
            <div className="notification-dropdown">
              <div className="notification-header">
                <span style={{ fontWeight: 600 }}>Notifications ({unreadCount})</span>
                <button onClick={() => setShowNotifications(false)}><X size={16} /></button>
              </div>
              <div className="notification-list">
                {notifications.map(notif => (
                  <div 
                    key={notif.id} 
                    className="notification-item" 
                    style={{ borderLeft: notif.read ? '3px solid transparent' : '3px solid var(--primary-color)' }}
                    onClick={() => handleMarkAsRead(notif.id)}
                  >
                    <div style={{ fontWeight: 500, fontSize: '0.875rem', color: notif.read ? 'var(--text-secondary)' : 'var(--text-primary)' }}>
                      {notif.title}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                      {notif.time}
                    </div>
                  </div>
                ))}
              </div>
              <div className="notification-footer">
                <button 
                  onClick={handleMarkAllAsRead}
                  style={{ color: 'var(--primary-color)', fontSize: '0.875rem', fontWeight: 500, width: '100%' }}
                >
                  Mark all as read
                </button>
              </div>
            </div>
          )}
        </div>
        
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
