import './App.css';
import { useEffect, useState } from 'react';
import searchIcon from './search.svg'
import Card from './components/card';
const API_KEY='547cd335'
const link=`http://www.omdbapi.com/?apikey=${API_KEY}` 




function App() {
  const searchMovies= async (title)=>{
    const response= await fetch(`${link}&s=${title}`)
    const data= await response.json()
    console.log(data.Search);
    setCards(data.Search)
  }


 const[cards,setCards]=useState([])
 const [searchTerm,setSearchTerm]=useState('')
  useEffect(()=>{
    searchMovies('avengers')
},[])

  return (
    <div className="App flex items-center justify-center flex-col">
      <h1>MOVIES4YOU</h1>

<div className="search">
  <input placeholder="Search for movies" onChange={(e)=> setSearchTerm(e.target.value)}/>
  <img src={searchIcon} alt="search"
  
  onClick={()=>searchMovies(searchTerm)}
  />
</div>


  <div className="container w-11/12 flex  items-start  justify-start gap-4 flex-wrap">
    {cards.map(card=>{
     if(cards.length>0){
      return (
        <Card 
        Title={card.Title}
        Image={card.Poster}
        Type={card.Type}
        />
        )
     }else{
      return <div><h3>No Movies Found</h3></div>
     }
      
    })}
  </div>

  </div>
  )
}

export default App;
