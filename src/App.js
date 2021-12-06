//  import Styles from './App.module.css';
import {useState} from "react"
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import Firstpage from "./Components/Firstpage/Firstpage.js"
import Card from "./Components/Card/Card.js"
import Signup from "./Components/Signup/Signup.js"
import Leaderboard from "./Components/Leaderboard/leaderboard.js"
import Instruction from "./Components/Instructions/Instructions.js"
import Game from "./Components/Game/Game.js"

function App()
{
    const [user, setUser] = useState("")
    return (
        <Router>
            <Routes>
                <Route exact path = "/" element = {<Firstpage/>}/>

                <Route path = "/credits" element = {<Card/>}/>

                <Route path = "/game" element = {user?<Game/>:<Navigate to = "/login" />}/>

                <Route path = "/login" element = {<Signup setUser = {setUser}/>}/>

                <Route path = "/instruction" element = {<Instruction/>}/>

                <Route path = "/leaderboard" element = {<Leaderboard/>}/>
            </Routes>
        </Router>
    )
}

export default App;
