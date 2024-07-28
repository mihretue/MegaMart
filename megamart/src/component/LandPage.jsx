import React from 'react'
import { Carousel } from 'antd';
import MegaMartBillboard9 from '../image/MegaMartBillboard9.png'
import MegaMartBillboard10 from '../image/MegaMartBillboard10.png'

const contentStyle = {
  height: '50rem',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
};

const ImageData = [
    {key: 1 ,img : MegaMartBillboard10},
    {key:2 ,img : MegaMartBillboard9 }
]

export default function LandPage() {
  return (
    <div style={{ width: '90rem', marginLeft: '-16rem', height: '100vh' }}>
      <Carousel autoplay>
        {ImageData.map((item) => (
          <div key={item.key}>
            <h3 style={contentStyle}>
              <img src={item.img} style={{ width: '100%' }} alt={`Billboard ${item.key}`} />
            </h3>
          </div>
        ))}
      </Carousel>
    </div>
  )
}


