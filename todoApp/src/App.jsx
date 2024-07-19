

import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

import HomePage from './Pages/HomePage/HomePage'
import Listoftodopage from './Pages/Listoftodo/ListoftodoPage';
import CalendarPage from './Pages/CalendarPage/CalenderPage';
import AddtodoPage from './Pages/AddtodoPage/AddtodoPage';

function App() {
 

  return (
    <>
     <HomePage></HomePage>
     <Listoftodopage></Listoftodopage>
     <CalendarPage></CalendarPage>
     <AddtodoPage></AddtodoPage>
    </>
  )
}

export default App
