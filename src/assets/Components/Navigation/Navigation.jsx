import { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import './Navigation.css'

const Navigation = ({data, handleClickedLink}) => {

    const [menuIsToggled, setMenuIsToggled] = useState(false)

    const handleToggle = () => { setMenuIsToggled(!menuIsToggled) }

    return(
        <div className="navigation flex flex-col mx-10">
            <nav className="mainNavigation flex w-full justify-around my-2 mx-auto">
                <Link to='logo'><img src="./logo.png" className={`logo w-32`} alt="LOGO" /></Link>
                <ul className={ menuIsToggled ? 'navButtons show' : 'navButtons hidden' }>
                    <li className={`text-lg my-auto text`}><Link to='home' onClick={handleClickedLink}> HOME </Link></li>
                    <li className={`text-lg my-auto text`}><Link to='watchlist' onClick={handleClickedLink}> WATCHLIST </Link></li>
                    <li className={`text-lg my-auto text`}><Link to='watched' onClick={handleClickedLink}> WATCHED </Link></li>
                    <li className={`text-lg my-auto text`}><Link to='favorites' onClick={handleClickedLink}> FAVORITES </Link></li>
                </ul>
                <img className={`burger`} src="menu-burger.png" alt="MENU" onClick={handleToggle}/>
            </nav>
            <Outlet context={data}/>
        </div>
    )
}

export default Navigation