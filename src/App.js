import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Home from './pages/Home';
import Cart from './pages/Cart';
import Single from './pages/Single';
import PageNotFound from './pages/PageNotFound';
import Navbar from './component/Navbar';
import { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import UserContext from './pages/context/UserContext';


function App() {
 
  let ctx=useContext(UserContext)
  console.log(ctx)
  console.log(ctx.user)
  let login=ctx.user.login
  
  return (
    <div className="App">
     
      <BrowserRouter>
      <div style={{marginBottom:"56px"}}><Navbar /></div>
      
      <Routes>
        {login===true &&  <Route path='/' element={<Home />} />}
        {login===false &&  <Route path='/' element={<Navigate to={'/login'}/>} />}
       { login===true && <Route path='/cart' element={<Cart/>} />}
       { login===false && <Route path='/cart' element={<Navigate to={'/login'}/>} />}
        <Route path='/single' element={<Single/>} />
        <Route path='/register' element={<SignUp/>} />
       {login===false && <Route path='/login' element={<Login/>} />}
       {login===true && <Route path='/login' element={<Navigate to={'/'}/>} />}
        <Route path='/*' element={<PageNotFound/>} />
      </Routes>

      <ToastContainer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
