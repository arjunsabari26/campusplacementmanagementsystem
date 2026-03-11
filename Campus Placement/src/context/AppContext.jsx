import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(null); // 'student' or 'staff'
  const [currentUser, setCurrentUser] = useState(null);
  
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'John Doe',
      registerNumber: '123456',
      department: 'Computer Science',
      email: 'john@example.com',
      phone: '1234567890',
      cgpa: 8.5,
      percentage10th: 90,
      percentage12th: 88,
      languages: 'Java, Python, JavaScript',
      skills: 'React, Node.js, SQL',
      projects: 'E-commerce platform, Chat app',
      certifications: 'AWS Cloud Practitioner',
      internships: 'Software Intern at TechCorp',
      github: 'github.com/johndoe',
      linkedin: 'linkedin.com/in/johndoe',
      leetcode: 'leetcode.com/johndoe',
      applications: [
        { companyId: 1, status: 'Shortlisted' }
      ]
    }
  ]);

  const [companies, setCompanies] = useState([
    { id: 1, name: 'Tech Mahindra', role: 'Software Engineer', cgpaRequired: 7.5, skillsRequired: 'Java, React', ctc: '6 LPA' },
    { id: 2, name: 'TCS', role: 'Systems Engineer', cgpaRequired: 6.5, skillsRequired: 'Python, SQL', ctc: '4 LPA' },
    { id: 3, name: 'Google', role: 'SDE 1', cgpaRequired: 8.5, skillsRequired: 'Data Structures, Algorithms', ctc: '24 LPA' }
  ]);

  // Basic mock AI predictor based on arbitrary weights
  const calculatePrediction = (student) => {
    if (!student) return 0;
    let score = (student.cgpa / 10) * 40; // max 40
    if (student.skills && student.skills.split(',').length >= 3) score += 20;
    if (student.projects && student.projects.length > 10) score += 20;
    if (student.internships && student.internships.length > 5) score += 20;
    return Math.min(Math.round(score), 99);
  };

  const login = (role, credentials) => {
    setUserRole(role);
    if (role === 'student') {
      const student = students[0]; // just mock login first user
      setCurrentUser({ ...student, probability: calculatePrediction(student) });
    } else {
      setCurrentUser({ name: 'Admin Staff', role: 'Placement Officer' });
    }
    return true;
  };

  const logout = () => {
    setUserRole(null);
    setCurrentUser(null);
  };

  const updateStudentProfile = (updatedData) => {
    setCurrentUser(prev => {
      const newUser = { ...prev, ...updatedData };
      newUser.probability = calculatePrediction(newUser);
      return newUser;
    });
    setStudents(prev => prev.map(s => s.id === currentUser.id ? { ...s, ...updatedData } : s));
  };

  const applyToCompany = (companyId) => {
    setCurrentUser(prev => ({
      ...prev,
      applications: [...(prev.applications || []), { companyId, status: 'Applied' }]
    }));
  };

  return (
    <AppContext.Provider value={{
      userRole, currentUser, login, logout, students, companies, updateStudentProfile, calculatePrediction, applyToCompany
    }}>
      {children}
    </AppContext.Provider>
  );
};
