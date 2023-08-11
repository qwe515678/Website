"use client"
"use client"

import * as THREE from 'three';
import React, { useRef, useEffect } from 'react';


export default function Cube() {

  const canvasRef = useRef(null);

  useEffect(() => {

    const canvas = canvasRef.current;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({canvas});
    renderer.setSize(canvas.width, canvas.height);
    
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const materials =  [
        new THREE.MeshLambertMaterial({color: 0xff0000}), // красный
        new THREE.MeshLambertMaterial({color: 0x00ff00}), // зеленый
        new THREE.MeshLambertMaterial({color: 0x0000ff}), // синий
        new THREE.MeshLambertMaterial({color: 0xffff00}), // желтый
        new THREE.MeshLambertMaterial({color: 0xff00ff}), // фиолетовый
        new THREE.MeshLambertMaterial({color: 0x00ffff})  // голубой
      ]
    const ambientLight = new THREE.AmbientLight(0xffffff)
    scene.add(ambientLight)
      
    const cube = new THREE.Mesh( geometry, materials );
    scene.add( cube );

    camera.position.z = 1.5;

    function animate() {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);  
    }

    animate();

  }, []);

  return <canvas ref={canvasRef} width={300} height={300}/>;

}