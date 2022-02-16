import './left.css'
import football from './../images/football.svg'
const Left = () =>{
    return <article className='leftArticle'>
        <div className='leftArticle1'>
            <input placeholder = 'search for teams, live events' />
            </div>

        <div className='leftArticle2'>
            <ul>
                <li><a href='#'><img src={football}/>Live Betting</a></li>
                <li><a href='#'><img src={football}/>English Premier League</a></li>
                <li><a href='#'><img src={football}/>English Championship</a></li>
                <li><a href='#'><img src={football}/>Spanish Laliga</a></li>
                <li><a href='#'><img src={football}/>French Ligue</a></li>
                <li><a href='#'><img src={football}/>NBA</a></li>
                <li><a href='#'><img src={football}/>NPL</a></li>
                <li><a href='#'><img src={football}/>German Bundesliga</a></li>
                <li><a href='#'><img src={football}/>Italy SerieA</a></li>


            </ul>
        </div>

        <div className='leftArticle3'>
            <h3>
                <span>Today</span>
                <a href='#'>2H</a>
                <a href='#'>4H</a>
                <a href='#'>8H</a>
                <a href='#'>All</a>

            </h3>
        </div>

        <div className='leftArticle4'>
            <h2>Sports</h2>
            <ul>
                <li><span> <img src={football}/>Football</span><span> > </span></li>
                <li><span> <img src={football}/>Basketball</span><span> > </span></li>
                <li><span> <img src={football}/>Volleyball</span><span> > </span></li>
                <li><span> <img src={football}/>Hockey</span><span> > </span></li>
                <li><span> <img src={football}/>Tabletennis</span><span> > </span></li>
                <li><span> <img src={football}/>Rugby</span><span> > </span></li>
                <li><span> <img src={football}/>Boxing</span><span> > </span></li>
                <li><span> <img src={football}/>Polo</span><span> > </span></li>
                <li><span> <img src={football}/>Golf</span><span> > </span></li>
                <li><span> <img src={football}/>Badminton</span><span> > </span></li>

            </ul>
        </div>
    </article>
}
export default Left