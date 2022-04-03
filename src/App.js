import React, {useState} from 'react'
import './App.css';
import DisplayCountries from './Display-Countries';

function App() {
  const [countries, setCountries] = useState("")

  const handelEvent = (e) =>{
    let typedValue = e.target.value.toLowerCase();
    setCountries(typedValue);
  }

  return (
    <div className="App">
      <input onChange={handelEvent} type="text" placeholder="search"></input>
      <DisplayCountries countries = {countries} />
    </div>
  );
}

export default App;
