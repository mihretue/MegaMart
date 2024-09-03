import React,{useState} from 'react'
import AdminPanel from '../Admin/admin'

export default function Admin() {
  const [products, setProducts] = useState([])

  const handleProductCreated = (newProduct)=>{
    setProducts([...products,newProduct])
    console.log("Product created Successfully", newProduct)
  }


  return (
    <div>
      <AdminPanel onProductCreated={handleProductCreated}/>
      <h1>Admin</h1>
      <ul>
        {products.map((product) => (
          <>
            <li key={product.id}>{product.name}</li>
            <li>{product.description}</li>
            <li>{product.price}</li>
            <li>{product.stock}</li>
            <li>{product.image} </li>
          </>
          ))}
      </ul>
    </div>
  )
}
