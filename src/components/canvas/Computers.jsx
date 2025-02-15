import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { use } from "react";

const Computers = () => {
  const computer=useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
     < hemispherelight intensity={0.15} 
      groundcolor={"black"}/>
      
    </mesh>
  )
}

export default Computers