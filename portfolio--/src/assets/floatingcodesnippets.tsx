import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      pointLight: any;
    }
  }
}

const codeSnippets = [
  "const",
  "=>",
  "{}",
  "React",
  "Node",
  "API",
  "DB",
  "Python",
  "Ruby",
  ";"
];

function FloatingText({ text, position }: { text: string; position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const speed = Math.random() * 0.5 + 0.3;
  const rotationSpeed = Math.random() * 0.5 + 0.2;

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
      meshRef.current.rotation.y += 0.01 * rotationSpeed;
    }
  });

  return (
    <Text
      ref={meshRef}
      position={position}
      fontSize={0.3}
      color="#8b5cf6"
      anchorX="center"
      anchorY="middle"
    >
      {text}
    </Text>
  );
}

const FloatingCodeSnippets = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        {codeSnippets.map((snippet, index) => {
        // Random scatter
        const x = (Math.random() - 0.5) * 10;  // spread horizontally
        const y = (Math.random() - 0.5) * 10;   // spread vertically
        const z = (Math.random() - 0.5) * 5;  // spread depth-wise

        return (
            <FloatingText 
            key={index} 
            text={snippet} 
            position={[x, y, z]} 
            />
        );
        })}

      </Canvas>
    </div>
  );
};

export default FloatingCodeSnippets;
