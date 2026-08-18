import React, { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse & Touch Tracking with Physics Repulsion
    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000, radius: 180 };

    const updatePointer = (clientX, clientY) => {
      mouse.targetX = clientX;
      mouse.targetY = clientY;
    };

    const handleMouseMove = (e) => updatePointer(e.clientX, e.clientY);
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        updatePointer(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    const handlePointerLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('mouseleave', handlePointerLeave);
    window.addEventListener('touchend', handlePointerLeave);

    // Mechanical Gears Definition
    const gears = [
      { x: 120, y: 180, radius: 45, teeth: 12, speed: 0.015, color: 'rgba(245, 158, 11, 0.35)', shiftX: 0, shiftY: 0 },
      { x: 195, y: 220, radius: 32, teeth: 8, speed: -0.021, color: 'rgba(234, 88, 12, 0.35)', shiftX: 0, shiftY: 0 },
      { x: canvas.width - 150, y: canvas.height - 200, radius: 55, teeth: 16, speed: 0.012, color: 'rgba(245, 158, 11, 0.3)', shiftX: 0, shiftY: 0 },
      { x: canvas.width - 240, y: canvas.height - 235, radius: 38, teeth: 10, speed: -0.017, color: 'rgba(251, 191, 36, 0.3)', shiftX: 0, shiftY: 0 },
    ];

    // Electrical Circuit Nodes
    const numNodes = Math.min(Math.floor(window.innerWidth / 25), 40);
    const nodes = Array.from({ length: numNodes }, () => ({
      baseX: Math.random() * canvas.width,
      baseY: Math.random() * canvas.height,
      x: 0,
      y: 0,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      shiftX: 0,
      shiftY: 0,
      radius: Math.random() * 2 + 1.5,
      pulse: Math.random() * Math.PI * 2
    }));

    nodes.forEach(n => {
      n.x = n.baseX;
      n.y = n.baseY;
    });

    // Floating Mechanical Tools
    const tools = Array.from({ length: 6 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      shiftX: 0,
      shiftY: 0,
      rot: Math.random() * Math.PI * 2,
      vRot: (Math.random() - 0.5) * 0.01,
      type: Math.random() > 0.5 ? 'wrench' : 'screwdriver'
    }));

    // Mouse Electrical Sparks
    const sparks = [];

    // Helper: Draw Mechanical Gear
    const drawGear = (g) => {
      ctx.save();
      ctx.translate(g.x + g.shiftX, g.y + g.shiftY);
      ctx.rotate(g.angle || 0);

      ctx.fillStyle = g.color;
      ctx.strokeStyle = g.color.replace('0.35', '0.6').replace('0.3', '0.5');
      ctx.lineWidth = 1.5;

      ctx.beginPath();
      for (let i = 0; i < g.teeth; i++) {
        const a1 = (i * 2 * Math.PI) / g.teeth;
        const a2 = a1 + Math.PI / g.teeth / 2;
        const a3 = a1 + Math.PI / g.teeth;
        const a4 = a3 + Math.PI / g.teeth / 2;

        const rOuter = g.radius + 7;
        const rInner = g.radius;

        if (i === 0) ctx.moveTo(rInner * Math.cos(a1), rInner * Math.sin(a1));
        else ctx.lineTo(rInner * Math.cos(a1), rInner * Math.sin(a1));

        ctx.lineTo(rOuter * Math.cos(a2), rOuter * Math.sin(a2));
        ctx.lineTo(rOuter * Math.cos(a3), rOuter * Math.sin(a3));
        ctx.lineTo(rInner * Math.cos(a4), rInner * Math.sin(a4));
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(0, 0, g.radius * 0.35, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(3, 7, 18, 0.7)';
      ctx.fill();
      ctx.stroke();

      ctx.restore();
    };

    // Helper: Draw Tool
    const drawTool = (t) => {
      ctx.save();
      ctx.translate(t.x + t.shiftX, t.y + t.shiftY);
      ctx.rotate(t.rot);
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.25)';
      ctx.lineWidth = 1.5;

      if (t.type === 'wrench') {
        ctx.beginPath();
        ctx.moveTo(-15, -3);
        ctx.lineTo(15, -3);
        ctx.arc(18, 0, 6, -Math.PI / 3, Math.PI / 3, false);
        ctx.lineTo(-15, 3);
        ctx.arc(-18, 0, 6, (2 * Math.PI) / 3, (4 * Math.PI) / 3, false);
        ctx.closePath();
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.rect(-15, -2, 20, 4);
        ctx.rect(5, -4, 10, 8);
        ctx.moveTo(-15, 0);
        ctx.lineTo(-22, 0);
        ctx.stroke();
      }

      ctx.restore();
    };

    // Helper: Draw Lightning Arc
    const drawLightningArc = (x1, y1, x2, y2) => {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      const steps = 4;
      for (let i = 1; i < steps; i++) {
        const t = i / steps;
        const subX = x1 + (x2 - x1) * t + (Math.random() - 0.5) * 15;
        const subY = y1 + (y2 - y1) * t + (Math.random() - 0.5) * 15;
        ctx.lineTo(subX, subY);
      }
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = 'rgba(251, 191, 36, 0.4)';
      ctx.lineWidth = 1.2;
      ctx.stroke();
    };

    // Main Render Loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth lerp mouse position
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      // 1. Gears with Cursor Repulsion Shift
      gears.forEach((g) => {
        g.angle = (g.angle || 0) + g.speed;

        const dx = g.x - mouse.x;
        const dy = g.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius && dist > 0) {
          const force = (1 - dist / mouse.radius) * 35;
          const targetShiftX = (dx / dist) * force;
          const targetShiftY = (dy / dist) * force;
          g.shiftX += (targetShiftX - g.shiftX) * 0.1;
          g.shiftY += (targetShiftY - g.shiftY) * 0.1;
        } else {
          g.shiftX += (0 - g.shiftX) * 0.05;
          g.shiftY += (0 - g.shiftY) * 0.05;
        }

        drawGear(g);
      });

      // 2. Nodes with Cursor Repulsion Shift & Electrical Traces
      nodes.forEach((node) => {
        node.baseX += node.vx;
        node.baseY += node.vy;
        node.pulse += 0.03;

        if (node.baseX < 0 || node.baseX > canvas.width) node.vx *= -1;
        if (node.baseY < 0 || node.baseY > canvas.height) node.vy *= -1;

        // Calculate cursor repulsion shift
        const dx = node.baseX - mouse.x;
        const dy = node.baseY - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius && dist > 0) {
          const force = (1 - dist / mouse.radius) * 45;
          const targetShiftX = (dx / dist) * force;
          const targetShiftY = (dy / dist) * force;
          node.shiftX += (targetShiftX - node.shiftX) * 0.15;
          node.shiftY += (targetShiftY - node.shiftY) * 0.15;
        } else {
          node.shiftX += (0 - node.shiftX) * 0.05;
          node.shiftY += (0 - node.shiftY) * 0.05;
        }

        node.x = node.baseX + node.shiftX;
        node.y = node.baseY + node.shiftY;
      });

      // Draw Wire Traces between nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.25;

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            const midX = (nodes[i].x + nodes[j].x) / 2;
            ctx.lineTo(midX, nodes[i].y);
            ctx.lineTo(midX, nodes[j].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(245, 158, 11, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            if (dist < 80 && Math.random() < 0.02) {
              drawLightningArc(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            }

            const pulsePos = (Math.sin(nodes[i].pulse) + 1) / 2;
            const px = nodes[i].x + (nodes[j].x - nodes[i].x) * pulsePos;
            const py = nodes[i].y + (nodes[j].y - nodes[i].y) * pulsePos;

            ctx.beginPath();
            ctx.arc(px, py, 1.8, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(251, 191, 36, ${alpha * 2.5})`;
            ctx.fill();
          }
        }
      }

      // Render Nodes
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 158, 11, ${0.4 + Math.sin(node.pulse) * 0.3})`;
        ctx.fill();
      });

      // 3. Floating Tools with Repulsion Shift
      tools.forEach((t) => {
        t.x += t.vx;
        t.y += t.vy;
        t.rot += t.vRot;

        if (t.x < 0 || t.x > canvas.width) t.vx *= -1;
        if (t.y < 0 || t.y > canvas.height) t.vy *= -1;

        const dx = t.x - mouse.x;
        const dy = t.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius && dist > 0) {
          const force = (1 - dist / mouse.radius) * 30;
          const targetShiftX = (dx / dist) * force;
          const targetShiftY = (dy / dist) * force;
          t.shiftX += (targetShiftX - t.shiftX) * 0.1;
          t.shiftY += (targetShiftY - t.shiftY) * 0.1;
        } else {
          t.shiftX += (0 - t.shiftX) * 0.05;
          t.shiftY += (0 - t.shiftY) * 0.05;
        }

        drawTool(t);
      });

      // 4. Mouse Sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.life -= 0.04;

        if (s.life <= 0) {
          sparks.splice(i, 1);
        } else {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.life * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = s.color;
          ctx.globalAlpha = s.life;
          ctx.fill();
          ctx.globalAlpha = 1;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseleave', handlePointerLeave);
      window.removeEventListener('touchend', handlePointerLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
    />
  );
}
