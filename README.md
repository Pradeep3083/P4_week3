# Project P4 Week 3

## Overview

This project is a custom E-commerce platform built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It provides a full-stack solution with separate backend and frontend components. The following steps will guide you through setting up and running the application on your system.

---

## Prerequisites

Before running this project, ensure the following software is installed on your system:

1. [Node.js](https://nodejs.org/) (version 16.x or later recommended)
2. [Visual Studio Code](https://code.visualstudio.com/)
3. npm (comes with Node.js)
4. [MongoDB](https://www.mongodb.com/) (Ensure MongoDB is running locally or accessible remotely)

---

## Project Setup

### 1. Download and Unzip

1. Download the project folder as a `.zip` file from the provided source.
2. Extract the folder to a location on your system.

### 2. Open in VS Code

1. Launch Visual Studio Code.
2. Open the extracted project folder in VS Code by selecting:
   ```plaintext
   File -> Open Folder -> Select the project folder
   ```

---

## Running the Application

The project requires two terminals within VS Code, one for the backend and one for the frontend.

### 1. Running the Backend

1. Open a new terminal in VS Code:
   ```plaintext
   Terminal -> New Terminal
   ```
2. Navigate to the backend directory:
   ```bash
   cd backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure environment variables:
   - Create a `.env` file in the `backend` directory with the following fields:
     ```plaintext
     MONGO_URI=<Your MongoDB Connection String>
     JWT_SECRET=<Your Secret Key>
     PORT=<Backend Port (default: 5000)>
     ```
5. Start the backend server:
   ```bash
   npm start
   ```
6. The backend server should now be running on the specified port (e.g., `http://localhost:5000`).

### 2. Running the Frontend

1. Open a second terminal in VS Code:
   ```plaintext
   Terminal -> New Terminal
   ```
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the frontend application:
   ```bash
   npm start
   ```
5. The frontend should now be running and accessible on a specified port (e.g., `http://localhost:3000`).

---

## Folder Structure

The project folder is organized as follows:

```plaintext
P4_week3/
├── backend/        # Backend code
├── frontend/       # Frontend code
└── README.md       # Project documentation
```

---

## Troubleshooting

- **Port Conflicts**: If the backend or frontend ports are already in use, modify the port configuration in the respective `package.json` or configuration files.
- **MongoDB Connection Errors**: Ensure your `MONGO_URI` in the `.env` file is correct and MongoDB is running.
- **Dependency Errors**: Ensure all dependencies are installed by running `npm install` in both `backend` and `frontend` directories.
- **Environment Variables**: Ensure a `.env` file with proper configurations is present in the `backend` directory.

---

## Additional Notes

- Both the backend and frontend servers must be running simultaneously for the application to work correctly.
- Use modern browsers like Chrome or Firefox for the best user experience.
- Make sure to stop the servers using `Ctrl + C` in the terminal when you are done.

---

## Features

- User Authentication (Login, Registration, and JWT-based sessions)
- Product Management (Listing, Adding, and Editing Products)
- Shopping Cart Functionality
- Order Management System


