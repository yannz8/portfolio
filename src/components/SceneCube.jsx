import { Canvas } from '@react-three/fiber';
import Cube from './Cube';
import Socle from './Socle';
import Floor from './Floor';
import "./SceneCube.css"

import { OrbitControls, Stars } from "@react-three/drei";

import * as THREE from "three";

const SceneCube = ({ onCubeClick }) => {

  let camera = new THREE.PerspectiveCamera(90, 1.5, 0.1, 1000);

  return (
    <div className='SceneCube'>
      <Canvas
        camera={{ fov: 90, near: 0.1, far: 1000, position: [0, 5, 10] }}
        style={{ display: 'block', width: '100%', height: '100%' }}
      >
        <OrbitControls />
        <Stars />
        <Cube onClick={onCubeClick} />
        <Floor />
        <Socle />
      </Canvas>
    </div>
  );
}

export default SceneCube;