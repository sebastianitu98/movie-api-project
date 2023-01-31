import { useReducer } from "react";
import { createContext } from "react";

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
        case ACTIONS.ADD_TO_FAV:
            return { ...state , favorites: [...state.favorites, action.payload]}
        case ACTIONS.ADD_TO_WATCHED:
            return { ...state , watched: [...state.watched, action.payload]}
        case ACTIONS.ADD_TO_WATCHLIST:
            return { ...state , watchlist: [...state.watchlist, action.payload]}
        case ACTIONS.REMOVE_FAVORITE:{
            let newFavorites = state.favorites.filter( el =>  el.id !== action.payload )
            return { ...state , favorites: newFavorites}
        }
        case ACTIONS.REMOVE_WATCHED:{
            let newWatched = state.watched.filter( el =>  el.id !== action.payload )
            return { ...state , watched: newWatched}
        }
        case ACTIONS.REMOVE_WATCHLIST:{
            let newWatchlist = state.watchlist.filter( el => el.id !== action.payload )
            return { ...state , watchlist: newWatchlist}
        }
        default:
            return state
    }
}

export function LocaleProvider({children}){

    const [state, dispatch] = useReducer(localeReducer, {
        favorites: [],
        watched: [],
        watchlist: []
    })

    return(
        <LocaleContext.Provider value={{...state, dispatch}}>
            {children}
        </LocaleContext.Provider>
    )
}
