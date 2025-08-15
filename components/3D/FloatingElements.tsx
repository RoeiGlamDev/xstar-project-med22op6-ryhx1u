import { useEffect } from 'react';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useAnimation } from 'framer-motion';

const FloatingElements: React.FC = () => {
  const animation = useAnimation();

  React.useEffect(() => {
    animation.start({ y: [0, 10, 0], transition: { duration: 2, repeat: Infinity, repeatType: 'reverse' } });
  }, [animation]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <Canvas className="w-full h-full">
        {/ Replace with your 3D elements /}
        <mesh position={[0, 0, 0]}>
          <boxBufferGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#6a0dad" />
        </mesh>
      </Canvas>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-5xl text-purple-700 font-bold mb-4">Welcome to CleanSSR</h1>
        <p className="text-lg text-gray-700 text-center mb-8">Your trusted partner in innovative cleaning technology solutions. Experience a new level of cleanliness with our state-of-the-art approach.</p>
        <button className="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-600 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default FloatingElements;