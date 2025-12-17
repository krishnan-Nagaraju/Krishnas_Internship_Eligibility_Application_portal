# 🚀 Internship Eligibility Application Portal

A full-stack *MERN (MongoDB, Express, React, Node.js)* application that allows users to register, log in, view eligible internships based on predefined criteria, apply for internships, and track application status. The application is production-ready and deployed using modern cloud platforms.

---

## 🌐 Live Demo

- *Frontend (Vercel):*  
  https://your-frontend-url.vercel.app

- *Backend (Render):*  
  https://your-backend-url.onrender.com

---

## 🛠 Tech Stack

### Frontend
- React (Create React App)
- Axios
- React Router DOM
- CSS

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcrypt.js
- CORS

### Deployment
- Frontend: *Vercel*
- Backend: *Render*
- Database: *MongoDB Atlas*

---

## ✨ Features

- User Registration & Login
- JWT-based Authentication
- Protected Routes
- Internship Eligibility Filtering
- Apply for Internships
- Application Status Tracking
- RESTful APIs
- Responsive UI
- Production Deployment

---

## Project Structure
Internship_Eligibility_Application_Portal/
│
├── client/                  # React frontend
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.js
│   │   │   ├── Internships.js
│   │   │   └── Applications.js
│   │   ├── components/
│   │   │   └── Navbar.js
│   │   ├── App.js
│   │   └── index.css
│
├── server/                  # Node backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── server.js
│   └── .env
|_______README.md


---

## 🔑 Environment Variables

Create a `.env` file inside the **server** directory:

```env
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret
PORT=5001
