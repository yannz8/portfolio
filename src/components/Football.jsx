import React from 'react';
import { useGLTF } from '@react-three/drei';

function Football(props) {
  const { scene } = useGLTF('/football/scene.gltf');
  return <primitive object={scene} {...props} />;
}

export default Football;