import HeroSection from "@/components/hero-section"
import AbstractSection from "@/components/abstract-section"
import ModelVisualization from "@/components/model-visualization"
import PointCloudViewer from "@/components/point-cloud-viewer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AbstractSection />
      <ModelVisualization />
      <PointCloudViewer />
    </main>
  )
}
