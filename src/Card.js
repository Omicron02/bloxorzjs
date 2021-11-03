import styles from './card.module.css'
import Tilt from 'react-parallax-tilt';

import Scroll from './scrollbar'
function Card(){
return( 
<>
<Scroll/>
<div className={styles.container} >
<Tilt className={styles.box}  gyroscope={true} tiltReverse={true}>
<div  >
    <span></span>
    <div className = {styles.content}>
        <h2>Pranav K R</h2>
        <p>Name: Pranav K R<br/>
            Srn: PES2UG20CS247<br/>
            Sec: 'D' </p>
        <a href="https://github.com/ProBrother7">Read More</a>
    </div>
</div>
</Tilt>
<Tilt className={styles.box}  gyroscope={true} tiltReverse={true}>
<div  >
    <span></span>
    <div className = {styles.content}>
        <h2>Prajay V K</h2>
        <p>Name: Prajay V K<br/>
            Srn: PES2UG20CS245<br/>
            Sec: 'D' </p>
        <a href="https://github.com/PrajayVK">Read More</a>
    </div>
</div>
</Tilt>
<Tilt className = {styles.box}  gyroscope={true} tiltReverse={true}>
<div  >
    <span></span>
    <div className = {styles.content}>
        <h2>Rahul Samal</h2>
        <p>Name: Rahul Samal<br/>
           Srn: PES2UG20CS262<br/>
           Sec: 'D'
            </p>
        <a href="https://github.com/Omicron02">Read More</a>
    </div>
</div>
</Tilt>
</div>

</>
);}
export default Card;