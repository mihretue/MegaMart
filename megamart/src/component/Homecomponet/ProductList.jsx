import React, { useEffect } from 'react'
import { getProducts } from '../../api'
import '../../index.css'
import Cart from '../../image/cart-svgrepo-com.svg'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Loading = styled.p`
/* HTML: <div class="loader"></div> */
.loader {
  width: 120px;
  height: 24px;
  -webkit-mask:
    radial-gradient(circle closest-side,#000 94%,#0000) 0 0/25% 100%,
    linear-gradient(#000 0 0) center/calc(100% - 12px) calc(100% - 12px) no-repeat;
  background:
   linear-gradient(#25b09b 0 0) 0/0% no-repeat
   #ddd;
  animation: l7 2s infinite linear;
}
@keyframes l7 {
    100% {background-size:100%}
}`

export default function ProductList() {
  const [products, setProducts] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

 

  const getCreatedProdcuts = async()=>{
    try{
    const response = await getProducts();
    console.log('response:', response)
    // console.log("response data: ", data)
    setProducts(response)
    
    setLoading(false)
    }
    catch(error){
      setError('error in fetching')
      console.log('error in fetching the products')
      setLoading(false)
      }
  }

  useEffect(() => {
    getCreatedProdcuts()
    }, []);

  if(loading) return <div className='loader'></div>
  // if(error) return<p>{error}</p>

  return (
    <div>
      {
        products.map((product) => (
          <div class="card" style={{width: '25rem'}} key={product.id}>
              <img src={product.image} className="card-img-top " style={{height: '22rem'}}  alt="..."/>
              <div class="card-body">
                <h5 class="card-title">{product.name}</h5>
                <p class="card-text">{product.description} </p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">{product.price} </li>
              </ul>
              <div class="card-body">
                <button type="button" className="w-50" ><Link to="/cartitem" className="card-link">
                  <img src={Cart} className='w-25'/> 
                </Link></button>
                
                {/* <a href="#" className="card-link">Another link</a> */}
              </div>
          </div>
        ))
      }
    </div>
  )
}
