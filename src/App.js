//  import Styles from './App.module.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Firstpage from "./Firstpage.js"
import Card from "./Card.js"
import Signup from "./signup/Signup.js"

function App()
{
  return (
    <Router>
      <Routes>
        <Route exact path = "/" element = {<Firstpage/>}/>

        <Route path = "/credits" element = {<Card/>}/>

        <Route path = "/login" element = {<Signup/>}/>
      </Routes>
    </Router>
  )
}

export default App;
