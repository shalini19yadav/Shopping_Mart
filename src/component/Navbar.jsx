import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CartContext from '../pages/context/CartContext'
import UserContext from '../pages/context/UserContext'

const Navbar = () => {

  let navigate=useNavigate()
  let ctx = useContext(CartContext)
  // console.log(ctx)
  let ctx1=useContext(UserContext)
  console.log(ctx1)
  console.log(ctx1.user)
  let login=ctx1.user.login


  const handleSearch=(e)=>{
    let value=e.target.value 
    // console.log(value)
    ctx.setsearchItem(value.toLowerCase())
  }

  const handleLogout=()=>{
    localStorage.removeItem('userDetails')
    ctx1.setuser({login:false,email:""})
    navigate('/login')
  }

  return (
    <div >
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand  text-white" to="/">shopping Mart</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {login===true && <form className="d-flex m-auto" role="search">
              <input onChange={handleSearch} className="form-control me-2" type="search" placeholder="Search products here..." aria-label="Search" />
            </form>}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              {login===true && <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page"  to="/">Home</Link>
              </li>}
              {login===true && <li className="nav-item">
                <Link className="nav-link text-white" to="/cart">cart <sup> {ctx.cartItem.length}</sup></Link>
              </li>}
              
              {login===true && <li className="nav-item">
                <button onClick={handleLogout} className="nav-link btn btn-dark active p-1 text-white" >Log out </button>
              </li>}

            </ul>
            

          </div>
        </div>
      </nav>



    </div>
  )
}

export default Navbar
