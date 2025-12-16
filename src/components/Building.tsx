import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { BuildingType } from '../store/buildingStore';
import { COLORS } from '../config/constants';
import * as THREE from 'three';

interface BuildingProps {
  id: string;
  type: BuildingType;
  position: [number, number, number];
  health: number;
  maxHealth: number;
}

export const Building: React.FC<BuildingProps> = ({ type, position, health, maxHealth }) => {
  const groupRef = useRef<THREE.Group>(null);
  const healthPercent = health / maxHealth;

  useFrame(() => {
    if (type === 'command-center' && groupRef.current && groupRef.current.children[2]) {
      groupRef.current.children[2].rotation.y += 0.01;
    }
  });

  const renderBuilding = () => {
    switch (type) {
      case 'command-center':
        return (
          <>
            <mesh position={[0, 1, 0]} castShadow receiveShadow>
              <boxGeometry args={[4, 2, 4]} />
              <meshStandardMaterial color={COLORS.GUNMETAL_GREY} roughness={0.8} metalness={0.3} />
            </mesh>
            <mesh position={[0, 2.5, 0]}>
              <cylinderGeometry args={[0.3, 0.3, 1, 8]} />
              <meshStandardMaterial color={COLORS.GUNMETAL_GREY} />
            </mesh>
            <mesh position={[0, 3.5, 0]} rotation={[0, 0, Math.PI / 4]}>
              <cylinderGeometry args={[1.2, 0.1, 0.1, 16]} />
              <meshStandardMaterial color={COLORS.TAN} />
            </mesh>
          </>
        );
      case 'oil-derrick':
        return (
          <>
            <mesh position={[0, 1.5, 0]} castShadow>
              <boxGeometry args={[1.5, 3, 1.5]} />
              <meshStandardMaterial color={COLORS.GUNMETAL_GREY} roughness={0.9} />
            </mesh>
            <mesh position={[1, 2, 0]} rotation={[0, 0, Math.PI / 6]}>
              <boxGeometry args={[2, 0.3, 0.3]} />
              <meshStandardMaterial color={COLORS.ALERT_ORANGE} />
            </mesh>
          </>
        );
      case 'power-plant':
        return (
          <>
            <mesh position={[0, 1.2, 0]} castShadow receiveShadow>
              <boxGeometry args={[3, 2.4, 3]} />
              <meshStandardMaterial color={COLORS.GUNMETAL_GREY} roughness={0.8} />
            </mesh>
            <mesh position={[0, 2.5, 0]}>
              <torusGeometry args={[0.8, 0.2, 16, 32]} />
              <meshStandardMaterial color={COLORS.ALERT_ORANGE} emissive={COLORS.ALERT_ORANGE} emissiveIntensity={0.3} />
            </mesh>
          </>
        );
      case 'barracks':
        return (
          <mesh position={[0, 1, 0]} castShadow receiveShadow>
            <boxGeometry args={[4, 2, 3]} />
            <meshStandardMaterial color={COLORS.OLIVE_DRAB} roughness={0.9} />
          </mesh>
        );
      case 'turret':
        return (
          <>
            <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
              <cylinderGeometry args={[0.8, 0.8, 1, 8]} />
              <meshStandardMaterial color={COLORS.GUNMETAL_GREY} roughness={0.6} metalness={0.5} />
            </mesh>
            <mesh position={[0, 1.2, 0.8]} castShadow>
              <boxGeometry args={[0.3, 0.3, 1.5]} />
              <meshStandardMaterial color={COLORS.GUNMETAL_GREY} />
            </mesh>
          </>
        );
    }
  };

  return (
    <group ref={groupRef} position={position}>
      {renderBuilding()}
      <group position={[0, 3, 0]}>
        <mesh><planeGeometry args={[2, 0.2]} /><meshBasicMaterial color="#333" /></mesh>
        <mesh position={[-1 + healthPercent, 0, 0.01]}>
          <planeGeometry args={[2 * healthPercent, 0.15]} />
          <meshBasicMaterial color={healthPercent > 0.5 ? COLORS.OLIVE_DRAB : COLORS.ALERT_ORANGE} />
        </mesh>
      </group>
    </group>
  );
};
