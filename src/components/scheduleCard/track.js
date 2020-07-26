import React, { Component, useRef, useMemo } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import * as THREE from "three";

function Box(track) {
    // This reference will give us direct access to the mesh
    console.log(track)
    const mesh = useRef()
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => (mesh.current.rotation.z += 0.01))
    const texture = useMemo(() => new THREE.TextureLoader().load(require(`../../assets/tracks/${track.track}.png`)))
    return (
      <mesh
        position={[0, 0, 0]} 
        rotation={[-1, 0, 0]}
        ref={mesh}>
        <planeBufferGeometry attach="geometry" args={[4, 4]} />
        <meshPhongMaterial attach="material" map = {texture} />
      </mesh>
    )
  }

export default function track({country}) {
   
        return (
            <Canvas camera={{ fov: 100, position: [0, 0, 4] }} style={{height:100,width: 200}}>
                    <Box track={country}/>
                </Canvas>
        )
    
}

