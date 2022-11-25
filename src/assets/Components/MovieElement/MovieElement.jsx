import { formatDate } from "../../../utils/formatDate"
import { Link } from "react-router-dom"
import { localStorageService } from "../../../utils/localStorageService"
import styles from './MovieElement.module.css'

localStorageService.initializeData();

var favorites = localStorageService.getFavorites();
var watchlist = localStorageService.getWatchlist();
var watched = localStorageService.getWatched();

const MovieElement = ({movie}) => {
    const POSTER_PATH = 'https://image.tmdb.org/t/p/original'

    var canBeAddedToFavorites = !localStorageService.getFavorites().includes(movie)
    var canBeAddedToWatchlist = !localStorageService.getWatchlist().includes(movie)
    var canBeAddedToWatched = !localStorageService.getWatched().includes(movie)

    
    const handleAddToFavorites = () => {
        if (canBeAddedToFavorites){
            favorites.push(movie)
            localStorageService.setFavorites(favorites)
            canBeAddedToFavorites = false;
        } else {
            const filteredFavorites = favorites.filter( (el) =>  el.id !== movie.id)
            localStorageService.setFavorites(filteredFavorites);
            favorites = localStorageService.getFavorites();
            canBeAddedToFavorites = true;
        }
    }

    const handleAddToWatched = () => {
        if (canBeAddedToWatched){
            watched.push(movie)
            localStorageService.setWatched(watched)
            canBeAddedToWatched = false;
        } else {
            const filteredWatched = watched.filter( (el) =>  el.id !== movie.id)
            localStorageService.setWatched(filteredWatched);
            watched = localStorageService.getWatched();
            canBeAddedToWatched = true;
        }
    }

    const handleAddToWatchlist = () => {
        if (canBeAddedToWatchlist){
            watchlist.push(movie)
            localStorageService.setWatchlist(watchlist)
            canBeAddedToWatchlist = false;
        } else {
            const filteredWatchlist = watchlist.filter( (el) =>  el.id !== movie.id)
            localStorageService.setWatchlist(filteredWatchlist);
            watchlist = localStorageService.getWatchlist();
            canBeAddedToWatchlist = true;
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
                    <img className="w-6 h-auto" src="./download.bmp" alt="Download icon" title='Download'/>
                </button>

                {/* Button for favorites */}
                <button id='fav-btn' className="text-sm" onClick={handleAddToFavorites} >
                    {canBeAddedToFavorites ? <img className="w-6 h-auto" src="./notFavoriteYet.bmp" alt="FavoriteIcon" title='Add to favorites'/> : 
                    <img className="w-6 h-auto" src="./favorite.bmp" alt="RemoveFromFavoritesIcon" title='Remove from favorites'/>}
                </button>

                {/* Button for watchlist */}
                <button id='watchlist-btn' className="text-sm" onClick={handleAddToWatchlist} >
                    <img className="w-6 h-auto" src="./notBookmarkedYet.bmp" alt="Add to watchlist icon" title='Add to watchlist'/>
                </button>

                {/* Button to mark as watched */}
                <button id='watched-btn' className="text-sm" onClick={handleAddToWatched} >
                    <img className="w-6 h-auto" src="./notWatchedYet.bmp" alt="Watched icon" title='Add to already watched'/>
                </button>
            </div>
        </div>
    )
}

export default MovieElement