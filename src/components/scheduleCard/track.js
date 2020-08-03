import React, { useRef } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import * as THREE from "three";

function Plane(track) {
    // make a mesh
    const mesh = useRef()
    // rotate plane every frame
    useFrame(() => (mesh.current.rotation.z += 0.01))
    // load texture of track onto mesh
    const texture = new THREE.TextureLoader().load(require(`../../assets/tracks/${track.track}.png`))
    return (
      <mesh
        // position the scene
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
    <Canvas camera={{ fov: 120, position: [0, 0, 3], near: 0.1, far: 5 }} style={{height: 200, width: 200}}>
      <Plane track={country}/>
    </Canvas>
  )
}

