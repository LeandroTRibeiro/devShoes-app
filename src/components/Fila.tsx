import { useGLTF } from '@react-three/drei';

export const Fila = () => {
  
  const { nodes, materials } = useGLTF('/fila.gltf') as any;

  return (

    <group position={[-20 , 200 , 200]} rotation={[-0.4 , 0.1 , 0.2]} >
      <group position={[-20 , 200 , 200]} rotation={[-0.4 , 0.1 , 0.2]} >
        <group scale={100} position={[-20 , 200 , 200]} rotation={[-0.4 , 0.1 , 0.2]} >
          <mesh geometry={nodes.low_po_Default_0.geometry} material={materials.Default} />
          <mesh geometry={nodes.low_po_Default_0_1.geometry} material={materials.Default} />
          <mesh geometry={nodes.low_po_Default_0_2.geometry} material={materials.Default} />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/fila.gltf');
