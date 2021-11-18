import fpStyles from "./firstpage.module.css"
import {Link} from "react-router-dom";
import Scroll from './scrollbar'
import BloxorzImg from "./Images/Bloxorz.gif"
import firstBG from "./Images/new.jpg"

function Firstpage()
{
    document.body.style = "background-image: url(" + firstBG + "); display:flex; justify-content:center; align-items:center; min-height: 100vh; flex-direction:column; background-size: 100%;"

    const buttonContent = [
      { text: "Play Game", link: "game" },
      { text: "Leaderboard", link: "leaderboard" },
      { text: "Feedback", link: "feedback" },
      { text: "Credits", link: "credits" }
    ]

    const buttonSpans = [1,2,3,4].map(() => <span/>)
    
    const buttonLinks = buttonContent.map((item) =>
       <Link key = {item.text} to = {item.link} className = {fpStyles.buttons}>
         {buttonSpans}
         {item.text}
       </Link>)

    return(
      <>
        <img className={fpStyles.imagehead} src={BloxorzImg}/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <p>
          {buttonLinks}
        </p>
      </>
    )
}

export default Firstpage;