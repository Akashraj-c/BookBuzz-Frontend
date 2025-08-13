
# BookBuzz – MERN Stack Book Review Platform
    BookBuzz is a full-stack MERN application where users can register, log in, browse books, view details, and leave reviews.

# Features
- User authentication (Register/Login)
- Add and browse books
- Search books by title
- Add and view reviews
- Responsive design with React + Bootstrap
- Axios-based API calls

# Tech Stack
- Frontend: React, React Router DOM, Bootstrap, Axios, React Toastify, React Icons 
- Backend: Node.js, Express.js, MongoDB (Mongoose)  
- Other: JWT for authentication 

# Frontend Setup

1. Navigate to frontend folder:
    - cd frontend
2. Install dependencies:
    - npm install
3. Start development server:
    - npm run dev

# Backend Setup
1. Navigate to backend folder:
    - cd backend
2. Install dependencies:
    - npm install
3. Create a .env file with the following sample config:
    - MongoDB connection string :-
     DATABASE = mongodb+srv://<username>:<password>@cluster0.mmuwggg.mongodb.net/<dbname>?retryWrites=true&w=majority&appName=Cluster0
    - JWT secret key :-
        SECRETKEY = secretKey

4. Start the backend server


# API Routes (Backend)
* User Authentication:-
 - POST /register – Register a new user
 - POST /login – Login user, returns JWT token

* Books
 -  POST /addbook – Authaticated users can add book
 -  GET /allbooks – Get all books, search by title (?search=<searchKey>)
 -  GET /abook/:id – Get book details by ID

* Reviews
 -  POST /addreview/:id – Authaticated users can add review
 -  GET /allreviews/:id – Get all reviews for a book