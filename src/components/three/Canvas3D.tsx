import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Suspense } from 'react';

import Particles from './Particles';
import Scene3D from './Scene3D';
import { useScrollControls } from './ScrollControls';

interface CameraRigProps {
  scrollProgress: number;
  reducedMotion: boolean;
}

const CameraRig = ({ scrollProgress, reducedMotion }: CameraRigProps) => {
  const { camera } = useThree();

  useFrame((_state, delta) => {
    const targetY = reducedMotion ? 0 : (scrollProgress - 0.5) * -1.4;
    const targetZ = reducedMotion ? 8.8 : 8.8 - scrollProgress * 1.1;

    camera.position.y += (targetY - camera.position.y) * Math.min(1, delta * 2.6);
    camera.position.z += (targetZ - camera.position.z) * Math.min(1, delta * 2.6);
    camera.lookAt(0, 0, -4.2);
  });

  return null;
};

const Canvas3D = () => {
  const { progress, reducedMotion } = useScrollControls();

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 8.8], fov: 50 }} gl={{ alpha: true, antialias: true }}>
        <Suspense fallback={null}>
          <CameraRig scrollProgress={progress} reducedMotion={reducedMotion} />
          <Scene3D scrollProgress={progress} reducedMotion={reducedMotion} />
          <Particles count={180} reducedMotion={reducedMotion} />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 bg-cyber-veil animate-float-serene" />
    </div>
  );
};

export default Canvas3D;
