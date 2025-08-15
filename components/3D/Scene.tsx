import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

interface SceneProps {
  title?: string;
}

const Scene: React.FC<SceneProps> = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <motion.div
        className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold text-purple-600">Welcome to CleanSSR</h1>
        <p className="mt-4 text-lg text-gray-700">
          Your technology-driven solution for a cleaner tomorrow.
        </p>
      </motion.div>
      <Canvas className="w-full h-full">
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        {/ Interactive 3D Model can be added here /}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Scene;