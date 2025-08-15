import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * @module use3D
 * @description Custom hook for managing 3D interactions for CleanSSR's interactive elements.
 * This hook leverages Three.js to create a minimal and engaging 3D experience relevant to the technology industry.
 */

/
 * @typedef {Object} CleanSSR3DProps
 * @property {number} width - The width of the canvas.
 * @property {number} height - The height of the canvas.
 */

/
 * @function use3D
 * @param {CleanSSR3DProps} props - The properties for the 3D canvas.
 * @returns {void}
 */
const use3D = ({ width, height }: CleanSSR3DProps): void => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    
    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);

    // Create a minimal 3D object
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x6a0dad }); // Purple color
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Set camera position
    camera.position.z = 5;

    // Lighting
    const light = new THREE.AmbientLight(0xffffff, 1); // Soft white light
    scene.add(light);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on unmount
    return () => {
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, [width, height]);

  return canvasRef;
};

export default use3D;