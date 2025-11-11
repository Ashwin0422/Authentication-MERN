## Node.js Authentication API + React Frontend

A simple and secure authentication system with Node.js, Express, MongoDB, and a React + Tailwind frontend. Now includes Google Sign-In for easy authentication.

## 🚀 Features

## Backend

- User Registration – Secure registration with hashed passwords
- User Login – JWT-based authentication
- Google Sign-In – Login or register users via Google OAuth
- Password Security – Bcrypt password hashing
- Input Validation – Express-validator for request validation
- MongoDB Integration – Mongoose ODM for database operations
- Environment Configuration – Dotenv for environment variables

## Frontend

- React + Tailwind CSS – Simple responsive UI
- Login & Registration Forms – Connects with backend API
- Google Sign-In Button – OAuth authentication
- Real-time feedback – Validation and error handling


## 📡 API Endpoints

### Authentication Routes

Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Login user
POST	/api/auth/google	Login/Register via Google OAuth

### Other Routes

Method	Endpoint	Description
GET	/	API status and available endpoints
GET	/api/users	Get all users (testing only) 
GET / api/googleusers Get all Google users (testing only)

```
## 🔒 Security Features

- Password Hashing: Uses bcryptjs for secure password storage
- JWT Tokens: JSON Web Tokens for stateless authentication
- Input Validation: Express-validator for request sanitization
- Environment Variables: Secure configuration management
- OAuth Security: Google Sign-In integration with token verification


## 🛡️ Environment Variables

Variable	Description	Default
PORT	Server port number	3000
MONGODB_URI	MongoDB connection string	Required
JWT_SECRET	Secret key for JWT signing	Required
GOOGLE_CLIENT_ID	Google OAuth client ID	Required
GOOGLE_CLIENT_SECRET	Google OAuth client secret	Required
FRONTEND_URL	React frontend URL (for OAuth redirects)	Optional


## 🛠️ Tech Stack

- Backend: Node.js, Express, MongoDB, Mongoose, Bcrypt, JWT, Express-validator
- Frontend: React, Tailwind CSS, Vite
- Authentication: JWT + Google OAuth

