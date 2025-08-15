import { useEffect, useRef } from 'react';
import React, { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import * as THREE from 'three';

const ParticleBackground: React.FC = () => {
  const controlsRef = React.useRef<any>(null);
  const animationControls = useAnimation();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    const particles: THREE.Points[] = [];
    const particleCount = 500;
    
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i  3] = (Math.random() - 0.5)  10;
      positions[i  3 + 1] = (Math.random() - 0.5)  10;
      positions[i  3 + 2] = (Math.random() - 0.5)  10;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const material = new THREE.PointsMaterial({ color: 0x800080, size: 0.1 });
    const particlesMesh = new THREE.Points(geometry, material);
    scene.add(particlesMesh);
    
    camera.position.z = 5;
    
    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.x += 0.001;
      particlesMesh.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
    
    animate();
    
    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <h1 className="text-center text-4xl font-bold text-white z-10">Welcome to CleanSSR</h1>
      <h2 className="text-center text-xl text-purple-300 mt-2 z-10">Your Technology-Driven Cleaning Solution</h2>
      <div className="flex flex-col items-center justify-center h-full z-10">
        <p className="text-white mt-4 max-w-md text-center">
          At CleanSSR, we leverage cutting-edge technology to provide top-notch cleaning services tailored to your needs. Our innovative approach ensures a spotless environment utilizing advanced automation and efficient processes.
        </p>
        <div className="mt-6">
          <h3 className="text-purple-200">What Our Clients Say:</h3>
          <p className="text-white">"CleanSSR transformed our workspace with their exceptional service!"</p>
          <p className="text-white">"The technology they use is impressive, and the results speak for themselves!"</p>
        </div>
      </div>
    </div>
  );
};

export default ParticleBackground;