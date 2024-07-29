import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {

    let navigate=useNavigate()

    let arr=JSON.parse(localStorage.getItem('register')) || []

    const [userDetails, setuserDetails] = useState({
        name:"",
        email:"",
        password:""
    });

    const handleChanges=(e)=>{
        let value=e.target.value
        // console.log(value)
        setuserDetails({...userDetails,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(userDetails)
        let existUser=arr.find((ele)=>ele.email===userDetails.email)
        if(!existUser){
            arr.push(userDetails)
            localStorage.setItem('register',JSON.stringify(arr))
            navigate('/login')
        }
       
    }


    return (
        <div className='mainPage'>
            <form className= 'form1 col-md-6 p-4 rounded m-auto  '>
                <h3 className='text-center'>Sign Up Form</h3>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"> Name</label>
                    <input onChange={handleChanges} name='name' type="text" className="form-control" id="name" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"> Email Address</label>
                    <input onChange={handleChanges} name='email' type="email" className="form-control" id="name" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onChange={handleChanges} name='password' type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                
                <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                <p>Already have an account? <Link to={'/login'}>Login </Link></p>
            </form>

        </div>
    )
}

export default SignUp
