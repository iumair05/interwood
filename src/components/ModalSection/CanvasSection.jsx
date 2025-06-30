'use client';

import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CanvasModal from './CanvasModal';
import { Loading } from '@/commons/Loading';

const CanvasSection = () => {

  const bedRef = useRef();
  const controlsRef = useRef();

  const SetOrbitTarget = () => {

    useEffect(() => {
      if (bedRef.current && controlsRef.current) {
        const center = bedRef.current.getCenter();
        controlsRef.current.target.copy(center);
        controlsRef.current.update();
      }
    }, []);
    

    return <OrbitControls ref={controlsRef} makeDefault enableZoom />;
  };

  return (

    <Canvas
      className="w-full h-full"
      camera={{ position: [0, 2, 8], fov: 45 }}
      style={{ width: '100%', height: '100%' }}

    >
      {/* Soft white background */}
      <color attach="background" args={['#f7eee7']} />

      {/* Strong ambient light to simulate bright room lighting */}
      <ambientLight intensity={2} />

      {/* Key Light: Strong main light from the front-right */}
      <directionalLight
        position={[10, 10, 10]}
        intensity={2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* Fill Light: Soft light from front-left to remove harsh shadows */}
      <directionalLight
        position={[-10, 10, 5]}
        intensity={1.5}
        color="#ffffff"
      />

      {/* Rim Light: Back light to highlight edges */}
      <directionalLight
        position={[0, 10, -10]}
        intensity={1.2}
        color="#ffffff"
      />

      {/* Overhead spotLight to give studio top-lighting */}
      <spotLight
        position={[0, 15, 0]}
        intensity={1.5}
        angle={Math.PI / 6}
        penumbra={0.5}
        castShadow
      />

      {/* Optional: under-bed fill light for dramatic glow */}
      <pointLight position={[0, 0.5, 0]} intensity={0.5} color="#ffffff" />

      {/* Your bed model */}
      <Suspense fallback={<Loading />}>
        <CanvasModal ref={bedRef} />
      </Suspense>


      <SetOrbitTarget />
    </Canvas>

  );
};

export default CanvasSection;
