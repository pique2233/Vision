import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative w-full h-[600px] flex flex-col items-center justify-center text-white">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/grid_teaser_img.png" alt="Vision3D Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="z-10 text-center space-y-8">
        <h1 className="text-7xl font-bold tracking-tight">Vision3D</h1>

        <div className="flex gap-4 justify-center">
          <Button asChild variant="default" className="px-8 py-6 text-lg">
            <Link href="https://github.com/yourusername/vision3d">Code</Link>
          </Button>
          <Button asChild variant="default" className="px-8 py-6 text-lg">
            <Link href="/demo">Demo</Link>
          </Button>
          <Button asChild variant="default" className="px-8 py-6 text-lg">
            <Link href="/paper.pdf">Paper</Link>
          </Button>
        </div>

        <div className="mt-8 text-xl">
          <p>Author Name 1 · Author Name 2</p>
          <p className="mt-2">SouthWest University</p>
        </div>
      </div>
    </section>
  )
}
