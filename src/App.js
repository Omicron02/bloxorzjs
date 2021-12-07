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
    const [user, setUser] = useState(localStorage.getItem('user')?localStorage.getItem('user'):"")
    return (
        <Router>
            <Routes>
                <Route exact path = "/" element = {<Firstpage setUser={setUser} user={user}/>}/>

                <Route path = "/credits" element = {<Card/>}/>

                <Route exact path = "/game" element = {user?<Game/>:<Navigate to = "/login" />}/>

                <Route exact path = "/game/dead" element = {<Navigate to = "/game"/>}/>

                <Route exact path = "/game/win" element = {<Navigate to = "/leaderboard"/>}/>

                <Route exact path = "/login" element = {<Signup setUser = {setUser}/>}/>
                
                <Route exact path = "/login/success" element = {user?<Navigate to = "/game" />:<Navigate to = "/login" />}/>

                <Route path = "/instruction" element = {<Instruction/>}/>

                <Route path = "/leaderboard" element = {<Leaderboard/>}/>
            </Routes>
        </Router>
    )
}

export default App;
