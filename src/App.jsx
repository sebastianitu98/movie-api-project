import { useEffect, useState } from 'react'
import  useToggle  from './hooks/useToggle'
import Navigation from './assets/Components/Navigation/Navigation'
import Description from './assets/Components/Description/Description'
import styles from './App.module.css'
import { localStorageService } from './utils/localStorageService'

function App() {
  
  const [mostPopular, setMostPopular] = useState()
  const [isToggled, setToggle] = useToggle()

  //initialize data from localStorage
  localStorageService.initializeData();
  
  useEffect(() => {
      fetch(`${import.meta.env.VITE_API_URL}/trending/movie/day?api_key=${import.meta.env.VITE_API_KEY}`)
      .then(res => res.json())
      .then(res => setMostPopular(res))
  },[])

  const handleToggle = () => {
    if (isToggled == true){
      setToggle()
    }
  }


  return (
    <div className={`${styles.App}`}>
      {mostPopular && <Navigation data={mostPopular} handleClickedLink={handleToggle}/>}
      <Description isToggled={isToggled} />
    </div>
  )
}

export default App
