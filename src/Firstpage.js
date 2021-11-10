import FPstyles from "./firstpage.module.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Scroll from './scrollbar'
import Card from "./Card.js"
import BloxorzImg from "./Images/Bloxorz.gif"

function Firstpage()
{
  document.querySelector("*").style.cssText = "margin:0;padding:0;font-family: consolas;"
    // const buttonSpans = [1,2,3,4].map(() => <span/>)
    // const buttonLinks = []
    // const Buttons = ["",].map(() => <a href=""></a>)
    return(
    <>
        <img className={FPstyles.imagehead} src={BloxorzImg}/><br/><br/><br/>
    {/* <div id="progressbar"></div>
    <div id="scrollpath"></div> */}
    
        {/* <h2 id ="heading" style= "font-family: 'Trebuchet MS'; color: blue;">Introduction</h2><br/><br/> */}
        {/* <p id="paraheading">Bloxorz is a puzzle game, very challenging. It is a great block awesome game that gets harder at each progressive level. You control a 6-sided two-story block through tiled floors. Flip the block over this way and over that way to get it to fall in the hole.
           How to Play:
           Control the block around the world, use the left, right, up and down arrow keys.</p><br/><br/><br/><br>              */}
        <Router>
      
      <p>
          <Link to = "#" className={FPstyles.buttons}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Play Game
          </Link>
          <Link to = "#" className={FPstyles.buttons}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Leaderboard
          </Link>
          <Link to = "#" className={FPstyles.buttons}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Feedback
          </Link>
          <Link to = "/credits" className={FPstyles.buttons}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Credits
          </Link>
      </p>
      <Routes>
        <Route path = "/" exact element = {<p/>}/>

        <Route path="/credits" element = {<Card/>}/>
      </Routes>

      </Router>
    </>
    
        
    )
}

export default Firstpage;