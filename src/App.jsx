
import './App.css'
import Timer from './components/Timer'
import Counter from './components/Counter'
import MovieList from './components/MovieList'

import movies from './assets/moviesDB'


function App() {


  return (

    <div>
      <h1>My first Dynamic React Application</h1>

      <Timer startTime={0}/>

      <Counter />

      <MovieList movieDB={movies} headingText="My Movie Database"/>
       
    </div>
  )
}

export default App
