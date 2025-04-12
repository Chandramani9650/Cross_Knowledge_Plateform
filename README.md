

# 🌟 Cross Knowledge Platform

An advanced, user-friendly **Single Page Application (SPA)** crafted for Mentors to share tutorials and for Learners to explore knowledge easily — all beautifully styled with **Tailwind CSS** and powered by a robust **MERN stack** backend.

---

## 👩‍💻 Built With Love By

- 💻 **Frontend Developer**: [Shivani Pandey](https://github.com/shivanipandey5678)
- 🔧 **Backend Developer**: [Chandramani](https://github.com/Chandramani9650)

---

## 🚀 Tech Stack

| Layer     | Technologies                                                                 |
|-----------|-------------------------------------------------------------------------------|
| Frontend  | React.js, Tailwind CSS, React Router DOM                                     |
| Backend   | Node.js, Express.js, MongoDB Atlas, Multer for file uploads                 |
| Auth      | JWT, Bcrypt for password hashing                                             |
| Hosting   | Frontend & Backend deployed on **Render**                                    |

---

## ✨ Features Overview

- 🔐 **SignUp & Login Functionality**
  - Separate logic and UI for **Mentors** and **Learners**
  - User role-based rendering and route protection

- 📚 **Dynamic Tutorial System**
  - Categories displayed on Homepage
  - **Learning Section Page**: Displays lessons based on selected category
  - Each lesson opens a **dedicated single page** with full details

- 🧑‍🏫 **Mentor Capabilities**
  - Upload new lessons with text, image, video support using **Multer**
  - Form validations and backend error handling implemented

- 📱 **Pages Included**
  - Beautiful `AboutPage`, `ContactPage`, `SignUpLoginPage`
  - Fully responsive & intuitive UI

---


---

## 🔐 Authentication Logic

- Role-based rendering handled at the login response
- Navbar dynamically updates based on user type: **Mentor** or **Learner**
- Protected Routes using conditional checks and React Router

---

## 🔧 Backend Highlights

- MongoDB with **Mongoose** models for Users, Lessons, Categories
- File upload support using **Multer**
- Fully tested endpoints with status/error handling
- Routes:
  - `POST /api/auth/signup`
  - `POST /api/auth/login`
  - `POST /api/lessons` (Mentor only)
  - `GET /api/lessons`
  - `GET /api/lessons/:id`

---

## 🖼️ Frontend Pages

| Route                 | Description                          |
|----------------------|--------------------------------------|
| `/`                  | Landing Page                         |
| `/signup-login`      | Dynamic Sign Up / Login Page         |
| `/about`             | About Page with beautiful styling    |
| `/contact`           | Contact Page                         |
| `/categories`        | List of all categories               |
| `/categories/:id`    | Learning section with lesson list    |
| `/lessons/:id`       | Dedicated single lesson page         |

---

## 💡 How To Run Locally

### Backend Setup
```bash
cd Cross_Knowledge_Backend
npm install
touch .env  # Add Mongo URI and JWT_SECRET
npm start


cd Cross_Knowledge_Frontend
npm install
npm run dev


🌐 Live Deployment
Frontend: Live on Render

Backend: Live on Render

🤝 Connect With Us
Shivani Pandey – GitHub

Chandramani – GitHub

“Knowledge shared is wisdom gained.”
This platform empowers mentors to share their knowledge and learners to grow with ease.

