
import React from 'react'
const Footer = () => {
  return (
  <footer className='bg-blue-600 h-30 text-white flex justify-around items-center'  >
    <div>
<h1 className='text-xl'>
    Welcome to Pakistan
</h1>
<p className='text-xl'>It is a tourism sight to explore Pakistan and its Beautiful valleys</p>
    </div>
    
    <div className='text-lg'>
    <h1 className='underline underline-offset-2 text-xl font-bold'>Importats Links</h1>
<div className='hover:text-red-600'>Facebook</div>
<div className='hover:text-red-600 '>Instagram</div>
<div className='hover:text-red-600'>Twitter</div>
<div className='hover:text-red-600'>WhatsApp</div> 
    </div>
  </footer>
  )
}

export default Footer
