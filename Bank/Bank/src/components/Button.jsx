import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`px-6 py-4 bg-blue-gradient font-medium text-[18px] text-black outline-none ${styles} rounded-2xl`}>
      Get Started
    </button>
  )
}

export default Button
