import {useEffect, useState} from "react"
import {useChain} from "@react-spring/three"
import {useFrame} from "@react-three/fiber"
const keys = { KeyW: "forward", KeyS: "backward", KeyA: "left", KeyD: "right"}

const moveFieldByKey = key => keys[key]

function IfKeyPressed(ref)
{
    const [movement, setMovement] = useState({ forward: false, backward: false, left: false, right: false})

    const handleKeyDown = event => setMovement(move => ({ ...move, [moveFieldByKey(event.code)]: true }))
    const handleKeyUp = event => setMovement(move => ({ ...move, [moveFieldByKey(event.code)]: false }))

        useEffect(() => {    
        document.addEventListener("keydown", handleKeyDown)
        document.addEventListener("keyup", handleKeyUp)
        return () => {
        document.removeEventListener("keydown", handleKeyDown)
        document.removeEventListener("keyup", handleKeyUp)
        }
    }, [])

  return movement
}
function MovementValues(orient, movement)
{
    if (movement.right)
    {
        if (orient === "|")
        {
    
            return []
        }
    }
}
function BlockMovement(ref, api)
{
    var movement = IfKeyPressed()

    if (movement.right &&  Math.round(ref.current.rotation.z*180/Math.PI) % 90 === 0)
    {
        
        api.start({
            config: {duration: 100},
            pos: [ref.current.position.x+5, ref.current.position.y+1.18, ref.current.position.z],
            rotate: [0, 0, ref.current.rotation.z-Math.atan2(1,2)]})

        setTimeout(() => api.start(
            {config:{duration: 200},
            // onRest: () => {console.log(Math.round(ref.current.rotation.z*2/Math.PI)*Math.PI/2)},
            pos: [ref.current.position.x+10, ref.current.position.y-6.18, ref.current.position.z],
            rotate: [0, 0, ref.current.rotation.z-Math.PI/2+Math.atan2(1,2)]
        }), 100)

        setTimeout(()=>
        {
            ref.current.position.x = Math.round(ref.current.position.x)
            ref.current.position.y = Math.round(ref.current.position.y)
            ref.current.rotation.z = Math.round(ref.current.rotation.z*2/Math.PI)*Math.PI/2
            console.log(ref.current.rotation.z, ref.current.rotation.z*180/Math.PI)
        }, 299)
        
            
    }

}

export default BlockMovement