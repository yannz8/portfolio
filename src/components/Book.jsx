import React from 'react';
import { useGLTF } from '@react-three/drei';

function Book(props) {
  const { scene } = useGLTF('/book/scene.gltf');
  return <primitive object={scene} {...props} />;
}

export default Book;