import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import CartContext from './context/CartContext'

const Cart = () => {

  let ctx= useContext(CartContext)
  console.log(ctx.cartItem)

  let sum=0;
  
  for(let value of ctx.cartItem){
    sum=sum+value.price
  }

  


  let arr=[]

  return (
    <div>
      <table className="table text-center align-middle">
        <thead>
          <tr>
            <th scope="col">Sno</th>
            <th scope="col">Product</th>
            <th scope="col">Title</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            ctx.cartItem.map((ele, index) => {
              return <tr key={ele.id}>
                <th scope="row">{index + 1}</th>
                <td> <img className='image' src={ele.thumbnail} alt="" /></td>
                <td>{ele.title}</td>
                <td> <button onClick={()=>ctx.updateIncrement(ele,index)} className='btn btn-info'>+</button> {ele.quantity} <button onClick={()=>ctx.updateDecrement(ele,index)} className='btn btn-info'>-</button></td>
                <td>{Math.ceil(ele.price)}</td>
                <td><button onClick={()=>ctx.removefromCart(ele,index)} className='btn btn-danger'>Delete</button></td>
              </tr>
            })
          }
        </tbody>
      </table>

      <h3 className='text-center mt-3'>Total: ${Math.ceil (sum)}</h3>
    </div>
  )
}

export default Cart
