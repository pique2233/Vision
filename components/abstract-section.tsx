"use client"

import { useRef, useEffect } from "react"

export default function AbstractSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error)
      })
    }
  }, [])

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Abstract</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Vision3D is a novel approach to 3D reconstruction from 2D images. Our method leverages deep learning
            techniques to accurately predict 3D structures from limited visual information. By combining advanced neural
            network architectures with geometric constraints, we achieve state-of-the-art results in various 3D vision
            tasks including object reconstruction, scene understanding, and point cloud generation.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            In this work, we present a comprehensive framework that addresses the challenges of 3D vision, including
            occlusion, varying lighting conditions, and complex geometries. Our experiments demonstrate superior
            performance compared to existing methods across multiple benchmarks.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-md aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <video ref={videoRef} className="w-full h-full object-cover" controls loop muted playsInline>
              <source src="/videos/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
