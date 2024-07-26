import { OrbitControls } from '@react-three/drei';
import React, {useRef} from 'react'

const Floor = () => {
    return (
        <>
            <ambientLight />
            <pointLight position={[0, 0, 0]} />
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[100, 0, 100, 2, 2 , 2]} />
                <meshStandardMaterial  wireframe color="white" />
                <OrbitControls />
            </mesh>
        </>
    );
};

export default Floor