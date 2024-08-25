import React, {Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from "../Loader";

const Computers = ({isMobile}) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  const meshRef = React.useRef();

  // Rotate the object on the Z-axis
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005; // Adjust the speed of rotation here
    }
  });
  
  return (
    <mesh ref = {meshRef}>
      <ambientLight intensity={0.8} />
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} distance = {100} />
      <spotLight
        position = {[-20, 50, 10]}
        angle = {0.12}
        penumbra = {1}
        castShadow
        shadow-mapSize = {1024}
        />
      <primitive 
      object={computer.scene}
      scale = {isMobile ? 0.5: 1.0}
      position = {isMobile ? [0,-0.25, 0]: [0, -0.125, 0]}
      rotation = {[0, 0, 0,]} 
      />
    </mesh>

  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) =>{
      setIsMobile(event.matches);
    }
    
    mediaQuery.addEventListener('change',
      handleMediaQueryChange);

      return () => {
        mediaQuery.removeEventListener('change',
          handleMediaQueryChange);
      }
  }, [])

  return (
    <Canvas
      frameloop='always'
      shadows
      camera={{ position: [20, 10, 5], fov: 20 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile = {isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;