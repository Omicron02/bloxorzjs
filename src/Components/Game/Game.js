import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import {useSpringRef} from "@react-spring/web"
import React, {useState, useEffect, useRef} from 'react'
import {Canvas, useFrame, useThree, extend} from "@react-three/fiber"
import gameStyles from "./Game.module.css"
import {animated, useSpring} from "@react-spring/three"
import {Physics, useBox} from "@react-three/cannon"
// import {Skybox2, Skybox3} from "./imageLoader.js"

import BlockMovement from "./Movement.js"
import Levels from "./levels.js"

extend({OrbitControls})

function Controls(props) 
{
    const orbitRef = useRef()
    const {camera, gl} = useThree()
    useFrame( () => { orbitRef.current.update() })

    return (
        <orbitControls
            enableDamping
            enablePan = {false}
            minAzimuthAngle = {-Math.PI/6}
            maxAzimuthAngle = {Math.PI/6}
            minPolarAngle = {Math.PI/6}
            maxPolarAngle = {4*Math.PI/9}
            minDistance = {70}
            maxDistance = {90}
            ref = {orbitRef}
            args = {[camera, gl.domElement]}
            target = {props.target}
        />
    )
}

// function SkyBox()
// {
//     const {scene} = useThree();
//     const loader = new THREE.CubeTextureLoader();
//     const texture = loader.load(Skybox2);
//     scene.background = texture;
//     return null
// }

function Tile(props)
{
    const tileRef = useRef()
    return(
        <animated.mesh ref = {tileRef} 
            visible 
            position = {props.position}
            rotation = {[0, 0, 0]}
            castShadow 
            receiveShadow 
            penumbra = {1}
        >
            <boxBufferGeometry attach="geometry" args = {[10, 1, 10]}/>
            <animated.meshStandardMaterial
                attach="material"
                color="grey"
                roughness={0.1}
                metalness={0.1}
            />
        </animated.mesh>
    )
}

function Block(props)
{
    const blockRef = useRef()
    var [blockProps, blockPosApi] = useSpring(() => 
    ({
        pos: [props.position[1]*10, 10, props.position[0]*10],
        rotate: [0, 0, 0],
        orient: "."
    }))
    BlockMovement(blockRef, blockPosApi)

    return(<animated.mesh 
        ref = {blockRef} 
        visible 
        position = {blockProps.pos}
        rotation = {blockProps.rotate}
        orient = {blockProps.orient}
        castShadow 
        receiveShadow 
        penumbra = {1} 
    >
        <boxBufferGeometry attach="geometry" args = {[10, 20, 10]}/>
        <meshStandardMaterial
            attach = "material"
            color = "red"
            roughness = {0.1}
            metalness = {0.5}
        />
    </animated.mesh>)
}
  
function Game() 
{ 

    const [grid, P] = Levels(1)
    const cameraCentre = new THREE.Vector3(grid[0].length*5, 0, grid.length*5)

    const TileGrid = () => grid.map((row, i) =>
    {
        const Row = () => row.map((col, j) =>
        {
            if (col.slice(-1) === "1") return <Tile key = {(i, j)} position = {[10*j, 0, 10*i]}/>
            else return null
        })
        return <Row key = {i}/>
    })

    return(
        <div className = {gameStyles.gameScreen}>
            <Canvas camera = {{
                position: [60,70, 100], 
                near: 0.1, 
                far: 1000,
                fov: 90
                }} 
                onCreated = {({gl, camera}) => {
                gl.shadowMap.enabled = true
                gl.shadowMap.type = THREE.PCFSoftShadowMap
            }}>

                <Controls target = {cameraCentre}/>

                {/* <SkyBox/> */}

                {/* <fog attach="fog"/> */}
                <ambientLight intensity = {0.2}/>
                {/* <spotLight penumbra = {1}/> */}
                <spotLight 
                    position = {[100, 100, 100]} 
                    lookAt = {[20,0,20]} 
                    intensity = {1} 
                    penumbra = {1} 
                    castShadow 
                    shadow-mapSize-height={2048}
                    shadow-mapSize-width={2048}
                />
                <Physics gravity = {[0,-100,0]} size = {100} friction = {100}>
                <TileGrid/>
                
                <Block position = {P}/>
                </Physics>
            </Canvas>
        </div>
    )
}

export default Game;