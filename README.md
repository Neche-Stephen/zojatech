

# Buddy

**Buddy** is a modern web application built with Vite and React that provides user authentication (signup and login), a personalized dashboard, and a chat feature for user interaction.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Pages](#pages)
  - [Signup](#signup-page)
  - [Login](#login-page)
  - [Dashboard](#dashboard-page)
  - [Chat](#chat-page)

## Features

- **User Authentication**: Secure signup and login functionality with validation.
- **Dashboard**: User dashboard displaying demo information and statistics.
- **Chat**: Chat feature for user interaction.
- **Responsive Design**: Mobile-friendly and adaptable to various screen sizes.
- **Performance Optimized**: Fast load times using Vite's optimized development and build process.

## Technologies Used

- **Vite**: Next-generation frontend tooling for faster builds.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **React Router**: For navigation and routing within the app.
- **Axios**: For handling HTTP requests to the backend API.
- **React Icons**: For integrating icons throughout the app.
- **Sass**: For styling and modularizing CSS.

## Installation

Follow the steps below to set up the Buddy application on your local machine:

1. Clone the repository:

   ```bash
   git clone https://github.com/Neche-Stephen/zojatech.git
   ```

2. Navigate to the project directory:

   ```bash
   cd zojatech
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Running the Application

To start the development server, run:

```bash
npm run dev
```

This will start the application on [http://localhost:5173](http://localhost:5173).

To build the application for production, run:

```bash
npm run build
```


## Pages

### Signup Page

- **Route**: `/signup`
- Allows users to create an account.
- Includes form validation and error handling.

### Login Page

- **Route**: `/login`
- Users can log in with their email and password.
- Handles authentication with token storage for session management.

### Dashboard Page

- **Route**: `/dashboard`
- Displays demo statistics, notifications, and links to other parts of the app.
- Fully responsive.

### Chat Page

- **Route**: `/chat`
- Users can send and receive messages.
- Clean and user-friendly chat interface.

### Author

**Chinecherem (Stephen) Ubawike**