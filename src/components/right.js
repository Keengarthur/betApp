import './right.css'
import LeftRight from './leftRight'
import RightRight from './rightRight'
import { useEffect,useState } from 'react'

const Right = () =>{
    
    const getTime = () =>{
        const time = new Date()
        return {
            hour : time.getHours(),
            minutes : time.getMinutes()

        }    
}
    const [ time,setTime ] = useState(getTime())
    // const [hour,setHour] = useState('')
    // const [minutes,setMinutes] = useState('')



//    const setTimer  = () =>{
//         const timeout = setTimeout(changeTime,1000)
//                clearTimeout(timeout)

//    }
//    const changeTime =()=>{
//        getTime()
//    }
    // useEffect(()=>{
    //     setTime(setTimer())
    //    setHour(time.hour)
    //    setMinutes(time.minutes)
    // },[time])
    return <section className='rightSection'>
     <nav className = 'rightNav'>
        <div className='timeLoc'>
            <h4>
                <span>{time.hour < 10 ? `0${time.hour}`: time.hour}:
                {time.minutes < 10 ? `0${time.minutes}` : time.minutes}</span>
                <span>Lagos/Nigeria</span>

            </h4>
            
        </div>
        <div className='rightList'>
            <span><a>Help</a></span>
            <span><a>Livescore</a></span>
            <span><a>Coupon Check</a></span>
            <span><a>Check Slip</a></span>


            </div>
        
        <div className='matchID'>
            <span>show Match ID</span>
        </div>
        </nav>
        
        <article className= 'rightArticle'>
       <LeftRight/>
       <RightRight/>

     </article>
    </section>
}

export default Right