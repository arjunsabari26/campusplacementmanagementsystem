import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { BookOpen, Trophy } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

export default function StaffAnalytics() {
  const { students, companies } = useAppContext();

  // Mock data calculations based on context
  const deptStats = Object.values(students.reduce((acc, student) => {
    const dept = student.department || 'Unknown';
    if (!acc[dept]) acc[dept] = { name: dept, total: 0, placed: 0 };
    acc[dept].total += 1;
    if (student.applications?.some(a => a.status === 'Shortlisted')) {
      acc[dept].placed += 1;
    }
    return acc;
  }, {}));

  const companyStats = companies.map(c => {
    const apps = students.filter(s => s.applications?.some(a => a.companyId === c.id)).length;
    return { name: c.name, applications: apps };
  });

  const skillData = [
    { name: 'React/Web', value: 45 },
    { name: 'Python/AI', value: 30 },
    { name: 'Java/Spring', value: 20 },
    { name: 'Cloud/DevOps', value: 5 },
  ]; // purely mock data to show robust charts

  return (
    <div>
      <h1 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '2rem' }}>Analytics & Reports</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', marginBottom: '2rem' }}>
        
        <div className="card">
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BookOpen size={20} className="text-primary" /> Department-wise Placement Rate
          </h2>
          <div style={{ height: '300px', width: '100%' }}>
            <ResponsiveContainer>
              <BarChart data={deptStats}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }} />
                <Legend />
                <Bar dataKey="total" fill="#3b82f6" name="Total Students" radius={[4, 4, 0, 0]} />
                <Bar dataKey="placed" fill="#10b981" name="Placed" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Trophy size={20} className="text-secondary" /> Skill Distribution
          </h2>
          <div style={{ height: '300px', width: '100%' }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={skillData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {skillData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="card" style={{ width: '100%' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Company-wise Applications</h2>
        <div style={{ height: '300px', width: '100%' }}>
          <ResponsiveContainer>
            <BarChart data={companyStats} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis type="number" stroke="#94a3b8" />
              <YAxis dataKey="name" type="category" stroke="#94a3b8"  width={120} />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }} />
              <Bar dataKey="applications" fill="#8b5cf6" name="Total Applications" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
