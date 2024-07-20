import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import ProfilePage from './Pages/ProfilePage/ProfilePage'; 
import AddTodoPage from './Pages/AddtodoPage/AddtodoPage';
import ListoftodoPage from './Pages/Listoftodo/ListoftodoPage'; // Assuming you have this component
import LoginPage from './Pages/Login/LoginPage'; // Assuming you have this component

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/add-todo" component={AddTodoPage} />
        <Route path="/list-of-todo" component={ListoftodoPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;
