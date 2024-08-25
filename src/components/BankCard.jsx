import React from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

const BankCard = () => {
    const { scene } = useGLTF('/portfolio/files/scene.gltf');

    scene.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            roughness: 0.5,
            metalness: 0.5,
          });
        }
      });
      

    return <primitive object={scene} scale={[2, 2, 2]} />;
};

export default BankCard;