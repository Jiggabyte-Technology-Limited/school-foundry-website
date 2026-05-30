'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function DatabaseSphere() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
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

    scene.fog = new THREE.Fog(0x0d0d0f, camera.position.z - 2, camera.position.z + 4);

    const dbGroup = new THREE.Group();
    scene.add(dbGroup);

    const numLayers = 4;
    const layerHeight = 1.0;
    const gapSize = 0.35;
    const radius = 3.5;
    const innerRadius = 3.35;
    const orangeGlowColor = 0xff7a00;

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
          const x = radius * Math.cos(theta);
          const z = radius * Math.sin(theta);
          dotVertices.push(x, worldY, z);
        }
      }

      if (i === 0) {
        const capRings = 14;
        for (let ring = 1; ring <= capRings; ring++) {
          const currentRadius = (ring / capRings) * radius;
          const dotsInRing = Math.floor(radialSegments * (ring / capRings));
          for (let r = 0; r < dotsInRing; r++) {
            const theta = (r / dotsInRing) * Math.PI * 2;
            dotVertices.push(
              currentRadius * Math.cos(theta),
              yPos + layerHeight / 2,
              currentRadius * Math.sin(theta)
            );
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
            dotVertices.push(
              currentRadius * Math.cos(theta),
              yPos - layerHeight / 2,
              currentRadius * Math.sin(theta)
            );
          }
        }
        dotVertices.push(0, yPos - layerHeight / 2, 0);
      }

      if (i < numLayers - 1) {
        const grooveTopY = yPos - layerHeight / 2;
        const grooveBottomY = grooveTopY - gapSize;

        const grooveRings = 4;
        for (let ring = 1; ring <= grooveRings; ring++) {
          const currentRadius =
            radius - ((radius - innerRadius) * ring) / grooveRings;
          const dotsInRing = Math.floor(
            radialSegments * (currentRadius / radius)
          );
          for (let r = 0; r < dotsInRing; r++) {
            const theta = (r / dotsInRing) * Math.PI * 2;
            const x = currentRadius * Math.cos(theta);
            const z = currentRadius * Math.sin(theta);
            dotVertices.push(x, grooveTopY, z);
            dotVertices.push(x, grooveBottomY, z);
          }
        }

        const wallSegments = 3;
        for (let h = 1; h < wallSegments; h++) {
          const localY = grooveTopY - (h * gapSize) / wallSegments;
          const dotsInRing = Math.floor(
            radialSegments * (innerRadius / radius)
          );
          for (let r = 0; r < dotsInRing; r++) {
            const theta = (r / dotsInRing) * Math.PI * 2;
            dotVertices.push(
              innerRadius * Math.cos(theta),
              localY,
              innerRadius * Math.sin(theta)
            );
          }
        }

        const grooveCenterY = grooveTopY - gapSize / 2;
        const denseRingDots = radialSegments * 1.5;
        for (let r = 0; r < denseRingDots; r++) {
          const theta = (r / denseRingDots) * Math.PI * 2;
          dotVertices.push(
            innerRadius * Math.cos(theta),
            grooveCenterY,
            innerRadius * Math.sin(theta)
          );
        }
      }
    }

    const dotGeometry = new THREE.BufferGeometry();
    dotGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(dotVertices, 3)
    );

    const dotMaterial = new THREE.PointsMaterial({
      color: orangeGlowColor,
      size: 0.08,
      sizeAttenuation: true,
      transparent: true,
      opacity: 1.0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

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

    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX) / windowHalfX;
      mouseY = (event.clientY - windowHalfY) / windowHalfY;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        mouseX = (event.touches[0].clientX - windowHalfX) / windowHalfX;
        mouseY = (event.touches[0].clientY - windowHalfY) / windowHalfY;
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('touchmove', onTouchMove, { passive: true });

    let time = 0;
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (!prefersReducedMotion) {
        time += 0.01;
        baseRotationY += 0.002;
      }

      const targetRotationY = mouseX * 0.3;
      const targetRotationX = mouseY * 0.2;

      currentRotationY += (targetRotationY - currentRotationY) * 0.05;
      currentRotationX += (targetRotationX - currentRotationX) * 0.05;

      dbGroup.rotation.y = baseRotationY + currentRotationY;
      dbGroup.rotation.x = baseRotationX + currentRotationX;
      
      if (!prefersReducedMotion) {
        dbGroup.position.y = Math.sin(time) * 0.15;
      } else {
        dbGroup.position.y = 0;
      }

      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;

      const mobile = window.innerWidth < 768;
      camera.position.z = mobile ? 22 : 16;

      scene.fog = new THREE.Fog(
        0x0d0d0f,
        camera.position.z - 2,
        camera.position.z + 4
      );

      camera.updateProjectionMatrix();
      renderer.setSize(w, h);

      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
    };

    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      dotGeometry.dispose();
      dotMaterial.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
}
