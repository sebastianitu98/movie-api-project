const ls = window.localStorage;

export const localStorageService = {
    initializeData: () => {
        if (ls.getItem('watchlist') === null){
            ls.setItem('watchlist',JSON.stringify([]))
        }
        if (ls.getItem('watched') === null){
            ls.setItem('watched',JSON.stringify([]))
        }
        if (ls.getItem('favorites') === null){
            ls.setItem('favorites',JSON.stringify([]))
        }
    },
    
    getWatchlist: () => { return JSON.parse(ls.getItem('watchlist')) },
    getWatched: () => { return JSON.parse(ls.getItem('watched')) },
    getFavorites: () => { return JSON.parse(ls.getItem('favorites')) },

    setWatchlist: ( data ) => { ls.setItem('watchlist', JSON.stringify( data )) },
    setWatched: ( data ) => { ls.setItem('watched', JSON.stringify( data )) },
    setFavorites: ( data ) => { ls.setItem('favorites', JSON.stringify( data )) },    
};