"use client";

import React, { forwardRef, useImperativeHandle, useRef, useEffect, useState, useCallback } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const modelPaths = [
  '/images/modals/bed.glb',
  '/images/modals/sofa.glb',
  '/images/modals/chair.glb',
  '/images/modals/table.glb',
];

const CanvasModal = forwardRef((props, ref) => {
  
  const group = useRef();
  const [currentModelIndex, setCurrentModelIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const gltf = useGLTF(modelPaths[currentModelIndex]);

  // Start interval for changing models
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isInteracting) {
        setCurrentModelIndex((prevIndex) => (prevIndex + 1) % modelPaths.length);
      }
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, [isInteracting]);

  // Expose interaction methods and center calculation
  useImperativeHandle(ref, () => ({
    getCenter: () => {
      const box = new THREE.Box3().setFromObject(group.current);
      const center = new THREE.Vector3();
      box.getCenter(center);
      return center;
    },
    startInteraction: () => setIsInteracting(true),
    endInteraction: () => setIsInteracting(false),
  }));

  // Ensure all meshes are visible
  useEffect(() => {
    if (!gltf.scene) return;

    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        child.visible = true;
      }
    });
  }, [gltf.scene]);

  // Example: Listen for mouse down and up to detect user interaction
  const handlePointerDown = useCallback(() => {
    setIsInteracting(true);
  }, []);

  const handlePointerUp = useCallback(() => {
    setIsInteracting(false);
  }, []);

  return (
    <primitive
      object={gltf.scene}
      scale={2.5}
      position={[0, -1.5, 0]}
      ref={group}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    />
  );
});

// Preload all models
modelPaths.forEach((path) => useGLTF.preload(path));

export default CanvasModal;
