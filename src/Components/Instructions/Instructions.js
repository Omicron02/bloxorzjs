import instyle from './instructions.module.css'
import instructionbg from './instructionbg.mp4'
import Tilt from 'react-parallax-tilt'
import {Link} from "react-router-dom"
function Instruction(){
    return(
            <div className={instyle.body}>
                <video autoPlay muted loop className={instyle.video}>
                    <source src={instructionbg} type="video/mp4"/>
                </video>
                <Tilt className={instyle.container}>
                    <div className={instyle.card}>
                        <div className={instyle.content}>
                            <h2></h2>
                            <br/><br/><br/><br/><br/>
                            <h3>Instructions</h3>
                            <br/>
                            <p>Use the W, A, S, D keys to move the block accordingly.
                               The aim of the game is to make the block pass through the gap on the floor
                               Score is calculated based on the number of moves you take to finish the level.
                               Going outside the boundaries will result in an instant loss.
                            </p>
                            <Link to = "/game" className = {instyle.gameLink}>Play Game</Link>
                        </div>
                    </div>
                </Tilt>
            </div>
        
    )
}
export default Instruction