import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import type { Points } from 'three';

interface ParticlesProps {
  count?: number;
  reducedMotion?: boolean;
}

const Particles = ({ count = 200, reducedMotion = false }: ParticlesProps) => {
  const pointsRef = useRef<Points>(null);

  const { positions, alphas } = useMemo(() => {
    const nextPositions = new Float32Array(count * 3);
    const nextAlphas = new Float32Array(count);

    for (let i = 0; i < count; i += 1) {
      const index = i * 3;
      nextPositions[index] = (Math.random() - 0.5) * 14;
      nextPositions[index + 1] = (Math.random() - 0.5) * 12;
      nextPositions[index + 2] = -Math.random() * 10;
      nextAlphas[i] = 0.2 + Math.random() * 0.45;
    }

    return { positions: nextPositions, alphas: nextAlphas };
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current || reducedMotion) {
      return;
    }

    pointsRef.current.rotation.y += delta * 0.02;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.08;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute attach="attributes-alpha" count={alphas.length} array={alphas} itemSize={1} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        transparent
        opacity={0.45}
        depthWrite={false}
        color="#8eb8d5"
        sizeAttenuation
      />
    </points>
  );
};

export default Particles;
