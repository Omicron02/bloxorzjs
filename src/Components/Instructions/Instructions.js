import instyle from './instructions.module.css'
import instructionbg from './instructionbg.mp4'
import Tilt from 'react-parallax-tilt'
function Instruction(){
    return(
            <div className={instyle.body}>
                <video autoPlay muted loop className={instyle.video}>
                    <source src={instructionbg} type="video/mp4"/>
                </video>
                <Tilt className={instyle.container}>
                    <div className={instyle.card}>
                        <div className={instyle.content}>
                            <h2>INFO</h2>
                            <br/><br/><br/>
                            <h3>Instructions</h3>
                            <br/>
                            <p>Lorem ipsum dolor sit amet, an 
                                his etiam torquatos. Tollit soleat 
                                phaedrum te duo, eum cu recteque 
                                expetendis neglegentur. Cu mentitum 
                                maiestatis persequeris pro, pri 
                                ponderum tractatos ei. Id 
                                qui nemore latine molestiae, 
                                ad mutat oblique delicatissimi pro. </p>
                            <a href="#">Play Game</a>
                        </div>
                    </div>
                </Tilt>
            </div>
        
    )
}
export default Instruction