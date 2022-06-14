import React from 'react'
import "./navbar.css"

function NavBar() {
  return (
    <div className="navbarContainer">

        <div className="navbarImage">
        <img src=""/>
        </div>

        <div className="middle">
            <ul>
                <li>Catalog</li>
                <li>Influencers Area</li>
                <li>Contact</li>
            </ul>
        </div>

        <div className="rightSide">
            
            <button>Log in</button>
            <div className="store">
                <img src=""/>
            </div>
        </div>

    </div>
  )
}

export default NavBar