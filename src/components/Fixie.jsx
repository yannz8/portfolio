import React from 'react';
import { useGLTF } from '@react-three/drei';

function Fixie(props) {
  const { scene } = useGLTF('/portfolio/fixie/scene.gltf');
  return <primitive object={scene} {...props} />;
}

export default Fixie;