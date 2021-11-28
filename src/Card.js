import cardStyles from './card.module.css'
import Tilt from 'react-parallax-tilt';
// import Scroll from './scrollbar'

function Card()
{
    const cardData =
    [
        { name: "Pranav K R", srn: "247", github: "ProBrother7" },
        { name: "Prajay V K", srn: "245", github: "PrajayVK" },
        { name: "Rahul Samal", srn: "262", github: "Omicron02" }
    ]

    const cardMap = cardData.map(element => 
        <CardData key = {element.name} name = {element.name} srn = {element.srn} github = {element.github}/>)
    return( 
    <>
        
        <div className={cardStyles.container}>
            {cardMap}
        </div>
    </>
    )
}

function CardData(props)
{
    return(
    <Tilt className={cardStyles.box} gyroscope={true} tiltReverse={true}>
        <span/>
        <div className = {cardStyles.content}>
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