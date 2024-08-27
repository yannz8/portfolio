import React from 'react';
import { useGLTF } from '@react-three/drei';

function HarryPotter(props) {
  const { scene } = useGLTF('/portfolio/harry_potter/scene.gltf');
  return <primitive object={scene} {...props} />;
}

export default HarryPotter;