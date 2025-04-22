import React from 'react'
import CartDetails from '../components/Home/CartDetails'

function Cart() {
  return (
  <div className='w-full bg-[var(--bg)] pb-16 lg:pb-20 lg:px-64 h-[calc(100vh-64px)] flex justify-center items-center'>
    <CartDetails/>
  </div>
  )
}

export default Cart
