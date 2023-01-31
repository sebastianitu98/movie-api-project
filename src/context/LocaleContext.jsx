import { useReducer } from "react";
import { createContext } from "react";
import { localStorageService } from "../utils/localStorageService";

export const LocaleContext = createContext()

export const ACTIONS = {
    ADD_TO_FAV: 'ADD_TO_FAVORITES',
    ADD_TO_WATCHED: 'ADD_TO_WATCHED',
    ADD_TO_WATCHLIST: 'ADD_TO_WATCHLIST',
    REMOVE_FAVORITE: 'REMOVE_FROM_FAVORITES',
    REMOVE_WATCHED: 'REMOVE_FROM_WATCHED',
    REMOVE_WATCHLIST: 'REMOVE_FROM_WATCHLIST'
}

export const localeReducer = (state, action) => {
    switch(action.type) {
        case ACTIONS.ADD_TO_FAV:{
            localStorageService.setFavorites([...state.favorites, action.payload])
            return { ...state , favorites: [...state.favorites, action.payload]}
        }
        case ACTIONS.ADD_TO_WATCHED:{
            localStorageService.setWatched([...state.watched, action.payload])
            return { ...state , watched: [...state.watched, action.payload]}
        }
        case ACTIONS.ADD_TO_WATCHLIST:{
            localStorageService.setWatchlist([...state.watchlist, action.payload])
            return { ...state , watchlist: [...state.watchlist, action.payload]}
        }
        case ACTIONS.REMOVE_FAVORITE:{
            let newFavorites = state.favorites.filter( el =>  el.id !== action.payload )
            localStorageService.setFavorites(newFavorites)
            return { ...state , favorites: newFavorites}
        }
        case ACTIONS.REMOVE_WATCHED:{
            let newWatched = state.watched.filter( el =>  el.id !== action.payload )
            localStorageService.setWatched(newWatched)
            return { ...state , watched: newWatched}
        }
        case ACTIONS.REMOVE_WATCHLIST:{
            let newWatchlist = state.watchlist.filter( el => el.id !== action.payload )
            localStorageService.setWatchlist(newWatchlist)
            return { ...state , watchlist: newWatchlist}
        }
        default:
            return state
    }
}

export function LocaleProvider({children}){

    const [state, dispatch] = useReducer(localeReducer, {
        favorites: localStorageService.getFavorites(),
        watched: localStorageService.getWatched(),
        watchlist: localStorageService.getWatchlist()
    })

    return(
        <LocaleContext.Provider value={{...state, dispatch}}>
            {children}
        </LocaleContext.Provider>
    )
}
