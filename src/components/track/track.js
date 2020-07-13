import React, { Component } from "react";
import * as THREE from "three";
import rb from '../../assets/RBring.png'
import './track.css';

export class track extends Component {
    componentDidMount() {
        var scene = new THREE.Scene();

        var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
        camera.position.z = 6;

        var renderer = new THREE.WebGLRenderer({antialias: true, alpha: true}); // smoother lines
        renderer.setClearColor( 0x000000, 0 );  // set the bg color
        renderer.setSize(window.innerWidth,window.innerHeight); // set screen size

        document.body.appendChild(renderer.domElement);

        // for responsive layout
        window.addEventListener('resize', () => {
            renderer.setSize(window.innerWidth,window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;

            camera.updateProjectionMatrix();
        })

        var texture = new THREE.TextureLoader().load(rb);

        var geometry = new THREE.PlaneGeometry(5, 5);
        var material = new THREE.MeshPhongMaterial({ wireframe: false, map: texture, transparent: true});
        var mesh = new THREE.Mesh(geometry, material);
        mesh.rotateX(-1);
        scene.add(mesh);

        // render the scene
        var render = function() {
            requestAnimationFrame(render);
            mesh.rotateZ(0.01);
            

            renderer.render(scene, camera);
        }

        render();
    }

    render() {
        return (
            <div ref={ref => (this.mount = ref)} />
        )
    }
}

export default track

