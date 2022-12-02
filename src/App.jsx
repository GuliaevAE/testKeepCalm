import { useState } from 'react'

import './App.css'
import deskr1 from './assets/images/julia-unsplash1.png'
import deskr2 from './assets/images/taisiia-unsplash1.png'
import deskr3 from './assets/images/julia-unsplash.png'
import deskr4 from './assets/images/taisiia-unsplash.png'

import Slider from './components/Slider'
import Description from './components/Description'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='w-[fit-content] my-[15%]  laptop:my-[5%] mx-[auto] px-[5%]'>
        <span className=' uppercase text-[30px] font-[600] orchidea'>ut aliquip ex ea commodo consequat</span>
      </div>

     

      <Description image1={deskr1} image2={deskr2}/>

      <Slider/>

      <div className='w-[fit-content]  my-[60px] mx-[auto]'>
        <span className=' uppercase text-[30px] font-[600] orchidea'>ut aliquip ex ea commodo consequat</span>
      </div>

      <Description image1={deskr3} image2={deskr4}/>

      
    </div>
  )
}

export default App
