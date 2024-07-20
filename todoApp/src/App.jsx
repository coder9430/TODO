import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import ProfilePage from './Pages/ProfilePage/ProfilePage'; 
import AddTodoPage from './Pages/AddtodoPage/AddtodoPage';
import ListoftodoPage from './Pages/Listoftodo/ListoftodoPage'; // Assuming you have this component
import LoginPage from './Pages/Login/LoginPage'; // Assuming you have this component
import SignupPage from './Pages/SigninPage/SigninPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/add-todo" element={<AddTodoPage />} />
        <Route path="/list-of-todo" element={<ListoftodoPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
