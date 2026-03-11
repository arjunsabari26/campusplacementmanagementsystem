import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout & Common
import Layout from './components/Layout';
import Landing from './pages/Landing';

// Student
import StudentAuth from './pages/StudentAuth';
import StudentDashboard from './pages/StudentDashboard';
import StudentProfile from './pages/StudentProfile';
import StudentCompanies from './pages/StudentCompanies';

// Staff
import StaffAuth from './pages/StaffAuth';
import StaffDashboard from './pages/StaffDashboard';
import StaffStudents from './pages/StaffStudents';
import StaffAnalytics from './pages/StaffAnalytics';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      
      {/* Auth */}
      <Route path="/student/login" element={<StudentAuth />} />
      <Route path="/staff/login" element={<StaffAuth />} />

      {/* Student Protected Routes */}
      <Route element={<Layout allowedRole="student" />}>
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="/student/companies" element={<StudentCompanies />} />
      </Route>

      {/* Staff Protected Routes */}
      <Route element={<Layout allowedRole="staff" />}>
        <Route path="/staff/dashboard" element={<StaffDashboard />} />
        <Route path="/staff/students" element={<StaffStudents />} />
        <Route path="/staff/analytics" element={<StaffAnalytics />} />
      </Route>
    </Routes>
  );
}
