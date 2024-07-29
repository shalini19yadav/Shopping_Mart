import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CartState from './context/CartState';
import CartContext from './context/CartContext';


const Home = () => {

  let ctx = useContext(CartContext);
  // console.log(ctx)
  console.log(ctx.searchItem)


  const [currentPage, setcurrentPage] = useState(1);

  const [value, setvalue] = useState([]);
  console.log(value)

  let getData = async () => {
    let res = await fetch('https://dummyjson.com/products/search?q=phone');
    let data = await res.json();
    // console.log(data)
    // console.log(data.products)
    setvalue(data.products)
  }

  useEffect(() => {
    getData()
  }, [])

  
  //for pagination part code

  let itemPerPage=4;
  let lastIndex=currentPage*itemPerPage;
  let firstIndex=lastIndex-itemPerPage;


  let searchedItems=value.filter((ele)=>ele.category.toLowerCase().includes(ctx.searchItem))
  console.log(searchedItems)

  let slicedArr=searchedItems.slice(firstIndex,lastIndex);
  console.log(slicedArr)

  let noOfbtnRequired=Math.ceil(value.length/itemPerPage)
  // console.log(noOfbtnRequired)

  let btnArr=[]
  for(let i=1;i<=noOfbtnRequired;i++){
    btnArr.push(i)
  }

  //2nd method

  // let btnArr=[...Array(noOfbtnRequired+1).keys()].slice(1)
  // console.log(btnArr)

  const handlePrevious=()=>{
    if(currentPage>1){
      setcurrentPage(currentPage-1)
    }
  }

  const handleNext=()=>{
    if(currentPage<noOfbtnRequired){
      setcurrentPage(currentPage+1)
    }
  }


  return (
    <div>
      <div className='row m-0 p-0 d-flex justify-content-center gap-3 ' >

        {slicedArr.map((ele) => {
          return <div key={ele.id} className="card mt-3 " style={{ width: '19rem' }}>
            <img src={ele.thumbnail} className="card-img-top" alt="..." />
            <div className="card-body">
              {/* <h5 className="card-title text-truncate">{ele.title}</h5> */}
              <h5 style={{ height: "50px" }} className="card-title">{ele.title}</h5>
              <p className="card-text"> Price: {ele.price}</p>
              <Link to="/single" state={ele} className="btn btn-primary">View Product</Link>
              <button onClick={() => ctx.addtoCart(ele)} className="btn btn-warning ms-1">Add to Cart</button>

            </div>
          </div>
        })}
      </div>

      <nav aria-label="Page navigation example">
        <ul className="pagination flex-wrap mt-5">
          <li onClick={handlePrevious} className="page-item"><Link className="page-link" to="#">Previous</Link></li>
          {btnArr.map((ele)=>{
            return <li key={ele} onClick={()=>setcurrentPage(ele)} className={currentPage===ele ?"page-item active":"page-item"}><Link className="page-link" to="#">{ele}</Link></li> 
          })}
          
          <li onClick={handleNext} className="page-item"><Link className="page-link" to="#">Next</Link></li>
        </ul>
      </nav>

    </div>
  )
}

export default Home
