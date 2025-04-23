"use client"

import { useState } from "react"
import Image from "next/image"
import PointCloudRenderer from "./point-cloud-renderer"

export default function PointCloudViewer() {
  // 添加：点云文件路径
  const plyFilePath = "/ply/demo15.ply";
  const [isRotating, setIsRotating] = useState(true)

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Point Cloud Visualization</h2>

        <div className="w-full h-[600px] bg-gray-100 rounded-lg overflow-hidden shadow-lg flex flex-col items-center justify-center p-6">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-4">3D Visualization Placeholder</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              The interactive 3D point cloud viewer will be available after deployment.
            </p>
          </div>

          <div className="relative w-full max-w-md h-64 bg-gray-200 rounded-lg overflow-hidden">
            {/* 使用3D点云渲染组件 */}
            <PointCloudRenderer plyPath={plyFilePath} />
          </div>

          <div className="flex gap-4 mt-8">
            <button
              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
              onClick={() => setIsRotating(!isRotating)}
            >
              {isRotating ? "Pause Rotation" : "Start Rotation"}
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors">Reset View</button>
          </div>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Developer Note</h3>
          <p className="text-blue-700">
            The 3D visualization component has been temporarily replaced with a placeholder to resolve build issues.
            After successful deployment, the interactive 3D point cloud viewer can be implemented using:
          </p>
          <ul className="list-disc list-inside mt-2 text-blue-700 space-y-1 ml-4">
            <li>Three.js with compatible version for PLY loading</li>
            <li>Alternative 3D libraries like Babylon.js</li>
            <li>WebGL-based custom implementation</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
