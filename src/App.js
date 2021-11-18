//  import Styles from './App.module.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Firstpage from "./Firstpage.js"
import Card from "./Card.js"

function App()
{
  return (
    <Router>
      <Routes>
        <Route path = "/" exact element = {<Firstpage/>}/>

        <Route path="/credits" element = {<Card/>}/>
      </Routes>
    </Router>
  )
}

export default App;
