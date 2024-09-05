import React from 'react';
import { useGLTF } from '@react-three/drei';

function Mate(props) {
  const { scene } = useGLTF('/mate/scene.gltf');
  return <primitive object={scene} {...props} />;
}

export default Mate;