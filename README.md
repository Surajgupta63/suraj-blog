# Blog Application with Authentication

This is a simple blog application built with **Node.js**, **Express**, **MongoDB**, and **EJS** as the template engine. The application allows users to browse blogs, sign up, and log in. Authentication is handled using cookies, and MongoDB is used as the database to store user and blog information.

---

## Features
- **User Authentication**: 
  - Signup, Login, and Logout functionality.
  - Authentication middleware to check for user sessions using cookies.

- **Blog Functionality**:
  - View all blogs on the homepage.
  - Separate routes for handling user and blog-related actions.

- **EJS Views**: Rendered dynamic pages using EJS templates.

---

## Project Setup

### Prerequisites
Before setting up the project, ensure you have the following installed:
- **Node.js** (v12 or higher)
- **MongoDB** (Local/Cloud)
- **NPM** or **Yarn**

---

### Installation

1. **Clone the Repository**  
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**  
   Run the following command to install all required dependencies:
   ```bash
   npm install
   ```

3. **Environment Variables**  
   Create a `.env` file in the root directory and add the following environment variables:
   ```
   PORT=8000
   MONGO_URL=your_mongodb_connection_string
   ```

4. **Run MongoDB Locally** (if not using a cloud-based MongoDB service):
   - Start MongoDB service:
     ```bash
     mongod
     ```

5. **Run the Application**  
   Start the server with the following command:
   ```bash
   npm start
   ```
   The server will run on [http://localhost:8000](http://localhost:8000).

---

## Project Structure

```
|-- models/
|   |-- blog.js           # Mongoose schema for Blog
|
|-- routes/
|   |-- user.js           # User routes (Signup/Login)
|   |-- blog.js           # Blog routes
|
|-- middlewares/
|   |-- auth.js           # Middleware to check authentication
|
|-- views/                # EJS Templates for rendering UI
|
|-- public/               # Static files (CSS, images, etc.)
|
|-- .env                  # Environment variables
|-- server.js             # Main server file
|-- package.json
```

---

## Available Routes

### Root Route
- **GET /**:  
  - Renders the homepage and displays all blogs.

### User Routes (`/user`)
- **Signup/Login/Logout routes** for user management.

### Blog Routes (`/blog`)
- Blog-related actions (view specific blogs, create/update/delete functionality in extended versions).

---

## Middleware Overview
- **cookieParser**: Parses cookies for user authentication.
- **checkForAuthenticationCookie**: Middleware that checks the user's session token to keep them logged in.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Contributions
Contributions are welcome! Feel free to fork the repository and submit pull requests.

---

## Acknowledgments
- **Node.js** and **Express** for server-side logic.
- **MongoDB** and **Mongoose** for database handling.
- **EJS** for dynamic page rendering.
