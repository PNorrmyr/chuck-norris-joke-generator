import axios from 'axios';
import './jokeForm.css'
import { useState, useEffect } from 'react';

type Props = {
  categories : string[]
}

function JokeForm({ categories } : Props) {
  const [category, setCategory] = useState<string>('animal');
  const [joke, setJoke] = useState<string>('');
  const [input, setInput] = useState<string>('')
  const [jokeList, setJokeList] = useState<string[]>([]);


  useEffect(() => {
    axios.get(`https://api.chucknorris.io/jokes/random?category=${ category }`)
    .then(response => {
      setJoke(response.data.value)
    })
  }, [category])

  useEffect(() => {
    axios.get(`https://api.chucknorris.io/jokes/search?query=${ input }`)
    .then(response => {
      setJokeList(response.data.result.map((joke : any) => joke.value));
      
    })
    
  }, [input])


  const handleChange = (e : React.ChangeEvent<HTMLSelectElement>) => {
      setCategory(e.target.value)
  }

  const handleInput = (e : React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.get(`https://api.chucknorris.io/jokes/search?query=${ input }`)
    .then(response => {
      setJokeList(response.data.result.map((joke : any) => joke.value));
    })
  }

  return (
    <div className='joke-form'>
      <section className="joke-form-wrapper">
        <form onSubmit={handleSubmit}>
          <label>Choose category: </label>
          <select name="category" id="category" onChange={ handleChange }>
            {
              categories.map((category, index) => {
                return <option key={ index }value={ category }>{ category }</option>
              })
            }
          </select>
          <input type="text" onChange={ handleInput }/>
          <button>Submit</button>
          <pre>{joke}</pre>
          <h2>search</h2>
            {
              jokeList.map((joke, index) => {
                return <pre key={index}>{joke}</pre>
              })
            }
            
        </form>
      </section>
      
    </div>
  )
}

export default JokeForm
