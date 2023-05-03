import { Sphere, MeshDistortMaterial } from '@react-three/drei';

export const AnimatedSphere = (props: {color: string}) => {
    return (
        <Sphere visible args={[1.2,100,200]} scale={2}>
            <MeshDistortMaterial 
                color={props.color}
                attach="material"
                distort={0.5}
                speed={1}
                roughness={1}
            />
        </Sphere>
    );
};