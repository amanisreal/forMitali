import React from 'react'
import "./banner.css"

function Banner() {
  return (
    <div className="bannerContainer" >
        <img className="bannerimg" src="https://cdn.shopify.com/s/files/1/0641/8189/5418/files/logo_1920x1080_crop_center.jpg?v=1654068916"/>
       
    <div className="textx">
        <h2>All you need to build your online store.</h2>
        <p><span>Getting started? Do not worry</span>
        <span>we help you grow your</span>
        <span>business</span></p>
    </div>
    <div className=''>
        <button>Create Store</button>
    </div>
    </div>

    
  )
}

export default Banner