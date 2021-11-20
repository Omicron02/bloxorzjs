// import * as THREE from 'three'
import React, {useState, useEffect} from 'react'
import {Canvas} from "react-three-fiber"
import gameStyles from "./game.module.css"
// import {OrbitControls} from "@react-three/drei"
function Block()
{
    return(
    <mesh position={[0, 0, 0]} rotation={[0, 0, 0]} castShadow>
        <boxBufferGeometry attach="geometry" args = {[1,2,1]}/>
        <meshStandardMaterial
          attach="material"
          color="red"
          roughness={0.1}
          metalness={0.1}
        />
      </mesh>
    )
}

function GroundPlane() {
    return (
      <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -1, 0]}>
        <planeBufferGeometry attach="geometry" args={[500, 500]} />
        <meshStandardMaterial attach="material" color="white" />
      </mesh>
    );
  }
  function BackDrop() {
    return (
      <mesh receiveShadow position={[0, -1, -5]}>
        <planeBufferGeometry attach="geometry" args={[500, 500]} />
        <meshStandardMaterial attach="material" color="white" />
      </mesh>
    );
  }
  function Sphere() {
    return (
      <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <sphereGeometry attach="geometry" args={[1, 16, 16]} />
        <meshStandardMaterial
          attach="material"
          color="white"
          transparent
          roughness={0.1}
          metalness={0.1}
        />
      </mesh>
    );
  }
  
  // Lights
  function KeyLight({ brightness, color }) {
    return (
      <rectAreaLight
        width={3}
        height={3}
        color={color}
        intensity={brightness}
        position={[-2, 0, 5]}
        lookAt={[0, 0, 0]}
        penumbra={1}
        castShadow
      />
    );
  }
  function FillLight({ brightness, color }) {
    return (
      <rectAreaLight
        width={3}
        height={3}
        intensity={brightness}
        color={color}
        position={[2, 1, 4]}
        lookAt={[0, 0, 0]}
        penumbra={2}
        castShadow
      />
    );
  }
  
  function RimLight({ brightness, color }) {
    return (
      <rectAreaLight
        width={2}
        height={2}
        intensity={brightness}
        color={color}
        position={[1, 4, -2]}
        rotation={[0, 180, 0]}
        castShadow
      />
    );}

function Game() 
{ 
    return(
        <div className = {gameStyles.gameScreen}>
            <Canvas camera = {{position: [3, 3, 5]}}>
            <GroundPlane />
          <BackDrop />
          {/* <ambientLight intensity = {0.1}/> */}
          {/* <spotLight penumbra = {1}/> */}
          <spotLight position = {[2, 1, 0]} lookAt = {[0,0,0]} intensity = {0.5} penumbra = {1}/>
          {/* <KeyLight brightness={5.6} color={"#ffc9f9"} /> */}
          {/* <FillLight brightness={2.6} color={"#bdefff"} /> */}
          {/* <RimLight brightness={54} color={"#fff"} /> */}
          <Block />
            </Canvas>
        </div>
    )

}

export default Game;