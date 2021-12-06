import {useEffect, useState} from "react"
import {useChain} from "@react-spring/three"
import {useFrame} from "@react-three/fiber"
import * as THREE from "three"
import { Vector3 } from "three"
import Levels from "./levels"
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

function DropTest(orient, ref, grid, api)
{
    if (orient === ".")
    {
        if (Math.round(ref.current.position.x/10) < 0 || Math.round(ref.current.position.x/10) >= grid[0].length || Math.round(ref.current.position.z/10) < 0 || Math.round(ref.current.position.z/10) >=grid.length || grid[Math.round(ref.current.position.z/10)][Math.round(ref.current.position.x/10)] === "0")
        {
            api.start({pos: [ref.current.position.x, 
                ref.current.position.y-50,
                ref.current.position.z],
        //  rotate: [0, 0, 0],
        config: {duration: 3000}})
        }
    }

    else if (orient === "|")
    {
        var p1 = [Math.round(ref.current.position.x/10), Math.round((ref.current.position.z-5)/10)]
        var p2 = [Math.round(ref.current.position.x/10), Math.round((ref.current.position.z+5)/10)]
        console.log(p1, p2)
        if (p1[0] < 0 || p1[0] >=grid[0].length || p1[1] < 0 || p2[1] > grid.length || grid[p1[1]][p1[0]] === "0" || grid[p2[1]][p2[0]] === "0")
        {
            api.start({pos: [ref.current.position.x, 
                ref.current.position.y-50,
                ref.current.position.z],
        //  rotate: [0, 0, 0],
        config: {duration: 3000}})
        }
    }

    else if (orient === "_")
    {
        var p1 = [Math.round((ref.current.position.x-5)/10), Math.round(ref.current.position.z/10)]
        var p2 = [Math.round((ref.current.position.x+5)/10), Math.round(ref.current.position.z/10)]
        console.log(p1, p2)
        if (p1[2] < 0 || p1[1] >=grid.length || p1[0] < 0 || p2[0] > grid.length || grid[p1[1]][p1[0]] === "0" || grid[p2[1]][p2[0]] === "0")
        {
            api.start({pos: [ref.current.position.x, 
                ref.current.position.y-50,
                ref.current.position.z],
        //  rotate: [0, 0, 0],
        config: {duration: 3000}})
        }

    }
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
            var posy_2 = - posy_1 - 5
            var rot1_2 = -Math.PI/2 - rot1_1
            if (movement.left || movement.right)
                orient = "_"
            else if (movement.up || movement.down)
                orient = "|"
        }

        else if (orient === "_")
        {
            if (movement.left || movement.right)
            {
                var dur1 = 200
                var pos1_1 = 10
                var posy_1 = Math.sqrt(10*10+5*5)-5
                var rot1_1 = -Math.PI/2 + Math.atan2(1,2)
                var dur2 = 100
                var pos1_2 = 5
                var posy_2 = -posy_1 + 5
                var rot1_2 = -rot1_1-Math.PI/2
                orient = "."
            }

            else if (movement.up || movement.down)
            {
                var dur1 = 150
                var pos1_1 = 5
                var posy_1 = 5*Math.sqrt(2)-5
                var rot1_1 = -Math.PI/4
                var dur2 = 150
                var pos1_2 = pos1_1
                var posy_2 = -posy_1
                var rot1_2 = rot1_1
                orient = "_"
            }
            
        }

        else if (orient === "|")
        {
            if (movement.right || movement.left)
            {
                var dur1 = 150
                var pos1_1 = 5
                var posy_1 = 5*Math.sqrt(2)-5
                var rot1_1 = -Math.PI/4
                var dur2 = 150
                var pos1_2 = pos1_1
                var posy_2 = -posy_1
                var rot1_2 = rot1_1
                orient = "|"
            }

            else if (movement.up || movement.down)
            {
                var dur1 = 200
                var pos1_1 = 10
                var posy_1 = Math.sqrt(10*10+5*5)-5
                var rot1_1 = -Math.PI/2 + Math.atan2(1,2)
                var dur2 = 100
                var pos1_2 = 5
                var posy_2 = -posy_1 + 5
                var rot1_2 = -rot1_1-Math.PI/2
                orient = "."
            }
        }

        if (movement.left || movement.up)
        {
            pos1_1 = -pos1_1
            rot1_1 = -rot1_1
            pos1_2 = -pos1_2
            rot1_2 = -rot1_2
        }
        return [dur1, pos1_1, posy_1, rot1_1, dur2, pos1_2, posy_2, rot1_2, orient]
}
function BlockMovement(ref, api, dims, grid)
{
    var movement = IfKeyPressed()
    if ((movement.right || movement.left) && ref.current.rotation.z === 0 && ref.current.rotation.x ===0)
    {

        const [dur1, posx1, posy1, rotz1, dur2, posx2, posy2, rotz2, orient] = MovementValues(ref.current.orient, movement)
        api.start({
            config: {duration: dur1},
            pos: [ref.current.position.x+posx1, ref.current.position.y+posy1, ref.current.position.z],
            rotate: [ref.current.rotation.x, ref.current.rotation.y, ref.current.rotation.z+rotz1]})

        setTimeout(() => api.start(
            {config:{duration: dur2},
            // onRest: () => {console.log(Math.round(ref.current.rotation.z*2/Math.PI)*Math.PI/2)},
            pos: [ref.current.position.x+posx2, ref.current.position.y+posy2, ref.current.position.z],
            rotate: [ref.current.rotation.x, ref.current.rotation.y, ref.current.rotation.z+rotz2],
            orient: orient
        }), dur1)

        setTimeout(()=>
        {
            api.start({pos: [Math.round(ref.current.position.x/5)*5, 
                            Math.round(ref.current.position.y/5)*5,
                            ref.current.position.z],
                     rotate: [0, 0, 0],
                    config: {duration: 0},
                onRest: () => DropTest(ref.current.orient, ref, grid, api)})
            dims(ref.current.orient==="|"?[10, 10, 20]:ref.current.orient==="."?[10, 20, 10]:[20, 10, 10])
            
            
        }, dur1+dur2-1)
    }

    else if ((movement.up || movement.down) && ref.current.rotation.x === 0 && ref.current.rotation.z === 0)
    {
        const [dur1, posz1, posy1, rotx1, dur2, posz2, posy2, rotx2, orient] = MovementValues(ref.current.orient, movement)
        api.start({
            config: {duration: dur1},
            pos: [ref.current.position.x, ref.current.position.y+posy1, ref.current.position.z+posz1],
            rotate: [ref.current.rotation.x - rotx1, ref.current.rotation.y, ref.current.rotation.z]})

        setTimeout(() => api.start(
            {config:{duration: dur2},
            pos: [ref.current.position.x, ref.current.position.y+posy2, ref.current.position.z+posz2],
            rotate: [ref.current.rotation.x - rotx2, ref.current.rotation.y, ref.current.rotation.z],
            orient: orient
        }), dur1)

        setTimeout(()=>
        {
            
            api.start({pos: [Math.round(ref.current.position.x/5)*5, 
                Math.round(ref.current.position.y/5)*5,
                ref.current.position.z],
                rotate: [0, 0, 0],
        config: {duration: 0},
    onRest: ()=> DropTest(ref.current.orient, ref, grid, api)})
        // console.log(ref.current.position)
            dims(ref.current.orient==="|"?[10, 10, 20]:ref.current.orient==="."?[10, 20, 10]:[20, 10, 10])
            
        }, dur1+dur2-1)
    }
}

export default BlockMovement