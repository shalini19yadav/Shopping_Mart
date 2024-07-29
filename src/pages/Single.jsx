import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import CartContext from './context/CartContext'

const Single = () => {

  let location =useLocation()
  console.log(location.state)

  let ctx=useContext(CartContext)
  console.log(ctx.addtoCart)

  const handleAdd=()=>{
    ctx.addtoCart(location.state)
  }

  
  return (
    <div className='row m-0 p-0 d-flex justify-content-center'>
    <div className="col-md-6 d-flex justify-content-center mt-5">
      <img src={location.state.thumbnail} alt="" />
    </div>
    <div className="col-md-6 mt-5">
      
      <h3>Title: {location.state.title}</h3>
      <h4>Brand: {location.state.brand}</h4>
      <p>Price: {location.state.price}</p>
      <p>Rating: {location.state.rating}</p>
      <h6>Warranty: {location.state.warrantyInformation}</h6>
      <p>{location.state.description}</p>
      <button onClick={handleAdd} className='btn btn-warning'>Add to Cart</button>

    </div>
    </div>
  )
}

export default Single
