import React from 'react';
import { useGLTF } from '@react-three/drei';

function Bureau(props) {
  const { scene } = useGLTF('/bureau/scene.gltf');
  return <primitive object={scene} {...props} />;
}

export default Bureau;