import { Link, Outlet } from "react-router-dom"
import styles from './Navigation.module.css'

const Navigation = ({data, handleClickedLink}) => {
    return(
        <div className="navigation flex flex-col mx-10">
            <nav className="flex w-full justify-around my-2 mx-auto">
                <div><Link to='logo'><img src="./logo.png" className="w-32" alt="LOGO" /></Link></div>
                <ul className="nav-buttons w-full flex justify-between mx-20">
                    <li className={`text-lg my-auto ${styles.text}`}><Link to='home' onClick={handleClickedLink}> HOME </Link></li>
                    <li className={`text-lg my-auto ${styles.text}`}><Link to='watchlist' onClick={handleClickedLink}> WATCHLIST </Link></li>
                    <li className={`text-lg my-auto ${styles.text}`}><Link to='watched' onClick={handleClickedLink}> WATCHED </Link></li>
                    <li className={`text-lg my-auto ${styles.text}`}><Link to='favorites' onClick={handleClickedLink}> FAVORITES </Link></li>
                </ul>
            </nav>
            <Outlet context={data}/>
        </div>
    )
}

export default Navigation