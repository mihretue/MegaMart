import React,{useState} from 'react'
import '../component.css'


export default function Category() {
const ProductCategory = {
    Electronics: ["Smartphone", "Laptop", "Tablet"],
    Fashion: ["Shirt", "Pants", "Dress"],
    "Home & Kitchen": ["Fridge", "Oven", "Dishwasher"],
    Sports: ["Ball", "Gym Apparatus", "Sport Clothing"],
    Toys: ["Toy Car", "Toy Plane", "Toy Robot"],
    Furniture: ["Dining Table", "Bed", "Drawer"],
}


    const [openDropdowns, setOpenDropdowns] = useState(null);
    const toggleDropdown = (category) => {
    setOpenDropdowns((prev) =>(prev === category? null : category))
  };
  return (
    <div className="container mt-3">
      <div className="row">
        {Object.keys(ProductCategory).map((category) => (
          <div className="col-md-4 mb-3 col-lg-2" key={category}>
            <div className="dropdown">
              <div
                className={`btn custom-dropdown-button ${openDropdowns === category ? 'show' : ''}`}
                onClick={() => toggleDropdown(category)}
                role="button"
                aria-expanded={openDropdowns === category}
                style={{ cursor: 'pointer', width: '100%' }}
              >
                {category}
              </div>
              <div className={`dropdown-menu custom-dropdown-menu ${openDropdowns ===category ? 'show' : ''}`}>
                {ProductCategory[category].map((product, index) => (
                  <div key={index} className="dropdown-item" role="button">
                    {product}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
