import { OrbitControls } from '@react-three/drei';
import React, {useRef} from 'react'



const Socle = () => {

    return (
        <>
            <ambientLight />
            <pointLight position={[0, 0, 0]} />
            <mesh position={[0, 2, 0]}>
                <boxGeometry args={[2, 4, 2, 2, 2 , 2]} />
                <meshStandardMaterial  color="#F41E1A" />
                <OrbitControls />
            </mesh>
        </>
    );
};

export default Socle