import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const HeroCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.appendChild(renderer.domElement);

    // Group for the 3D 'A' Logo Emblem & Floating Tech
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Create stylized 3D 'A' geometry matching the Arham Tech brand emblem
    // Left wing of the 'A'
    const leftWingShape = new THREE.Shape();
    leftWingShape.moveTo(-3.5, -4.0);
    leftWingShape.lineTo(-1.0, 4.2);
    leftWingShape.lineTo(0.5, 4.2);
    leftWingShape.lineTo(-1.8, -4.0);
    leftWingShape.closePath();

    const extrudeSettings = {
      depth: 0.8,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 2,
      bevelSize: 0.25,
      bevelThickness: 0.25
    };

    const leftWingGeo = new THREE.ExtrudeGeometry(leftWingShape, extrudeSettings);
    leftWingGeo.center();

    // Right wing & apex sweep
    const rightWingShape = new THREE.Shape();
    rightWingShape.moveTo(0.2, 4.0);
    rightWingShape.lineTo(3.8, -1.2);
    rightWingShape.lineTo(1.8, -0.6);
    rightWingShape.lineTo(0.0, 2.5);
    rightWingShape.closePath();

    const rightWingGeo = new THREE.ExtrudeGeometry(rightWingShape, extrudeSettings);
    rightWingGeo.center();

    // Cross-swoosh bridge of 'A'
    const bridgeShape = new THREE.Shape();
    bridgeShape.moveTo(-2.2, -1.5);
    bridgeShape.lineTo(2.8, -1.5);
    bridgeShape.lineTo(3.2, -0.7);
    bridgeShape.lineTo(-1.6, -0.7);
    bridgeShape.closePath();

    const bridgeGeo = new THREE.ExtrudeGeometry(bridgeShape, {
      depth: 0.6,
      bevelEnabled: true,
      bevelSegments: 3,
      bevelSize: 0.15,
      bevelThickness: 0.15
    });
    bridgeGeo.center();

    // High-tech cyber materials
    // Electric Blue metallic material
    const blueMetallicMat = new THREE.MeshPhysicalMaterial({
      color: 0x00A3FF,
      emissive: 0x0044AA,
      emissiveIntensity: 0.35,
      metalness: 0.85,
      roughness: 0.18,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1
    });

    // Silver Chrome material
    const silverMat = new THREE.MeshPhysicalMaterial({
      color: 0xCCD8E6,
      emissive: 0x1A2233,
      emissiveIntensity: 0.2,
      metalness: 0.95,
      roughness: 0.12,
      clearcoat: 1.0
    });

    // Red Neon accent material
    const redAccentMat = new THREE.MeshStandardMaterial({
      color: 0xFF1738,
      emissive: 0xFF1738,
      emissiveIntensity: 0.8,
      metalness: 0.5,
      roughness: 0.2
    });

    const leftWingMesh = new THREE.Mesh(leftWingGeo, blueMetallicMat);
    leftWingMesh.position.set(-0.8, 0.4, 0.2);

    const rightWingMesh = new THREE.Mesh(rightWingGeo, silverMat);
    rightWingMesh.position.set(1.4, 0.8, -0.1);

    const bridgeMesh = new THREE.Mesh(bridgeGeo, redAccentMat);
    bridgeMesh.position.set(0.2, -1.1, 0.3);

    const logoGroup = new THREE.Group();
    logoGroup.add(leftWingMesh);
    logoGroup.add(rightWingMesh);
    logoGroup.add(bridgeMesh);
    mainGroup.add(logoGroup);

    // 2. Orbiting Cyber Ring / Gyroscope
    const ringGeo = new THREE.TorusGeometry(5.2, 0.05, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00E5FF,
      transparent: true,
      opacity: 0.4
    });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(6.4, 0.04, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xFF1738,
      transparent: true,
      opacity: 0.3
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    mainGroup.add(ring2);

    // 3. Floating 3D Geometric Tech Cubes & Nodes
    const cubeGeo = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const techCubes: THREE.Mesh[] = [];
    const techPositions = [
      { x: -5, y: 3.5, z: 2, col: 0x00E5FF },
      { x: 5.2, y: -2.8, z: 1.5, col: 0xFF1738 },
      { x: -4.2, y: -3.5, z: -1, col: 0xFF1738 },
      { x: 4.5, y: 3.8, z: -2, col: 0x00E5FF },
      { x: 0, y: 5.5, z: 1, col: 0x00E5FF }
    ];

    techPositions.forEach((pos) => {
      const mat = new THREE.MeshStandardMaterial({
        color: pos.col,
        emissive: pos.col,
        emissiveIntensity: 0.7,
        wireframe: true
      });
      const cube = new THREE.Mesh(cubeGeo, mat);
      cube.position.set(pos.x, pos.y, pos.z);
      mainGroup.add(cube);
      techCubes.push(cube);
    });

    // 4. Particle Field (Red & Blue particles)
    const particleCount = 350;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colorBlue = new THREE.Color(0x00E5FF);
    const colorRed = new THREE.Color(0xFF1738);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      particlePositions[i3] = (Math.random() - 0.5) * 35;
      particlePositions[i3 + 1] = (Math.random() - 0.5) * 25;
      particlePositions[i3 + 2] = (Math.random() - 0.5) * 20;

      const chosenColor = Math.random() > 0.4 ? colorBlue : colorRed;
      particleColors[i3] = chosenColor.r;
      particleColors[i3 + 1] = chosenColor.g;
      particleColors[i3 + 2] = chosenColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const blueLight = new THREE.PointLight(0x00E5FF, 60, 40);
    blueLight.position.set(-6, 6, 8);
    scene.add(blueLight);

    const redLight = new THREE.PointLight(0xFF1738, 80, 40);
    redLight.position.set(6, -6, 8);
    scene.add(redLight);

    const topWhiteLight = new THREE.DirectionalLight(0xffffff, 2.5);
    topWhiteLight.position.set(0, 10, 10);
    scene.add(topWhiteLight);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / container.clientWidth) * 2 - 1;
      const y = -(((e.clientY - rect.top) / container.clientHeight) * 2 - 1);
      targetX = x * 0.4;
      targetY = y * 0.3;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Responsive resize handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Adjust scale on smaller screens
      if (width < 768) {
        mainGroup.scale.set(0.65, 0.65, 0.65);
      } else if (width < 1200) {
        mainGroup.scale.set(0.85, 0.85, 0.85);
      } else {
        mainGroup.scale.set(1.1, 1.1, 1.1);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Smooth mouse damping
        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;

        // Gentle floating & rotation of the 3D logo
        logoGroup.rotation.y = Math.sin(elapsedTime * 0.5) * 0.25 + mouseX;
        logoGroup.rotation.x = Math.cos(elapsedTime * 0.4) * 0.15 + mouseY;
        logoGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.25;

        // Rotate cyber rings
        ring1.rotation.z += 0.004;
        ring1.rotation.y += 0.002;
        ring2.rotation.z -= 0.003;
        ring2.rotation.x += 0.002;

        // Rotate tech cubes
        techCubes.forEach((cube, index) => {
          cube.rotation.x += 0.01 * (index + 1) * 0.4;
          cube.rotation.y += 0.015 * (index + 1) * 0.3;
          cube.position.y += Math.sin(elapsedTime * 2 + index) * 0.004;
        });

        // Rotate particle field slowly
        particles.rotation.y = elapsedTime * 0.02;
        particles.rotation.x = mouseX * 0.1;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      leftWingGeo.dispose();
      rightWingGeo.dispose();
      bridgeGeo.dispose();
      ringGeo.dispose();
      ringGeo2.dispose();
      cubeGeo.dispose();
      particleGeo.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

