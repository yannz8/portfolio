import React from 'react';
import { useGLTF } from '@react-three/drei';

function Mate(props) {
  const { scene } = useGLTF('/portfolio/mate/scene.gltf');
  return <primitive object={scene} {...props} />;
}

export default Mate;