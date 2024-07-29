import React, { useState } from 'react'
import CartContext from './CartContext'

const CartState = (props) => {
    const [cartItem, setcartItem] = useState([]);
    const [searchItem, setsearchItem] = useState("");

    const addtoCart=(ans)=>{
        let updatedObj={
            ...ans, 
            quantity:1
        }

        let ExistingItem=cartItem.find((ele)=>ele.id===updatedObj.id)

        if(!ExistingItem){
           setcartItem([...cartItem,updatedObj])
        }
        
    }

    const removefromCart=(ans,index)=>{
      let copyarr=[...cartItem]
      copyarr.splice(index,1)
      setcartItem(copyarr)
    }
    

    const updateIncrement=(ans,index)=>{
      let updatedobj={
        ...ans,
        quantity:ans.quantity+1,
        price:ans.price+(ans.price/ans.quantity)
      }
      let updatedArr=[...cartItem]
      updatedArr[index]=updatedobj
      setcartItem(updatedArr)
    }


    const updateDecrement=(ans,index)=>{
      let updateobj={
        ...ans,
        quantity: ans.quantity>1 ? ans.quantity-1:ans.quantity,
        price: ans.quantity>1 ? ans.price-(ans.price/ans.quantity):ans.price
      }
      let updateArr=[...cartItem]
      updateArr[index]=updateobj
      setcartItem(updateArr)    }

  return (
    <CartContext.Provider value={{searchItem,setsearchItem,addtoCart,removefromCart,updateIncrement,updateDecrement,cartItem}}>
            {props.children}
    </CartContext.Provider>
      
  )
}

export default CartState
