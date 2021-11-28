//  import Styles from './App.module.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Firstpage from "./Components/Firstpage/Firstpage.js"
import Card from "./Components/Card/Card.js"
import Signup from "./Components/Signup/Signup.js"
import Leaderboard from "./Components/Leaderboard/Leaderboard.js"

function App()
{
    return (
        <Router>
            <Routes>
                <Route exact path = "/" element = {<Firstpage/>}/>

                <Route path = "/credits" element = {<Card/>}/>

                <Route path = "/login" element = {<Signup/>}/>

                <Route path = "/leaderboard" element = {<Leaderboard/>}/>
            </Routes>
        </Router>
    )
}

export default App;
