import './App.css';
import { Routes, Route} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import Transfer from './components/Dashboard/Transfer';
import LoginAuth from './components/Login/LoginAuth';
import Tip from './components/Dashboard/Tip';

function App() {
  return (
    <>
    <Routes>
        <Route exact path = '/' element = {<LoginAuth/>}></Route>
        <Route exact path = '/dashboard' element = {<Dashboard/>}></Route>
        <Route exact path = '/transfer' element = {<Transfer/>}></Route>
        <Route exact path = '/tip-myself' element = {<Tip/>}></Route>
      </Routes>
    </>
  );
}

export default App;
