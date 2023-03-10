import React, { useEffect, useState } from 'react'

const Clock = () => {


  const [days,setDays]=useState()
  const [hours,setHours]=useState()
  const [minutes,setMinutes]=useState()
  const [seconds,setSeconds]=useState()

  let intervel;

  const countDown = ()=>{
    const destination =new Date('may 1,2023').getTime()
    intervel = setInterval(()=>{

      const now =new Date().getTime()
      const diffrent= destination - now 
      const days = Math.floor(diffrent / (1000 * 60 * 60 *24))

      const hours = Math.floor(diffrent % (1000 *60*60*24) / (1000*60*60))

      const minutes =Math.floor(diffrent % (1000 *60 * 60 )/ (1000*60))

      const seconds =Math.floor(diffrent % (1000 *60  )/ 1000)


      if(destination < 0) clearInterval(intervel.current)

      else{
        setDays(days)
        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds)
      }
      
    })
  }

  useEffect(()=>{
    countDown()
  })

  return (
    <div className='clock__wrapper d-flex align-items-center gap-3'>
          <div className="clock__data d-flex align-items-center gap-3 ">
              <div className='text-center'>
                <h1 className='text-white fs-3 mb-3'>{days}</h1>
                <h5 className='text-white fs-6'>days</h5>
                     
              </div> 
              <span className='text-white fs-3'>:</span>
          </div>

          <div className="clock__data d-flex align-items-center gap-5 ">
              <div className='text-center'>
                <h1 className='text-white fs-3 mb-3'>{hours}</h1>
                <h5 className='text-white fs-6'>Houres</h5>
                     
              </div> 
              <span className='text-white fs-3'>:</span>
          </div>

          <div className="clock__data d-flex align-items-center gap-5 ">
              <div className='text-center'>
                <h1 className='text-white fs-3 mb-3'>{minutes}</h1>
                <h5 className='text-white fs-6'>minutes</h5>
                     
              </div> 
              <span className='text-white fs-3'>:</span>
          </div>

          <div className="clock__data d-flex align-items-center gap-5 ">
              <div className='text-center'>
                <h1 className='text-white fs-3 mb-3'>{seconds}</h1>
                <h5 className='text-white fs-6'>seconds</h5>
                     
              </div> 
        
          </div>

    </div>
  )
}

export default Clock
