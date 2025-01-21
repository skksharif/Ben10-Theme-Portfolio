import React from 'react'
import './TransformationComponent.css'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";


function Model() {
  const gltf = useGLTF("./react.glb"); // Replace with your model path
  return <primitive object={gltf.scene} scale={0.5} />;
}
export default function TransformationComponent() {
  return (
    <>
      <main>
      
      </main>
    </>
  )
}
