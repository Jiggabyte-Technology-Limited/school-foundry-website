import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Database } from 'lucide-react';

export default function DatabaseSphere() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer | null = null;
    let animId: number;
    let cleanup: (() => void) | undefined;
    const dotGeometry = new THREE.BufferGeometry();
    const dotMaterial = new THREE.PointsMaterial({
      color: 0xea580c,
      size: 0.09,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });

    try {
      const scene = new THREE.Scene();
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      const camera = new THREE.PerspectiveCamera(
        45,
        container.clientWidth / container.clientHeight,
        0.1,
        100
      );
      const isMobile = window.innerWidth < 768;
      camera.position.z = isMobile ? 22 : 16;
      camera.position.y = 2;
      camera.lookAt(0, 0, 0);

      scene.fog = new THREE.Fog(0xf8fafc, camera.position.z - 2, camera.position.z + 6);

      const dbGroup = new THREE.Group();
      scene.add(dbGroup);

      const numLayers = 4;
      const layerHeight = 1.0;
      const gapSize = 0.35;
      const radius = 3.5;
      const innerRadius = 3.35;

      const dotVertices: number[] = [];

      for (let i = 0; i < numLayers; i++) {
        const yOffsetMultiplier = numLayers / 2 - 0.5 - i;
        const yPos = yOffsetMultiplier * (layerHeight + gapSize);
        const radialSegments = 80;
        const heightSegments = 6;

        for (let h = 0; h <= heightSegments; h++) {
          const localY = layerHeight / 2 - (h * layerHeight) / heightSegments;
          const worldY = yPos + localY;
          for (let r = 0; r < radialSegments; r++) {
            const theta = (r / radialSegments) * Math.PI * 2;
            dotVertices.push(radius * Math.cos(theta), worldY, radius * Math.sin(theta));
          }
        }

        if (i === 0) {
          const capRings = 14;
          for (let ring = 1; ring <= capRings; ring++) {
            const currentRadius = (ring / capRings) * radius;
            const dotsInRing = Math.floor(radialSegments * (ring / capRings));
            for (let r = 0; r < dotsInRing; r++) {
              const theta = (r / dotsInRing) * Math.PI * 2;
              dotVertices.push(currentRadius * Math.cos(theta), yPos + layerHeight / 2, currentRadius * Math.sin(theta));
            }
          }
          dotVertices.push(0, yPos + layerHeight / 2, 0);
        }

        if (i === numLayers - 1) {
          const capRings = 14;
          for (let ring = 1; ring <= capRings; ring++) {
            const currentRadius = (ring / capRings) * radius;
            const dotsInRing = Math.floor(radialSegments * (ring / capRings));
            for (let r = 0; r < dotsInRing; r++) {
              const theta = (r / dotsInRing) * Math.PI * 2;
              dotVertices.push(currentRadius * Math.cos(theta), yPos - layerHeight / 2, currentRadius * Math.sin(theta));
            }
          }
          dotVertices.push(0, yPos - layerHeight / 2, 0);
        }

        if (i < numLayers - 1) {
          const grooveTopY = yPos - layerHeight / 2;
          const grooveBottomY = grooveTopY - gapSize;
          const grooveRings = 4;
          for (let ring = 1; ring <= grooveRings; ring++) {
            const currentRadius = radius - ((radius - innerRadius) * ring) / grooveRings;
            const dotsInRing = Math.floor(radialSegments * (currentRadius / radius));
            for (let r = 0; r < dotsInRing; r++) {
              const theta = (r / dotsInRing) * Math.PI * 2;
              dotVertices.push(currentRadius * Math.cos(theta), grooveTopY, currentRadius * Math.sin(theta));
              dotVertices.push(currentRadius * Math.cos(theta), grooveBottomY, currentRadius * Math.sin(theta));
            }
          }
          const wallSegments = 3;
          for (let h = 1; h < wallSegments; h++) {
            const localY = grooveTopY - (h * gapSize) / wallSegments;
            const dotsInRing = Math.floor(radialSegments * (innerRadius / radius));
            for (let r = 0; r < dotsInRing; r++) {
              const theta = (r / dotsInRing) * Math.PI * 2;
              dotVertices.push(innerRadius * Math.cos(theta), localY, innerRadius * Math.sin(theta));
            }
          }
          const grooveCenterY = grooveTopY - gapSize / 2;
          const denseRingDots = radialSegments * 1.5;
          for (let r = 0; r < denseRingDots; r++) {
            const theta = (r / denseRingDots) * Math.PI * 2;
            dotVertices.push(innerRadius * Math.cos(theta), grooveCenterY, innerRadius * Math.sin(theta));
          }
        }
      }

      dotGeometry.setAttribute('position', new THREE.Float32BufferAttribute(dotVertices, 3));
      const dotSystem = new THREE.Points(dotGeometry, dotMaterial);
      dbGroup.add(dotSystem);

      const baseRotationX = 0.15;
      let baseRotationY = 0;
      let mouseX = 0;
      let mouseY = 0;
      let currentRotationX = 0;
      let currentRotationY = 0;
      let windowHalfX = window.innerWidth / 2;
      let windowHalfY = window.innerHeight / 2;
      let time = 0;

      const onMouseMove = (e: MouseEvent) => {
        mouseX = (e.clientX - windowHalfX) / windowHalfX;
        mouseY = (e.clientY - windowHalfY) / windowHalfY;
      };
      const onTouchMove = (e: TouchEvent) => {
        if (e.touches.length > 0) {
          mouseX = (e.touches[0].clientX - windowHalfX) / windowHalfX;
          mouseY = (e.touches[0].clientY - windowHalfY) / windowHalfY;
        }
      };
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('touchmove', onTouchMove, { passive: true });

      const animate = () => {
        animId = requestAnimationFrame(animate);
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!prefersReducedMotion) { time += 0.01; baseRotationY += 0.002; }
        currentRotationY += (mouseX * 0.3 - currentRotationY) * 0.05;
        currentRotationX += (mouseY * 0.2 - currentRotationX) * 0.05;
        dbGroup.rotation.y = baseRotationY + currentRotationY;
        dbGroup.rotation.x = baseRotationX + currentRotationX;
        dbGroup.position.y = prefersReducedMotion ? 0 : Math.sin(time) * 0.15;
        renderer!.render(scene, camera);
      };
      animate();

      const onResize = () => {
        if (!container || !renderer) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        camera.aspect = w / h;
        const mobile = window.innerWidth < 768;
        camera.position.z = mobile ? 22 : 16;
        scene.fog = new THREE.Fog(0xf8fafc, camera.position.z - 2, camera.position.z + 6);
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
      };
      window.addEventListener('resize', onResize);

      cleanup = () => {
        cancelAnimationFrame(animId);
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('touchmove', onTouchMove);
        window.removeEventListener('resize', onResize);
        renderer!.dispose();
        dotGeometry.dispose();
        dotMaterial.dispose();
        if (container.contains(renderer!.domElement)) container.removeChild(renderer!.domElement);
      };
    } catch (_e) {
      setFailed(true);
      dotGeometry.dispose();
      dotMaterial.dispose();
      if (renderer) {
        try { renderer.dispose(); } catch (_e2) { /* ignore */ }
      }
    }

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  if (failed) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="relative w-64 h-64 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-primary/5 animate-pulse" />
          <div className="absolute inset-8 rounded-full bg-primary/10 animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute inset-16 rounded-full bg-primary/15 animate-pulse" style={{ animationDelay: '1s' }} />
          <Database className="w-20 h-20 text-primary/60 relative z-10" />
        </div>
      </div>
    );
  }

  return <div ref={containerRef} className="w-full h-full" />;
}
