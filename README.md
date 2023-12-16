# React MySQL CRUD Application

This project is a full-stack application that allows you to perform CRUD (Create, Read, Update, Delete) operations on a MySQL database using React for the front end and Node.js for the backend. The goal of this project is to provide a comprehensive understanding of integrating MySQL with a React application.

## Project Overview

This project covers the following key aspects:

- Setting up a MySQL database with a "books" table to store book information.
- Creating a backend server using Node.js and Express to handle API requests.
- Developing a React front end to interact with the backend and perform CRUD operations.
- Using Axios for making API requests, React Router for navigation, and CSS for styling.

## Installation and Setup

Follow these steps to set up the project locally:

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd books-app
   ```

2. **Install Dependencies:**
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. **Database Configuration:**
   - Create a MySQL database with the name "test."
   - Execute the SQL script provided in the `database.sql` file to set up the "books" table.

4. **Run the Application:**
   ```bash
   # Run the backend server (from the backend directory)
   npm start

   # Run the React application (from the frontend directory)
   npm start
   ```

5. **Access the Application:**
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to interact with the React application.

## Project Structure

The project is structured as follows:

- **backend:** Contains the Node.js backend code.
  - `index.js`: Main server file containg routes.
  - Other backend-related files.

- **client:** Contains the React frontend code.
  - React components, pages, and styles.
  - Routing setup using React Router.
  - Axios for making API requests.
