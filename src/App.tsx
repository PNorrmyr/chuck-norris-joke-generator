import { useState, useEffect } from 'react'
import './App.css'
import Generator from './components/generator/Generator'
import axios from 'axios';

function App() {
  const [categories, setCategories] = useState<string[]>([])



  useEffect(() => {
    axios.get('https://api.chucknorris.io/jokes/categories')
    .then(response => {
      setCategories(response.data);
    })
  }, [])

  console.log(categories);
  
  

  return (
   <div className="app">
      <Generator categories={ categories }/>
   </div>
  )
}

export default App
