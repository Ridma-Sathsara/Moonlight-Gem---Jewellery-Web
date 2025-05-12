"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { OrbitControls } from 'three-stdlib';
import { Button } from "@/components/ui/button"
import { Loader2, Maximize2, Minimize2, RotateCcw } from "lucide-react"

interface GemViewer3DProps {
  gemType: string
  modelPath?: string
}

export default function GemViewer3D({ gemType, modelPath }: GemViewer3DProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const controlsRef = useRef<OrbitControls | null>(null)
  const gemRef = useRef<THREE.Object3D | null>(null)
  const frameIdRef = useRef<number | null>(null)

  // Get gem color for lighting and fallback geometry
  const getGemColor = () => {
    const colors: Record<string, number> = {
      "blue-sapphire": 0x0055ff,
      ruby: 0xff0033,
      emerald: 0x00cc66,
      alexandrite: 0x8844aa,
      "pink-sapphire": 0xff66cc,
      "yellow-sapphire": 0xffcc00,
      spinel: 0xff3366,
      garnet: 0x990000,
    }

    return colors[gemType.toLowerCase()] || 0xffffff
  }

  useEffect(() => {
    if (!containerRef.current) return

    // Setup scene
    const scene = new THREE.Scene()
    sceneRef.current = scene
    scene.background = new THREE.Color(0x000000)
    scene.background.set(0x000000)
    scene.background.convertSRGBToLinear()

    // Setup camera
    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    )
    cameraRef.current = camera
    camera.position.z = 5

    // Setup renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    rendererRef.current = renderer
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.0
    containerRef.current.appendChild(renderer.domElement)

    // Setup controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controlsRef.current = controls
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.rotateSpeed = 0.8
    controls.enableZoom = true
    controls.autoRotate = true
    controls.autoRotateSpeed = 1.0
    controls.minDistance = 3
    controls.maxDistance = 10

    // Add lights
    const gemColor = getGemColor()

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    // Directional light (key light)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    // Point light (gem color)
    const pointLight = new THREE.PointLight(gemColor, 2, 10)
    pointLight.position.set(-2, 1, 3)
    scene.add(pointLight)

    // Fill light
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.5)
    fillLight.position.set(-5, -2, -5)
    scene.add(fillLight)

    // Create fallback gem geometry immediately
    // We'll use this instead of trying to load models that don't exist
    createFallbackGem(scene, gemColor)
    setLoading(false)

    // Animation loop
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate)

      if (controlsRef.current) {
        controlsRef.current.update()
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current)
      }
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return

      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight

      cameraRef.current.aspect = width / height
      cameraRef.current.updateProjectionMatrix()

      rendererRef.current.setSize(width, height)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current)
      }

      if (rendererRef.current && rendererRef.current.domElement && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement)
        rendererRef.current.dispose()
      }

      window.removeEventListener("resize", handleResize)
    }
  }, [gemType, modelPath])

  // Create a fallback gem based on the gem type
  const createFallbackGem = (scene: THREE.Scene, gemColor: number) => {
    let geometry

    // Create different gem shapes based on the gem type
    switch (gemType.toLowerCase()) {
      case "emerald":
        // Emerald cut - rectangular prism
        geometry = new THREE.BoxGeometry(1.5, 1, 1)
        break
      case "ruby":
        // Oval cut
        geometry = new THREE.SphereGeometry(1, 32, 16).scale(1.2, 1, 0.8)
        break
      case "blue-sapphire":
      case "pink-sapphire":
      case "yellow-sapphire":
        // Round brilliant cut
        geometry = new THREE.OctahedronGeometry(1, 2)
        break
      case "alexandrite":
        // Cushion cut
        geometry = new THREE.BoxGeometry(1.2, 1.2, 0.8).translate(0, 0, 0)
        const edges = new THREE.EdgesGeometry(geometry)
        const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffffff }))
        scene.add(line)
        break
      default:
        // Default to brilliant cut
        geometry = new THREE.IcosahedronGeometry(1, 2)
    }

    // Create material with appropriate properties for a gemstone
    const material = new THREE.MeshPhysicalMaterial({
      color: gemColor,
      metalness: 0.1,
      roughness: 0.1,
      transmission: 0.9, // Make it transparent like a real gem
      thickness: 0.5, // Refraction thickness
      envMapIntensity: 1.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    })

    const fallbackGem = new THREE.Mesh(geometry, material)

    // Add some rotation to make it look more interesting
    fallbackGem.rotation.x = Math.PI / 6
    fallbackGem.rotation.y = Math.PI / 4

    gemRef.current = fallbackGem
    scene.add(fallbackGem)

    // Add a subtle platform under the gem
    const platformGeometry = new THREE.CylinderGeometry(1.5, 1.5, 0.1, 32)
    const platformMaterial = new THREE.MeshStandardMaterial({
      color: 0x333333,
      metalness: 0.8,
      roughness: 0.2,
    })
    const platform = new THREE.Mesh(platformGeometry, platformMaterial)
    platform.position.y = -1
    scene.add(platform)
  }

  // Toggle fullscreen
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)

    // Need to update renderer size after state change
    setTimeout(() => {
      if (containerRef.current && cameraRef.current && rendererRef.current) {
        const width = containerRef.current.clientWidth
        const height = containerRef.current.clientHeight

        cameraRef.current.aspect = width / height
        cameraRef.current.updateProjectionMatrix()

        rendererRef.current.setSize(width, height)
      }
    }, 100)
  }

  // Reset camera position
  const resetView = () => {
    if (cameraRef.current && controlsRef.current) {
      cameraRef.current.position.set(0, 0, 5)
      controlsRef.current.reset()
    }
  }

  // Toggle auto-rotation
  const toggleRotation = () => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = !controlsRef.current.autoRotate
    }
  }

  return (
    <>
      <div
        className={isFullscreen ? "viewer-container-fullscreen" : "viewer-container"}
        style={{ position: "relative" }}
      >
        <div ref={containerRef} className="model-container">
          {loading && (
            <div className="loading-overlay">
              <Loader2 className="animate-spin" />
              <span>Loading 3D model...</span>
            </div>
          )}
        </div>

        <div className="controls-container">
          <Button variant="secondary" size="sm" onClick={toggleRotation} className="control-button">
            <RotateCcw className="icon" />
            <span>Rotate</span>
          </Button>

          <Button variant="secondary" size="sm" onClick={resetView} className="control-button">
            Reset View
          </Button>

          <Button variant="secondary" size="sm" onClick={toggleFullscreen} className="control-button">
            {isFullscreen ? (
              <>
                <Minimize2 className="icon" />
                <span>Exit Fullscreen</span>
              </>
            ) : (
              <>
                <Maximize2 className="icon" />
                <span>Fullscreen</span>
              </>
            )}
          </Button>
        </div>

        {isFullscreen && (
          <div className="close-button">
            <Button variant="outline" size="sm" onClick={toggleFullscreen}>
              Close
            </Button>
          </div>
        )}
      </div>

      <style jsx>{`
        .viewer-container {
          position: relative;
          width: 100%;
          height: 400px;
          border-radius: 8px;
          overflow: hidden;
        }

        .viewer-container-fullscreen {
          position: fixed;
          inset: 0;
          z-index: 50;
          background-color: black;
          padding: 16px;
          border-radius: 0;
        }

        .model-container {
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4));
          border-radius: 8px;
        }

        .loading-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(4px);
          color: white;
          gap: 8px;
        }

        .controls-container {
          position: absolute;
          bottom: 16px;
          right: 16px;
          display: flex;
          gap: 8px;
        }

        .close-button {
          position: absolute;
          top: 16px;
          right: 16px;
        }

        .control-button {
          background-color: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
        }

        .icon {
          margin-right: 4px;
          height: 16px;
          width: 16px;
        }
      `}</style>
    </>
  )
}
