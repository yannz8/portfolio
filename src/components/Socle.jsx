import { OrbitControls } from '@react-three/drei';
import React, {useRef} from 'react'



const Socle = () => {

    return (
        <>
            <ambientLight />
            <pointLight position={[0, 0, 0]} />
            <mesh position={[130, 6, -20]}>
                <boxGeometry args={[2, 4, 2, 2, 2 , 2]} />
                <meshStandardMaterial  color="red" />
                <OrbitControls />
            </mesh>
        </>
    );
};

export default Socle