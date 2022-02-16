import './sport.css'

const Sport = ({data}) =>{
        const selectOdd = e =>{
           console.log(e.target.classList)
           if(e.target.classList.contains('selectedOdd')){
               e.target.classList.remove('selectedOdd')
            }
           e.target.classList.add('selectedOdd')

        }
        return <>
    <div className='oddsDiv'>
        <h4 className='time'><span>11`</span></h4>
        <h4 className='teams'>
        <span>{data.home}</span>
            <span>{data.away}</span>
        </h4>
        <h4 className='scoreline'>
            <span>{data.homeScore}</span>
            <span>{data.awayScore}</span>
        </h4>
        <div className='homeOdd'>
            <span className= 'selectedOdd' onClick= {e=>selectOdd(e)}>{data.homeOdd}</span>
            <span className= '' onClick= {e=>selectOdd(e)}>{data.drawOdd}</span>
            <span className= '' onClick= {e=>selectOdd(e)}>{data.awayOdd}</span>

        </div>
        <div className='doubleOdd'>
            <span className= '' onClick= {e=>selectOdd(e)}>{data.homeDouble}</span>
            <span className= '' onClick= {e=>selectOdd(e)}>{data.doubleChance}</span>
            <span className= '' onClick= {e=>selectOdd(e)}>{data.awayChance}</span>

        </div>
    </div>
    <hr/>
    </>


}

export default Sport