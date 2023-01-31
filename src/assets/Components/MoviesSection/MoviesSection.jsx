import ResultsSection from "../ResultsSection/ResultsSection"
import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import { localStorageService } from "../../../utils/localStorageService";
import { useLocale } from "../../../hooks/useLocale";

const MoviesSection = (props) => {

    const {favorites, watched, watchlist, dispatch} = useLocale()

    const data = useOutletContext()
    const [query, setQuery] = useState('')
    const [searchData, setSearchData] = useState()

    const handleSubmit = () => {
        fetch(`${import.meta.env.VITE_API_URL}/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${query}`)
        .then(res => res.json())
        .then(res => setSearchData(res.results))
    }

    return (
        <div className="movies-list flex mx-auto">
            {
                props.value == 'home' && 
                <div className="flex flex-col items-center mx-auto my-2">
                    <div className="search-bar flex block">
                        <input className="bg-orange-300 mx-2 text-center my-3" id='queryInput' type="text" placeholder="Type a movie name" value={query} onChange={e => setQuery(e.target.value)}/>
                        <button className="border-2 rounded-md my-3 border-orange-500 text-orange-400 mx-2 px-2" onClick={handleSubmit}>Submit</button>
                    </div>
                
                    <ResultsSection data={searchData} />
                </div>
            }
            { props.pathSimbol != 'not/' && <ResultsSection data={data.results} />}

            { props.value == 'watchlist' && watchlist && <ResultsSection data={watchlist} />}
            { props.value == 'watched' && watched && <ResultsSection data={watched} />}
            { props.value == 'favorites' && favorites && <ResultsSection data={favorites} />}
        </div>
        
    )
}

export default MoviesSection

// 