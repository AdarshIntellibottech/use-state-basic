import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Screens/Home';
import Error from './Components/Error';
import TimeScreen from './Screens/TimeScreen';
import TimeScreenState from './Screens/TimeScreenState';
import DigitalClock from './Screens/DigitalClock';
import EventScreen from './Screens/EventsScreen';
import Form from './Screens/Form';
import Login from './Screens/Login';
import GetCatFact from './Screens/GetCatFact';
import InputClearScreen from './Screens/InputClearScreen';
import BigForm from './Screens/BigForm';
import SpreadOperator from './Screens/SpreadOperator';
import TaskTracker from './Screens/TaskTracker';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path = '/' element = { <Home/>} />
      <Route path = '/time' element = {<TimeScreen/>}/>
      <Route path = '/TimeState' element = {<TimeScreenState/>} />
      <Route path = '/DigitalClock' element = {<DigitalClock / >} />
      <Route path = '/Events' element = {<EventScreen />} />
      <Route path = '/form' element = {<Form /> } />
      <Route path='*' element = { <Error/> } />
      <Route path = '/login' element = {<Login/>} />
      <Route path = '/cat' element = {<GetCatFact/>} />
      <Route path = '/input' element = {<InputClearScreen/>} />
      <Route path = '/webform' element = {<BigForm/>} />
      <Route path = '/spread' element = {<SpreadOperator/>} />
      <Route path = '/task' element = {<TaskTracker/>} />
      
    </Routes>
   </BrowserRouter>
  );
}

export default App;
