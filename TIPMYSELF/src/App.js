import './App.css';
import { Routes, Route} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import Transfer from './components/Dashboard/Transfer';
import LoginAuth from './components/Login/LoginAuth';
import Tip from './components/Dashboard/Tip';
import TransactionHistory from './components/Dashboard/TransactionHistory';
import CreateAccount from './components/REGISTER/CreateAccount';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <>
    <Routes>
        <Route exact path = '/' element = {<LoginAuth/>}></Route>
        {/* <ProtectedRoute exact path="/dashboard">
          <Dashboard/>
        </ProtectedRoute> */}
        <Route exact path = '/dashboard' element = {<Dashboard/>}></Route>
        <Route exact path = '/transfer' element = {<Transfer/>}></Route>
        <Route exact path = '/tip-myself' element = {<Tip/>}></Route>
        <Route exact path = '/transaction-history' element = {<TransactionHistory/>}></Route>
        <Route exact path = '/create-account' element = {<CreateAccount/>}></Route>
      </Routes>
    </>
  );
}

export default App;
