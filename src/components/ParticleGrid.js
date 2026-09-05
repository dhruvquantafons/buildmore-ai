'use client';
import { useEffect, useRef } from 'react';
import styles from './ParticleGrid.module.css';

export default function ParticleGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];
    let w, h;

    function resize() {
      w = canvas.width = canvas.offsetWidth * devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
      init();
    }

    function init() {
      particles = [];
      const cols = Math.floor(canvas.offsetWidth / 60);
      const rows = Math.floor(canvas.offsetHeight / 60);
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          particles.push({
            x: (i + 0.5) * (canvas.offsetWidth / cols),
            y: (j + 0.5) * (canvas.offsetHeight / rows),
            ox: (i + 0.5) * (canvas.offsetWidth / cols),
            oy: (j + 0.5) * (canvas.offsetHeight / rows),
            vx: 0,
            vy: 0,
            r: Math.random() * 1.5 + 0.5,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
    }

    let mouse = { x: -1000, y: -1000 };
    function onMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }

    let time = 0;
    function draw() {
      time += 0.008;
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      for (const p of particles) {
        // Gentle float
        p.x = p.ox + Math.sin(time + p.phase) * 3;
        p.y = p.oy + Math.cos(time * 0.7 + p.phase) * 3;

        // Mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          p.x += (dx / dist) * force * 15;
          p.y += (dy / dist) * force * 15;
        }

        const alpha = 0.15 + Math.sin(time + p.phase) * 0.08;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${alpha})`;
        ctx.fill();
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.04 * (1 - dist / 80)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', onMove);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMove);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
