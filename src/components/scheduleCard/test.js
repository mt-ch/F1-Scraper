import React, { Component, useRef, useState, useMemo } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import rb from '../../assets/RBring.png'
import * as THREE from "three";

function Box(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
  
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
  
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

export class test extends Component {

    
    render() {
        return (
            <Canvas colorManagement>
                {/* <ambientLight />
                <pointLight position={[10, 10, 10]} /> */}
                <Box position={[0, 0, 0]} rotation={[-1, 0, 0]}/>

            </Canvas>
        )
    }
}

export default test
