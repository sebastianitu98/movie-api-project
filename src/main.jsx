import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MoviesSection from './assets/Components/MoviesSection/MoviesSection'
import MovieDetails from './assets/Components/MovieDetails/MovieDetails'
import { LocaleProvider } from './context/LocaleContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: 'logo',
        element: <MoviesSection value={'notHome'} pathSimbol={'/'}/>
      },
      {
        path: '/logo/:id',
        element: <MovieDetails />
      },
      {
        path: 'home',
        element: <MoviesSection value={'home'} pathSimbol={'not/'}/>
      },
      {
        path: '/home/:id',
        element: <MovieDetails />
      },
      {
        path: 'watchlist',
        element: <MoviesSection value={'watchlist'} pathSimbol={'not/'}/>
      },
      {
        path: '/watchlist/:id',
        element: <MovieDetails />
      },
      {
        path: 'watched',
        element: <MoviesSection value={'watched'} pathSimbol={'not/'}/>
      },
      {
        path: '/watched/:id',
        element: <MovieDetails />
      },
      {
        path: 'favorites',
        element: <MoviesSection value={'favorites'} pathSimbol={'not/'}/>
      },
      {
        path: '/favorites/:id',
        element: <MovieDetails />
      }
    ]
  },  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LocaleProvider>
      <RouterProvider router={router}/>
    </LocaleProvider>
  </React.StrictMode>
)
