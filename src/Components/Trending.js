import React from 'react'
import Cards from "./Cards"
import {FcLike} from "react-icons/fc"
import {AiOutlineHeart} from "react-icons/ai"
import "./trending.css"

function Trending() {
  return (
    <div className='trendingContainer'>
        <div className='heading'>
            Our trending influencers
        </div>

        <div className='cards'>
            {Cards.map((slide, index) =>{
                <img src={slide.link}/>
            })}
        </div>
        <AiOutlineHeart/>
        <FcLike/>
    </div>
  )
}

export default Trending