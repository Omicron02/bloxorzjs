import styles from './card.module.css'
import Tilt from 'react-parallax-tilt';
import Scroll from './scrollbar'

function Card()
{
    document.body.style.cssText = "display:flex;justify-content:center;align-items:center;min-height:100vh;background : #1d061a;"
    const cardData =
    [
        { name: "Pranav K R", srn: "247", github: "ProBrother7" },
        { name: "Prajay VK", srn: "245", github: "PrajayVK" },
        { name: "Rahul Samal", srn: "262", github: "Omicron02" }
    ]

    const cardMap = cardData.map(element => 
        <CardData key = {element.name} name = {element.name} srn = {element.srn} github = {element.github}/>)
    return( 
    <>
        <Scroll/>
        <div className={styles.container}>
            {cardMap}
        </div>
    </>
    )
}

function CardData(props)
{
    return(
    <Tilt className={styles.box} gyroscope={true} tiltReverse={true}>
        <span/>
        <div className = {styles.content}>
            <h2>{props.name}</h2>
            <p>
                Name: {props.name}<br/>
                Srn: PES2UG20CS{props.srn}<br/>
                Sec: 'D' 
            </p>
            <a href = {"https://github.com/" + props.github} target = "_blank">Read More</a>
        </div>
    </Tilt>
    )
}

export default Card;