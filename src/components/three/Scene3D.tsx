import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import type { Group, Mesh } from 'three';
import { Vector3 } from 'three';

interface Scene3DProps {
  scrollProgress: number;
  reducedMotion: boolean;
}

type ShapeType = 'sphere' | 'torus' | 'box';

interface FloatingShapeProps {
  type: ShapeType;
  position: [number, number, number];
  color: string;
  size: number;
  speed: number;
  scrollProgress: number;
  reducedMotion: boolean;
}

const FloatingShape = ({
  type,
  position,
  color,
  size,
  speed,
  scrollProgress,
  reducedMotion,
}: FloatingShapeProps) => {
  const meshRef = useRef<Mesh>(null);
  const initialPosition = useMemo(() => new Vector3(...position), [position]);
  const targetScale = useMemo(() => new Vector3(1, 1, 1), []);

  useFrame((state, delta) => {
    if (!meshRef.current) {
      return;
    }

    const elapsed = state.clock.elapsedTime;
    const floatOffset = reducedMotion ? 0 : Math.sin(elapsed * speed + position[0]) * 0.28;
    const depthDrift = reducedMotion ? 0 : Math.cos(elapsed * speed * 0.4 + position[1]) * 0.18;

    meshRef.current.position.set(
      initialPosition.x,
      initialPosition.y + floatOffset + scrollProgress * 0.35,
      initialPosition.z + depthDrift,
    );

    meshRef.current.rotation.x += reducedMotion ? 0 : delta * 0.1 * speed;
    meshRef.current.rotation.y += reducedMotion ? 0 : delta * (0.12 + scrollProgress * 0.2) * speed;

    const scale = reducedMotion ? 1 : 1 + scrollProgress * 0.24;
    targetScale.setScalar(scale);
    meshRef.current.scale.lerp(targetScale, 0.08);
  });

  return (
    <mesh ref={meshRef} position={position}>
      {type === 'sphere' && <sphereGeometry args={[size, 24, 24]} />}
      {type === 'torus' && <torusGeometry args={[size * 0.8, size * 0.24, 20, 60]} />}
      {type === 'box' && <boxGeometry args={[size, size, size]} />}
      <meshStandardMaterial color={color} metalness={0.3} roughness={0.55} transparent opacity={0.42} />
    </mesh>
  );
};

const Scene3D = ({ scrollProgress, reducedMotion }: Scene3DProps) => {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (!groupRef.current || reducedMotion) {
      return;
    }

    groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.08) * 0.03;
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.35} color="#8aa7bf" />
      <directionalLight position={[4, 3, 2]} intensity={0.8} color="#9ac5d8" />
      <pointLight position={[-5, -2, -3]} intensity={0.45} color="#4c7f64" />

      <FloatingShape
        type="sphere"
        position={[-3.8, 1.4, -3.2]}
        color="#7aa6c5"
        size={0.9}
        speed={0.75}
        scrollProgress={scrollProgress}
        reducedMotion={reducedMotion}
      />
      <FloatingShape
        type="torus"
        position={[2.9, -0.8, -4.2]}
        color="#5e8caa"
        size={1.1}
        speed={0.62}
        scrollProgress={scrollProgress}
        reducedMotion={reducedMotion}
      />
      <FloatingShape
        type="box"
        position={[0.4, 2.4, -5.1]}
        color="#5b8c77"
        size={0.85}
        speed={0.56}
        scrollProgress={scrollProgress}
        reducedMotion={reducedMotion}
      />
    </group>
  );
};

export default Scene3D;
