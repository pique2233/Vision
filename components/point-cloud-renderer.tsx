import React, { useEffect, useRef } from "react";
import * as THREE from "three";
// 可根据需要引入 PLYLoader
// import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";

interface PointCloudRendererProps {
  plyPath: string;
}

export default function PointCloudRenderer({ plyPath }: PointCloudRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 初始化 three.js 场景
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, containerRef.current!.clientWidth / containerRef.current!.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(containerRef.current!.clientWidth, containerRef.current!.clientHeight);
    containerRef.current!.appendChild(renderer.domElement);

    // 加载 PLY 文件并加入场景（示例代码，需要根据实际需求修改）
    // const loader = new PLYLoader();
    // loader.load(plyPath, geometry => {
    //   geometry.computeVertexNormals();
    //   const material = new THREE.PointsMaterial({ color: 0x0055ff, size: 0.01 });
    //   const points = new THREE.Points(geometry, material);
    //   scene.add(points);
    // });

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      // 可添加旋转等效果
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      // 清理
      containerRef.current!.removeChild(renderer.domElement);
    };
  }, [plyPath]);

  return <div ref={containerRef} className="w-full h-full" />;
}
