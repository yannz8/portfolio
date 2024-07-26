import React, { useEffect, useRef, useState} from 'react'
import { useFrame, useThree } from '@react-three/fiber';


const Cube = ({onClick}) => {

  const [hovered, hover] = useState(false)
  const cube = useRef();
  const [cube_X, setCube_X] = useState(0);
  const { camera } = useThree();
  
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])


  useFrame((state, delta) => {
    setCube_X(cube_X + delta);
    cube.current.rotation.x = cube.current.rotation.x += delta;

    const distance = camera.position.length();
    const maxDistance = 200; // Limite maximale de zoom
    const minDistance = 3; // Limite minimale de dézoom

    if (distance < minDistance) {
      camera.position.setLength(minDistance);
    } else if (distance > maxDistance) {
      camera.position.setLength(maxDistance);
    }
  });

  return (
    <>
      <mesh position={[0, 5, 0]}
        ref={cube}
        rotation-z={Math.PI}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
        onClick={onClick}
        >
        <boxGeometry
          attach="geometry"
          args={[1, 1, 1, 4, 4, 5]} />
        <meshBasicMaterial attach="material-0" color="#E37F7A"/>
        <meshBasicMaterial attach="material-1" color="#7AACE3"/>
        <meshBasicMaterial attach="material-2" color="#7AE37F"/>
        <meshBasicMaterial attach="material-3" color="#DD7AE3"/>
        <meshBasicMaterial attach="material-4" color="#E3E27A"/>
        <meshBasicMaterial attach="material-5" color="#7ADEE3"/>
      </mesh>
    </>
  );
};

export default Cube