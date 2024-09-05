import React from 'react';
import { useGLTF } from '@react-three/drei';

function Voilier(props) {
  const { scene } = useGLTF('/voilier/scene.gltf');
  return <primitive object={scene} {...props} />;
}

export default Voilier;