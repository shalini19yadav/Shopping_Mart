import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from './context/UserContext'
import { toast } from 'react-toastify';


const Login = () => {

  let navigate=useNavigate()
  let ctx=useContext(UserContext)

  let arr=JSON.parse(localStorage.getItem('register')) ||[]

  const [details, setdetails] = useState({
    email:"",
    password:""
  });

  const handleChanges=(e)=>{
    // console.log(e.target.value)
    setdetails({...details,[e.target.name]:e.target.value})
  }
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    let existuser=arr.find((ele)=>ele.email===details.email)
    if(existuser){
      if(existuser.password===details.password){
        console.log("login successful")
       toast.success("login successful" ,{position:"top-center"})
        localStorage.setItem('userDetails',JSON.stringify({login:true,email:existuser.email}))
        ctx.setuser({login:true,email:existuser.email})
        navigate('/')
      }
      else{
        console.log("wrong password")
        toast.error("Wrong Password",{position:"top-center"})
      }
    }
    else{
      console.log("user not found please, Sign up..")
      toast.error("user not found please, Sign up..",{position:"top-center"})
    }
    
    
  }


  return (
    <div className='mainPage'>
      <form className=' form1 col-md-6 p-4 rounded m-auto  '>
                <h3 className='text-center'>Login Form</h3>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"> Email Address</label>
                    <input onChange={handleChanges} name='email' type="email" className="form-control" id="name" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onChange={handleChanges} name='password' type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                
                <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                <p>Don't have an account? <Link to={'/register'}>Sign Up</Link></p>
            </form>
    </div>
  )
}

export default Login
