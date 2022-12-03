import { useState, useEffect } from 'react'
import './App.css'
import deskr1 from './assets/images/julia-unsplash1.png'
import deskr2 from './assets/images/taisiia-unsplash1.png'
import deskr3 from './assets/images/julia-unsplash.png'
import deskr4 from './assets/images/taisiia-unsplash.png'
import Slider from './components/Slider'
import Description from './components/Description'


function App() {
  let oldScrollFromTop = 0
  let [direction, setDirection] = useState('down')

  const handleScroll = (e) => {
    if (e.srcElement.scrollingElement.scrollTop > oldScrollFromTop) { setDirection('down') }
    if (e.srcElement.scrollingElement.scrollTop < oldScrollFromTop) { setDirection('up') }
    oldScrollFromTop = e.srcElement.scrollingElement.scrollTop
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [])


  return (
    <div className="App">
      <div className='
        
        mt-[18vh] mb-[8vh]   
        laptop:mt-[19vh] 
        laptop:mb-[9vh] 
        mx-[5%]
         laptop:mx-[10vw] '>
        <span className=' 
          uppercase 
          leading-[40px]
          text-[30px] 
          font-[600] 
          orchidea'>ut aliquip ex ea commodo consequat</span>
      </div>
      <Description image1={deskr1} image2={deskr2} />
      <Slider direction={direction} />
      <div className='
        my-[60px] 
        mx-[5%]
        laptop:mx-[10vw]'>
        <span className='
          uppercase 
          text-[30px] 
          font-[600] 
          orchidea'>ut aliquip ex ea commodo consequat</span>
      </div>
      <Description image1={deskr3} image2={deskr4} />
    </div>
  )
}

export default App
