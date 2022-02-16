import './rightRight.css'
import demo from './../images/demo.jpg'
const RightRight = () =>{
    return <div className='rightRightDiv'>
        <div className='rightDivFirst'>
            <h3>Betslip</h3>
            <h4>Your betslip is empty</h4>
            <p>Provide the code contained on your betslip in the box below</p>
            <input/><button>Enter</button>
        </div>
        <div className='rightDivSecond'></div>
        <div className='rightDivThird'>
            <img className = 'demo' src={demo}/>
            <div className='demoBonus'>
                <h3 style={{color:'olive'}}>Multiple Bet Bonuses</h3>
                <p>Earn tokens as you bet big. Try out by clicking 
                    the button below
                </p>
                <button>Bet now</button>
            </div>
            
        </div>
        </div>
}

export default RightRight