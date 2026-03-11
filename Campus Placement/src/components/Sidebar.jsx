import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, User, Briefcase, Users, FileText, BarChart3, LogOut, GraduationCap } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function Sidebar() {
  const { userRole, logout } = useAppContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const studentLinks = [
    { to: '/student/dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { to: '/student/profile', icon: <User size={20} />, label: 'My Profile' },
    { to: '/student/companies', icon: <Briefcase size={20} />, label: 'Companies' },
  ];

  const staffLinks = [
    { to: '/staff/dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { to: '/staff/students', icon: <Users size={20} />, label: 'Students' },
    { to: '/staff/analytics', icon: <BarChart3 size={20} />, label: 'Analytics' },
  ];

  const links = userRole === 'student' ? studentLinks : staffLinks;

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <GraduationCap size={28} />
        Campus AI
      </div>
      <div className="nav-links">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            {link.icon}
            {link.label}
          </NavLink>
        ))}
        <button className="nav-item" onClick={handleLogout} style={{ marginTop: 'auto', width: '100%' }}>
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </div>
  );
}
