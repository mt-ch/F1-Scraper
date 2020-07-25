import React, { Component, useRef, useState, useMemo } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import rb from '../../assets/tracks/RBring.png'
import * as THREE from "three";

function Box(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => (mesh.current.rotation.z += 0.01))
    const texture = useMemo(() => new THREE.TextureLoader().load(rb))
    return (
      <mesh
        {...props}
        ref={mesh}>
        <planeBufferGeometry attach="geometry" args={[4, 4]} />
        <meshPhongMaterial attach="material" map = {texture} />
      </mesh>
    )
  }

export class track extends Component {
    render() {
        return (
            <Canvas camera={{ fov: 60, position: [0, 0, 5] }} colorManagement style={{height:100,width: 150}}>
                <Box position={[0, 0, 0]} rotation={[-1, 0, 0]}/>
            </Canvas>
        )
    }
}

export default track