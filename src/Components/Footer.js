import React from 'react'
import { AiOutlineBorderBottom } from 'react-icons/ai'

function Footer() {
  return (
    <div className='footerContainer'>
        <div className='row'>
            <div className='image'>

            </div>

            <div className='QuickLinks'>
                <h4>Quick Links</h4>
                <ul>
                    <li>Guzelgiy official site</li>
                    <li>Discover</li>
                    <li>Catalog</li>
                    <li>All products</li>
                </ul>
            </div>

            <div className='NeedHelp'>
                <h4>Need Help</h4>
                    <ul>
                        <li>Contact us</li>
                        <li>Track order</li>
                        <li>Refund Policies</li>
                        <li>FAQs</li>
                    </ul>
            </div>

            <div className='Company'>
                <h4>Company</h4>
                    <ul>
                        <li>About us</li>
                        <li>Gift vouchers</li>
                        <li>Catalog</li>
                        <li>All products</li>
                    </ul>
            </div>

            <div className='exclusiveOffer'>
                <h4>Get exclusive offers</h4>
                <form>
                    <input type="email" placeholder='E-mail address'/>
                    <button>--></button>
                </form>
            </div>

        </div>

        <div className='column'>

        </div>
    </div>
  )
}

export default Footer