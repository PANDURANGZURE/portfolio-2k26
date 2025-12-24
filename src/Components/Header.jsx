import React from 'react'

function Header() {
  return (
    <div className='flex fixed top-0 justify-between w-screen px-20 py-5 '>
        <div className='font-bold text-3xl '>PZ</div>
        <div>
            <ul className='flex space-x-3 pt-2'>
                <li>Home</li>
                <li>About</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Header