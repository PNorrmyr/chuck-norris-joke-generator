import Joke from '../joke/Joke'
import './jokeDisplay.css'

function JokeDisplay() {
  return (
    <div className='joke-display'>
      <section className="joke-display-wrapper">
        <Joke />
      </section>
      
    </div>
  )
}

export default JokeDisplay
