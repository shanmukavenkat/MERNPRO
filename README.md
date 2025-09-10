# MERN Stack Student Management System

## Project Overview
This is a **MERN Stack mini-project** demonstrating **Authentication, Role-based Access, and Dashboard CRUD functionality**.  
It is designed for students and admins:
- **Admins** can view, add, edit, and delete student records.
- **Students** can view and update their own profiles.

The frontend is built with **React + Vite**, and the backend uses **Node.js + Express + MongoDB**.

---

## Features
- **Authentication**
  - Sign Up and Login using email & password  
  - Passwords hashed using `bcrypt`  
  - JWT-based authentication  
- **User Roles**
  - Admin: Can manage all students  
  - Student: Can view and update own profile  
- **Dashboards**
  - Admin Dashboard: View, add, edit, delete students    
  - Student Dashboard: View and update personal profile  
- **Frontend Features**
  - Responsive UI  
  - React Router DOM for page navigation  
  - Axios for API calls  
  - Protected routes based on user role  
  - Navbar shows Login/Signup when logged out, Profile & Logout when logged in  
- **Backend Features**
  - Node.js + Express server  
  - MongoDB (Atlas or local) for data storage  
  - Role-based API routes  
  - Authentication middleware to protect routes  
- **Optional Features Implemented**
  - Profile page showing logged-in user details  
  - Logout functionality

---

## Tech Stack
| Layer | Technology |
|-------|------------|
| Frontend | React.js, Vite, Axios, React Router DOM |
| Backend | Node.js, Express.js, MongoDB, Mongoose |
| Authentication | JWT, bcrypt |
| State Management | React Context API |

---

## Folder Structure

```
MERNPRO/
├─ backend/
│  ├─ controllers/
│  ├─ models/
│  ├─ routes/
│  ├─ middleware/
│  └─ server.js
└─ frontend/
   ├─ src/
   │  ├─ api/
   │  ├─ components/
   │  ├─ context/
   │  ├─ pages/
   │  ├─ App.jsx
   │  └─ main.jsx
```

---

## Installation & Setup

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd MERNPRO
```

### 2. Setup Backend
```bash
cd backend
npm install
```
- Create a `.env` file with:
```
MONGO_URI=<Your MongoDB URI>
JWT_SECRET=<A long secret string>
JWT_EXPIRES_IN=7d
```
- Start the backend server:
```bash
npm run dev  # uses nodemon
# or
node server.js
```
Server runs on `http://localhost:5000`

### 3. Setup Frontend
```bash
cd ../frontend
npm install
npm run dev
```
Frontend runs on `http://localhost:5173`

---

## Usage
1. Open the frontend in the browser.  
2. Sign up as a student or login as an admin.  
3. Navigate to dashboard:
   - Admin: manage all students  
   - Student: view & update profile  
4. Use the Navbar to view profile or logout.



## Author
**S N V S Komal** – Full Stack Developer  
- Email: <shanmukavenkatkomal@gamil.com>  
- GitHub: <https://github.com/shanmukavenkat/>

