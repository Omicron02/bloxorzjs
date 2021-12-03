import {useEffect, useState} from "react"
import {useChain} from "@react-spring/three"
import {useFrame} from "@react-three/fiber"
const keys = { KeyW: "up", KeyS: "down", KeyA: "left", KeyD: "right"}

const moveFieldByKey = key => keys[key]

function IfKeyPressed(ref)
{
    const [movement, setMovement] = useState({ up: false, down: false, left: false, right: false})

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
        if (orient === ".")
        {
            var dur1 = 100
            var pos1_1 = 5
            var posy_1 = Math.sqrt(10*10+5*5)-10
            var rot1_1 = -Math.atan2(1,2)
            var dur2 = 200
            var pos1_2 = 10
            var posy2 = - posy1 - 5
            var rot1_2 = -Math.PI/2 - rot1_1
            if (movement.left || movement.up)
            {

            }
            orient = "_"
        }

        else if (orient === "_")
        {
            var dur1 = 200
            var pos1_1 = 10
            var posy1 = Math.sqrt(10*10+5*5)-5
            var rot1_1 = -Math.PI/2 + Math.atan2(1,2)
            var dur2 = 100
            var pos1_2 = 5
            var posy2 = -posy1 + 5
            var rot1_2 = -rot1_1-Math.PI/2
            orient = "."
        }

        else if (orient === "|")
        {
            var dur1 = 150
            var pos1_1 = 5
            var posy1 = 5*Math.sqrt(2)-5
            var rot1_1 = -Math.PI/4
            var dur2 = 150
            var pos1_2 = 5
            var posy2 = -posy1
            var rot1_2 = -Math.PI/4
            orient = "."
        }
        return movement.left?
        [dur1, -posx1, posy1, -rotz1, dur2, -posx2, posy2, -rotz2, orient]:
        [dur1, posx1, posy1, rotz1, dur2, posx2, posy2, rotz2, orient]

}
function BlockMovement(ref, api)
{
    var movement = IfKeyPressed()

    if ((movement.right || movement.left) && Math.round(ref.current.rotation.z*180/Math.PI) % 90 === 0)
    {
        const [dur1, posx1, posy1, rotz1, dur2, posx2, posy2, rotz2, orient] = MovementValues(ref.current.orient, movement)
        api.start({
            config: {duration: dur1},
            pos: [ref.current.position.x+posx1, ref.current.position.y+posy1, ref.current.position.z],
            rotate: [0, 0, ref.current.rotation.z+rotz1]})

        setTimeout(() => api.start(
            {config:{duration: dur2},
            // onRest: () => {console.log(Math.round(ref.current.rotation.z*2/Math.PI)*Math.PI/2)},
            pos: [ref.current.position.x+posx2, ref.current.position.y+posy2, ref.current.position.z],
            rotate: [0, 0, ref.current.rotation.z+rotz2],
            orient: orient
        }), dur1)

        setTimeout(()=>
        {
            ref.current.position.x = Math.round(ref.current.position.x)
            ref.current.position.y = Math.round(ref.current.position.y)
            ref.current.rotation.z = Math.round(ref.current.rotation.z*2/Math.PI)*Math.PI/2
            // console.log(ref.current.rotation.z, ref.current.rotation.z*180/Math.PI)
        }, dur1+dur2-1)
    }

    else if ((movement.up || movement.down) && Math.round(ref.current.rotation.z*180/Math.PI) % 90 === 0)
    {
        const [dur1, posz1, posy1, rotx1, dur2, posz2, posy2, rotx2, orient] = MovementValues(ref.current.orient, movement)
        api.start({
            config: {duration: dur1},
            pos: [ref.current.position.x, ref.current.position.y+posy1, ref.current.position.z+posz1],
            rotate: [0, 0, ref.current.rotation.x+rotx1]})

        setTimeout(() => api.start(
            {config:{duration: dur2},
            // onRest: () => {console.log(Math.round(ref.current.rotation.z*2/Math.PI)*Math.PI/2)},
            pos: [ref.current.position.x, ref.current.position.y+posy2, ref.current.position.z+posz2],
            rotate: [0, 0, ref.current.rotation.x+rotx2],
            orient: orient
        }), dur1)

        setTimeout(()=>
        {
            ref.current.position.z = Math.round(ref.current.position.z)
            ref.current.position.y = Math.round(ref.current.position.y)
            ref.current.rotation.x = Math.round(ref.current.rotation.x*2/Math.PI)*Math.PI/2
            // console.log(ref.current.rotation.z, ref.current.rotation.z*180/Math.PI)
        }, dur1+dur2-1)
    }
}

export default BlockMovement