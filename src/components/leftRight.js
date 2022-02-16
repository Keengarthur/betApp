import './leftRight.css'
import football from './../images/football.svg'
import sportsData from './data'
import Sport from './sports'
import { useState,useEffect } from 'react'
import Footer from './footer'        



const LeftRight = () =>{
        const [currentSport, setCurrentSport ] = useState('football')
    const handleClick = (e) =>{
        const sport = e.target.parentElement.id
        // console.log(sport)
        setCurrentSport(sport)
    }

    useEffect(()=>{
        console.log('re-rendering')
    },[currentSport])
    return <div className='leftRightDiv'>
    <div className='leftRight1'>

    </div>
    <div className='leftRight2'>
            <h4 className='leftRight2H4'>
                <span>Show Highlights</span>
                 <span>View Live Betting</span>
            </h4>
            <div className='leftRight2DivCont'>
                {Object.keys(sportsData).map(sport=>{
                    const sportData = sportsData[sport]
                   console.log( sportsData[currentSport])
                   return  <div className='leftRight2Div' id={sport}
                    key={sport}>
                <img src= {football}/>
                <h4 onClick={e => handleClick(e)}>{sport}</h4>
        </div> 
                })}
                 </div>
                 {
                
                sportsData[currentSport].map(sport =>{
                    const sportsdata = sport.data
                    return <section className='leftRight2Section'>
                
    <div className='leftRight2First right2First'>
    <h3>{sport.name}</h3>
    <h4>3way</h4>
    <h4>Doubles(1x-12-2x)</h4>
    </div> 
    <div className='leftRight2First right2Second'>
    <h3></h3>
    <h4><span>1 </span>
        <span>X </span>
         <span>2 </span>
        </h4>
    <h4><span>1X </span>
        <span>12 </span>
         <span>2X </span>
         </h4>
    </div> 
               { sportsdata.map(sport=>{
                 return <><Sport data = {sport}/></>

               })}
                
                
            
               
                </section>
                })

                    
                }
                
                )


                 
                 

         
        
    </div>
     
    </div>
    
}

export default LeftRight