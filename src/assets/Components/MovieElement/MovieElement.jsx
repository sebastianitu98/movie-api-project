import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { formatDate } from "../../../utils/formatDate"
import { localStorageService } from "../../../utils/localStorageService"
import styles from './MovieElement.module.css'

import { useLocale } from '../../../hooks/useLocale'
import { ACTIONS } from "../../../context/LocaleContext";


const MovieElement = ({ movie }) => {
    const POSTER_PATH = 'https://image.tmdb.org/t/p/original'

    const { favorites, watched, watchlist, dispatch } = useLocale()

    const [canBeAddedToFavorites, setCanBeAddedToFavorites] = useState(!(favorites).includes(movie))
    const [canBeAddedToWatched, setCanBeAddedToWatched] = useState(!(watched).includes(movie))
    const [canBeAddedToWatchlist, setCanBeAddedToWatchlist] = useState(!(watchlist).includes(movie))


    const handleAddToFavorites = () => {
        if (canBeAddedToFavorites) {
            dispatch({ type: ACTIONS.ADD_TO_FAV, payload: movie })
            setCanBeAddedToFavorites(false);
        } else {
            dispatch({ type: ACTIONS.REMOVE_FAVORITE, payload: movie.id })
            setCanBeAddedToFavorites(true);
        }
    }

    const handleAddToWatched = () => {
        if (canBeAddedToWatched) {
            dispatch({ type: ACTIONS.ADD_TO_WATCHED, payload: movie })
            setCanBeAddedToWatched(false)
        } else {
            dispatch({ type: ACTIONS.REMOVE_WATCHED, payload: movie.id })
            setCanBeAddedToWatched(true)
        }
    }

    const handleAddToWatchlist = () => {
        if (canBeAddedToWatchlist) {
            dispatch({ type: ACTIONS.ADD_TO_WATCHLIST, payload: movie })
            setCanBeAddedToWatchlist(false);
        } else {
            dispatch({ type: ACTIONS.REMOVE_WATCHLIST, payload: movie.id })
            setCanBeAddedToWatchlist(true);
        }
    }

    return (
        <div className={`w-70 flex flex-col text-center ${styles.movie_element} items-center`}>

            {/* title */}
            <p className='truncate my-2 text-xl w-10/12 font-bold'>{movie.title}</p>

            {/* poster */}
            <img className="w-52 h-auto"
                src={`${POSTER_PATH}/${movie.poster_path}`}
                alt="Poster presenting the movie" />

            {/* Release date */}
            <p className="text-sm my-1">Release date: {formatDate(movie.release_date)}</p>

            {/* Link to details page of the movie */}
            <Link to={`${movie.id}`}> Read more </Link>

            <div className="buttons-for-actions flex justify-around w-10/12 my-1">
                {/* Button for download */}
                <button className="text-sm">
                    <img className="w-6 h-auto" src="./download.bmp" alt="Download icon" title='Download' />
                </button>

                {/* Button for favorites */}
                <button id='fav-btn' className="text-sm" onClick={handleAddToFavorites} >
                    {<img className="w-6 h-auto" src={canBeAddedToFavorites ? 'notFavoriteYet.bmp' : 'favorite.bmp'} alt="FavoriteIcon" title='Add to favorites' />}
                </button>

                {/* Button for watchlist */}
                <button id='watchlist-btn' className="text-sm" onClick={handleAddToWatchlist} >
                    <img className="w-6 h-auto" src={canBeAddedToWatchlist ? 'notBookmarkedYet.bmp' : 'bookmarked.bmp'} alt="Add to watchlist icon" title='Add to watchlist' />
                </button>

                {/* Button to mark as watched */}
                <button id='watched-btn' className="text-sm" onClick={handleAddToWatched} >
                    <img className="w-6 h-auto" src={canBeAddedToWatched ? "notWatchedYet.bmp" : 'watched.bmp'} alt="Watched icon" title='Add to already watched' />
                </button>
            </div>
        </div>
    )
}

export default MovieElement