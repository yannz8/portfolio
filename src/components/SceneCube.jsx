import { Canvas } from '@react-three/fiber';
import Cube from './Cube';
import Socle from './Socle';
import Floor from './Floor';
import Moon from './Moon';
import PC from './PC';
import "./SceneCube.css"

import { OrbitControls, Stars, Sky} from "@react-three/drei";

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
        <Sky
          distance={450000} // Distance of the sky
          sunPosition={[50, 5, -100]} // Position of the sun [x, y, z]
          inclination={0.5} // Sun inclination (0-1)
          azimuth={0.25} // Sun azimuth (0-1)
          turbidity={10} // Higher turbidity for a darker sky
          rayleigh={0.8} // Lower rayleigh for less blue light scattering
          mieCoefficient={0.02} // Slightly increased mie scattering for a hazier look
          mieDirectionalG={0.8} // Increase to make the haze more pronounced
        />
        <Stars
          radius={250}
          depth={50}
          count={5000}
          factor={4}
          saturation={0.3}
          fade={true}
        />
        <PC scale={[1, 1, 1]} position={[0, 0, 0]} />
        <Cube onClick={onCubeClick} />
        <Floor />
        <Socle />
      </Canvas>
    </div>
  );
}

export default SceneCube;