import JokeForm from '../jokeForm/JokeForm'
import './generator.css'

type Props = {
  categories : string[]
}


function Generator({ categories } : Props) {
  return (
    <div className='generator'>
        <section className="generator-wrapper">
            <JokeForm categories= { categories }/>
        </section>
      
    </div>
  )
}

export default Generator
