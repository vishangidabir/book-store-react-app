import React from 'react'
import image from '../../components/Home/assests/image.png'


import './Order.css'
function Order() {
  return (
    <>
        <div className='container12'>
        <div><img src={image} className='ordersuccessimg'/></div>
        <div className='message123'>order placed successfully</div>
        </div>
        <div className='message2'>hurray!!! your order is confirmed the order id is #123456 save the order id for further communication..</div>
        <div className='th'><div className='ths'>Email Us</div><div className='ths'>Contact Us</div><div className='ths'>Address</div></div>
        <div className='td'><div className='tds'>admin@bookstore.com</div><div className='tds'>+918888888888</div><div className='tds'>Shivngar, Panvel</div></div>
    </>
  )
}

export default Order