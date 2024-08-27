import React from 'react';
import { useGLTF } from '@react-three/drei';

function CD(props) {
  const { scene } = useGLTF('/portfolio/cd/scene.gltf');
  return <primitive object={scene} {...props} />;
}

export default CD;