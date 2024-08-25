import React from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import BankCard from './BankCard';


const BankCardScene = () => {

    return <>
        <Canvas
            camera={{ fov: 90, near: 0.1, far: 1000, position: [10, 5, 10] }}
            style={{ display: 'block', width: '100%', height: '100%' }}
        >
            <ambientLight intensity={0.5} />
  <directionalLight position={[2, 2, 5]} intensity={1} />
  <pointLight position={[10, 10, 10]} intensity={1} />
  <hemisphereLight skyColor={'white'} groundColor={'gray'} intensity={0.5} />
            <BankCard />
        </Canvas>
    </>;
};

export default BankCardScene;