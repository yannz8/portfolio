import React from 'react';
import { useGLTF } from '@react-three/drei';

function PC(props) {
  const { scene } = useGLTF('/portfolio/pc/scene.gltf');
  return <primitive object={scene} {...props} />;
}

export default PC;