import fpStyles from "./Firstpage.module.css"
import {Link} from "react-router-dom";
import BloxorzImg from "../../Images/bloxorz.png"


function Firstpage({user})
{
	const buttonContent = [
        { text: "Play Game", link: "game" },
        { text: "Instructions", link: "instruction" },
        { text: "Leaderboard", link: "leaderboard" },
        { text: "Credits", link: "credits" }
	]

	const buttonSpans = [1,2,3,4].map((i) => <span key = {i}/>)

	const buttonLinks = buttonContent.map((item) =>
	    <Link key = {item.text} to = {item.link} className = {fpStyles.buttons}>
	        {buttonSpans}
	        {item.text}
	    </Link>)

	return(
        <div className = {fpStyles.firstpage}>
            {user && <div className={fpStyles.dropdown}>
                <button className={fpStyles.dropbtn}>Profile</button>
                
                <div className={fpStyles.dropmenu}>
                    <p>TheP24</p>
                    <hr/>
                    <a href="#">Logout</a>
                </div>
            </div>}
            <div className = {fpStyles.components}>
            
                    <img className={fpStyles.imagehead} src={BloxorzImg} alt="BloxorzLogo"/>

                    <br/><br/><br/><br/><br/><br/><br/><br/>

                    <p>{buttonLinks}</p>
                </div>
        </div>
	)   
}

export default Firstpage;