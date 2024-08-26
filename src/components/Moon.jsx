import React, { useRef } from "react";
import {Sphere} from "@react-three/drei";
import * as THREE from "three";
import img from '../images/moon_texture.jpg';


// Moon Component
function Moon() {
  return (
    <Sphere args={[10, 10, 10]} position={[-200, 200, -50]}>
      <meshStandardMaterial
        map={new THREE.TextureLoader().load(img)}
      />
    </Sphere>
  );
}

export default Moon;