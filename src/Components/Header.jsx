import React from 'react'

function Header() {
  return (
    <div className='flex justify-between w-screen px-20 py-5'>
        <div>PSZ</div>
        <div>
            <ul className='flex space-x-3'>
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