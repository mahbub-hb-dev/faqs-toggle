import React, { useState } from 'react'

const FAQ = ({title, desc}) => {

    const [toggle, setToggle] = useState(false);

  return (
    <section>
        <div>
            <h3 className='text-2xl font-medium'> {title} </h3>
            <button onClick={() => {setToggle(!toggle)}} className='border text-xl rounded-md font-bold w-10'> {toggle ? "-" : "+"} </button>
        </div>
        {toggle && <p> {desc} </p>}
    </section>
  )
}

export default FAQ
