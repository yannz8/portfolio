import { Canvas } from '@react-three/fiber';

import { useState } from "react";

import Cube from './Cube';
import Socle from './Socle';
import Floor from './Floor';
import PC from './PC';

import Mate from './Mate';
import Book from './Book';
import HarryPotter from './HarryPotter';
import CD from './CD';
import Bureau from './Bureau';
import Fixie from './Fixie';
import Voilier from './Voilier';
import Football from './Football';

import "./SceneCube.css"

import { OrbitControls, Stars, Sky } from "@react-three/drei";

import * as THREE from "three";

const SceneCube = () => {

  let camera = new THREE.PerspectiveCamera(90, 1.5, 0.1, 1000);

  const [hoveredObject, setHoveredObject] = useState(null);

  const handlePointerOver = (objectName) => {
    setHoveredObject(objectName);
  };

  const handlePointerOut = () => {
    setHoveredObject(null);
  }

  return (
    <div className='SceneCube'>
      <Canvas
        camera={{ fov: 90, near: 0.1, far: 1000, position: [100, 150, 150] }}
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
        <Cube />
        <Socle/>
        <Bureau scale={[100, 100, 100]} position={[0, 0, 0]} />
        <PC scale={[.25, .25, .25]} position={[80, 84, -25]}
          onPointerOver={() => handlePointerOver('Backend devlopper')}
          onPointerOut={handlePointerOut} />
        <Book scale={[.05, .05, .05]} position={[30, 87, -25]}
          onPointerOver={() => handlePointerOver('Martin Eden - Jack LONDON')}
          onPointerOut={handlePointerOut} />
        <Mate scale={[10, 10, 10]} position={[10, 94, -55]}
          onPointerOver={() => handlePointerOver('Mate from Argentina')}
          onPointerOut={handlePointerOut} />
        <HarryPotter scale={[60, 60, 60]} position={[10, 84, -30]}
          onPointerOver={() => handlePointerOver('Harry Potter')}
          onPointerOut={handlePointerOut} />
        <Voilier scale={[.8, .8, .8]} position={[40, 86, -55]}
          onPointerOver={() => handlePointerOver('Sailing in Brittany')}
          onPointerOut={handlePointerOut} />
        <CD scale={[3, 3, 3]} position={[105, 85, -25]}
          onPointerOver={() => handlePointerOver('Cyborg - Nekfeu')}
          onPointerOut={handlePointerOut} />


        <Fixie scale={[100, 100, 100]} position={[-10, 0, -25]}
          onPointerOver={() => handlePointerOver('Built a bike')}
          onPointerOut={handlePointerOut} />
        <Football scale={[13, 13, 13]} position={[100, 10, -25]}
          onPointerOver={() => handlePointerOver('Played footbal from my 8 to 22 years old')}
          onPointerOut={handlePointerOut} />

      </Canvas>

      {hoveredObject && (
        <div
          style={{
            position: 'absolute',
            top: 10,
            left: 10,
            color: 'white',
            fontSize: '1.2em',
            backgroundColor: 'rgba(50, 50, 50, 0.3)',
            padding: '1em 2em',
            borderRadius: '5px',
            zIndex: 1000, // Ensure it's on top of other elements
          }}
        >
          {hoveredObject}
        </div>
      )}
    </div>
  );
}

export default SceneCube;