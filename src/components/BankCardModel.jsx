import React from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

const BankCardModel = () => {
  const width = 22;
  const height = 14;
  const depth = 2;
  return (
    <>
    <Canvas
        camera={{ fov: 90, near: 0.1, far: 1000, position: [0, 5, 10] }}
        style={{ display: 'block', width: '100%', height: '100%' }}
      >
    <ambientLight />
    <pointLight position={[0, 0, 0]} />
    <mesh>
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial color="green" />
    </mesh>
    </Canvas>
    </>
  );
};

export default BankCardModel;