# TerraSoil Farm and Soil Health Monitoring Application

## Project Overview

TerraSoil is a scalable web-based farm and soil health monitoring platform. The frontend is built with React using Vite. The project is designed to help farmers register fields, monitor soil health, perform soil tests, and later receive AI-powered recommendations.

This README explains how to open and run the current project on a local computer.

---

## Current Project Features

The current frontend includes:

- Landing page
- About page
- Login page
- Sign up page
- Farmer dashboard
- Field dashboard
- Field registration form
- Soil health overview
- Soil test section with two options:
  - Upload/scan soil image
  - Enter soil test results manually
- Demo video placeholder
- Responsive design for desktop and mobile screens

---

## Technologies Used

- React
- Vite
- JavaScript
- CSS
- React Router DOM
- Git and GitHub

---

## Folder Structure

The main frontend files are located inside:

```text
frontend/
└── src/
    ├── pages/
    │   ├── Landing.jsx
    │   ├── About.jsx
    │   ├── Login.jsx
    │   ├── Signup.jsx
    │   ├── Farmersdashboard.jsx
    │   └── FieldDashboard.jsx
    │
    ├── styles/
    │   ├── Landing.css
    │   ├── About.css
    │   ├── Login.css
    │   ├── Signup.css
    │   ├── Farmersdashboard.css
    │   └── FieldDashboard.css
    │
    ├── assets/
    │   └── images/
    │
    ├── Routes/
    │   └── AppRoutes.jsx
    │
    ├── App.jsx
    └── main.jsx
```

---

## How to Run the Project Locally

### 1. Install Node.js

Make sure Node.js is installed on the computer.

To check if Node.js is installed, open a terminal and run:

```bash
node -v
```

Also check npm:

```bash
npm -v
```

If both commands show version numbers, Node.js and npm are installed.

---

### 2. Clone the GitHub Repository

Open a terminal and run:

```bash
git clone https://github.com/KanoWuTW/Farm-and-Soil-Health-Monitoring-System.git
```

Then enter the project folder:

```bash
cd Farm-and-Soil-Health-Monitoring-System
```

---

### 3. Switch to the Frontend Branch

The current frontend work is on the `frontend` branch.

Run:

```bash
git checkout frontend
```

---

### 4. Enter the Frontend Folder

Run:

```bash
cd frontend
```

---

### 5. Install Project Dependencies

Run:

```bash
npm install
```

This installs all required packages for the React/Vite frontend.

---

### 6. Start the Development Server

Run:

```bash
npm run dev
```

After this, Vite will display a local development URL similar to:

```text
http://localhost:5173/
```

Open this URL in a web browser.

---

## Main Pages and Routes

The application currently uses these frontend routes:

```text
/                  Landing page
/about             About page
/login             Login page
/signup            Sign up page
/farmer-dashboard  Farmer dashboard
/field-dashboard   Field dashboard
```

---

## How to Navigate the Application

1. Open the landing page:
   ```text
   http://localhost:5173/
   ```

2. Click **Learn More** to open the About page.

3. Click **Sign Up** to create a user interface account.

4. Select the **Farmer** role.

5. Click **Create Account**.

6. The system opens the Farmer Dashboard.

7. Register a new field.

8. After registration, the application moves to the Field Dashboard.

9. On the Field Dashboard, the user can:
   - View field overview
   - View current soil health
   - Start soil test
   - Upload soil image
   - Enter manual soil test values
   - View recent soil test history

---

## Notes 

This version is currently frontend-focused. The pages are built with React components and CSS styling. Some data is currently static or simulated because backend and AI integration are not yet connected.

The following parts are prepared for future backend/AI integration:

- User authentication
- Role-based dashboard loading
- Field registration database storage
- Soil image upload
- Manual soil test saving
- AI-powered soil analysis
- AI recommendations
- Household dashboard
- Recommendations dashboard
- Multilingual support for English and Amharic
- Real demo video integration

---

## Current Development Status

Completed so far:

- React/Vite frontend setup
- Routing setup using React Router DOM
- Landing page
- About page
- Login page
- Sign up page
- Farmer dashboard
- Field dashboard
- Soil test user interface
- Image-based design sections
- Responsive CSS layout

Pending work:

- Household dashboard
- Recommendations dashboard
- Backend integration
- Authentication
- Database connection
- AI recommendation integration
- Testing
- Deployment

---

## Common Issues and Fixes

### If the page does not open

Make sure you are inside the `frontend` folder before running:

```bash
npm run dev
```

### If dependencies are missing

Run:

```bash
npm install
```

### If the browser shows a blank page

Check the browser console for errors and confirm that the route exists in:

```text
src/Routes/AppRoutes.jsx
```

### If images do not show

Check that the image file names match the import names exactly. File names are case-sensitive.

Example:

```jsx
import farmer from "../assets/images/farmer.png";
```

The actual file must also be named:

```text
farmer.png
```

---

## GitHub Workflow Used

During development, the following Git commands were used:

```bash
git status
git add .
git commit -m "message"
git push origin frontend
```

This keeps project updates saved on GitHub.

---

## Author
Greatman 
Frontend developed as part of the TerraSoil Farm and Soil Health Monitoring Platform project.
