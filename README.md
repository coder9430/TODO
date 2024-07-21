
# TO-DO LIST APPICATION




## Overview

This project is a To-Do List application built with React for the frontend and Node.js with Express for the backend. Users can manage their to-dos with functionalities for adding, updating, and deleting tasks. The application includes authentication and uses JSON files for data storage.




## Features

- User authentication (sign up and sign in)
- Create, update, and delete to-dos
- View to-dos by date
- Responsive design for different screen sizes


## Technologies Used

**Client:** React, React Router,bootstrap Lottie for animations

**Server:** Node, Express

**Database:** JSON files (for simplicity in this project)

**Authentication:** JWT (JSON Web Tokens)



## Usage

1.Sign Up / Sign In:

- Access the authentication page to sign up or sign in.
- Use valid credentials to log in and receive a JWT token.

2.Manage To-Dos:
 
- After logging in, you can add new to-dos, view them by date, update, and delete them.
- Use the forms and buttons provided in the application to interact with to-dos.

3.Routing:

-  '/' -home page 
- '/profile'-ProfilePage
-  '/add-todo'-AddTodoPage
- '/list-of-todo'-ListoftodoPage
- '/login'-LoginPage
- '/signup'-SiginPage
- '/calendar'-CalendarPage




## Installation
Prerequisites

-Node.js (v14 or higher)

-npm (v6 or higher) or yarn

Backend Setup

1.Clone the repository:

```bash
  git clone https://github.com/coder9430/TODO.git
  cd TODO

```
2.Install dependencies:
```bash
  cd backend
  npm install

```
3.Create a .env file in the backend directory with the following content:
```bash
  PORT=3000
  JWT_SECRET=mysecretkey

```
4.Run the server:
```bash
  npm start

```
Frontend Setup

1.Navigate to the frontend directory:
```bash
  cd frontend

```
2.Install dependencies:
```bash
npm install @fortawesome/fontawesome-free@^6.6.0
npm install bootstrap@^5.3.3
npm install react@^18.3.1
npm install react-calendar@^5.0.0
npm install react-dom@^18.3.1
npm install react-lottie@^1.2.4
npm install react-router-dom@^6.25.1
npm install router@^1.3.8

```
3.Run the development server:
```bash
npm run dev

```


    
## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

