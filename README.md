# AI-Driven Campus Placement System

Welcome to the **AI-Driven Campus Placement System**! This is a modern, responsive, full-stack web application designed to streamline the recruitment process. It caters to multiple roles including Students, Recruiters, and University Placement Cells/Admin. Built specifically to tackle the complexities of campus placements, this system integrates AI-powered features for smarter filtering, advanced skill assessments, and continuous student career development.

## 🚀 Features

### For Students
- **Personalized Dashboards**: Get insights into your application status, upcoming drives, and skill gaps.
- **AI-Powered Resume Builder & Parser**: Intelligently extract your details and assist in creating industry-standard resumes.
- **Smart Recommendations**: Receive job recommendations based on your skills, academic record, and career aspirations.
- **Mock Interviews & Feedback**: Use AI-driven mock interviews to prep for the real thing and get actionable feedback.
- **Analytics & Tracking**: Keep track of the companies you have applied to, coding assessments taken, and interview progress.

### For Recruiters
- **Dynamic Dashboards**: Seamlessly post new jobs and monitor active applications.
- **Automated Candidate Filtering**: Use AI to automatically parse, score, and rank candidates based on job descriptions.
- **Interview Scheduling**: Efficiently schedule test rounds, technical interviews, and HR rounds.
- **Analytics & Metrics**: View detailed statistics around the health of hiring pipelines, diversity demographics, and drop-off rates.

### For Admin/Placement Cell
- **Centralized Control Panel**: Easily manage all students and onboard recruiter partners.
- **Drive Management**: Organize and schedule various campus placement drives end-to-end.
- **Comprehensive Analytics**: Monitor the overall placement statistics, top recruiting companies, and year-over-year growth.

## 🛠 Technology Stack

This project leverages modern technologies to ensure scalability, security, and exceptional performance:

- **Frontend**: 
  - [React 19](https://react.dev/)
  - [Vite 7](https://vitejs.dev/) for blazing-fast builds
  - [React Router DOM](https://reactrouter.com/) for page navigation
  - Context API / Custom Hooks for state management
  - Vanilla CSS for styling (focusing on modern standard, flexbox, grid, glassmorphism, responsive UI)
  - [Recharts](https://recharts.org/) for beautiful, responsive analytics dashboards
  - [Lucide React](https://lucide.dev/) for crisp, versatile icons

## 📦 Installation & Setup

Follow these steps to set up and run the system locally on your machine.

### Prerequisites

Ensure you have the following installed before proceeding:
- **Node.js**: v18 or newer. Try to stick to the LTS version for maximum compatibility.
- **npm** or **yarn** or **pnpm** (Package manager)

### Quick Start

1. **Clone the repository:**
   If you have a git repository setup, start by cloning it to your local environment.
   ```bash
   git clone <repository_url>
   cd campus-placement
   ```

2. **Install all dependencies:**
   This project uses `npm` for managing packages. Run the following command:
   ```bash
   npm install
   ```
   *(This will resolve all dependencies defined in `package.json`.)*

3. **Start the development server:**
   Launch the system via Vite's local dev server:
   ```bash
   npm run dev
   ```

4. **Access the application:**
   Open your browser and navigate to the local host address provided by Vite (e.g., `http://localhost:5173`).

## 📁 Project Structure

A typical high-level view of the source directory looks like this:

```
campus-placement/
├── src/
│   ├── components/     # Reusable UI elements (Topbar, Sidebar, Chatbot, Layout, cards, forms, etc.)
│   ├── pages/          # All major page components (e.g. Dashboard, Applications, Jobs, Settings)
│   ├── context/        # React context providers for global state
│   ├── assets/         # Static assets like images and branding materials
│   ├── index.css       # Core styling & CSS variables
│   ├── main.jsx        # Primary React render entry point
│   └── App.jsx         # Component combining routing and Layout container
├── index.html          # Application skeleton
├── package.json        # Manifest file indicating dependencies and scripts
└── vite.config.js      # Bundler configurations
```

## 🤝 Contributing
Contributions, issues, and feature requests are always welcome! Feel free to check out the issues page if you want to contribute.

## 📜 License
This project is open-source and free to adapt for your own campus ecosystem requirements.
