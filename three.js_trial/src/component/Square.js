import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Square() {
	return (
		<>
			<Canvas>
				<OrbitControls autoRotate={true} />
				<mesh>
					<boxGeometry args={[1, 1, 1]} />
					<meshStandardMaterial attach='material' color={0xa3b18a} />
					<ambientLight intensity={1} />
				</mesh>
			</Canvas>
		</>
	);
}

export default Square;
