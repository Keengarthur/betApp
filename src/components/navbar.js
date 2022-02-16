import './navbar.css'


const Navbar = () =>{
    return <nav className = 'navbarNav'>
        <div className='betStar'>
            <h1>
                betStar
            </h1>
            <div className='sportsList'>
            <span><a>sports</a></span>
            <span><a>live</a></span>
            <span><a>casino</a></span>
            <span><a>virtual</a></span>
            <span><a>mobile</a></span>


            </div>
        </div>
        
        <div className='credentials'>
            <span>register</span>
            <span>login</span>

        </div>

    </nav>
}

export default Navbar