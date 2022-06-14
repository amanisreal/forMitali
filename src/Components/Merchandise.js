import React from 'react'
import "./merchandise.css"

function Merchandise() {
  return (
    <div className='merchandiseContainer'>
        <div className='headingms'>
            Get Merchandise as a Service
        </div>

        <div className="aBigBox">
            <div className='firstOne'>
                <div className='number'>1</div>
                <div className='textFormat'>
                <h3>Personalize merch design</h3>
                <p>We make you want and how you want. We make customoze t-shirts, hoodiers, mugs for you own personal store.</p>
                </div></div>

            <div className='SecondOne'>
            <div className='number'>2</div>
            <div className='textFormat'><h3>Build your store and get orders</h3>
                <p>We make you want and how you want. We make customoze t-shirts, hoodiers, mugs for you own personal store.</p>
                </div>  </div>

            <div className='ThirdOne'>
            <div className='number'>3</div>
            <div className='textFormat'>  <h3>easy and Hassel free</h3>
                <p>We make you want and how you want. We make customoze t-shirts, hoodiers, mugs for you own personal store.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Merchandise