import { useEffect, useRef } from 'react'

/**
 * 粒子网络背景 —— Canvas 绘制，随鼠标轻微偏移。
 * 在没有视频素材时作为 Hero 的动态背景。
 */
export default function ParticleField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let raf = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const mouse = { x: -9999, y: -9999 }

    const count = Math.min(90, Math.floor((window.innerWidth * window.innerHeight) / 22000))
    const particles = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00045,
      vy: (Math.random() - 0.5) * 0.00045,
      r: Math.random() * 1.6 + 0.6,
      hue: Math.random() > 0.72 ? 1 : 0, // 少量薄荷色粒子
    }))

    const resize = () => {
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const onMouse = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy

        // 鼠标轻推
        const dxm = mouse.x - p.x * width
        const dym = mouse.y - p.y * height
        const dm = Math.hypot(dxm, dym)
        if (dm < 180 && dm > 0.001) {
          p.x -= (dxm / dm) * 0.0006
          p.y -= (dym / dm) * 0.0006
        }

        if (p.x < -0.02) p.x = 1.02
        if (p.x > 1.02) p.x = -0.02
        if (p.y < -0.02) p.y = 1.02
        if (p.y > 1.02) p.y = -0.02

        const px = p.x * width
        const py = p.y * height
        const color = p.hue ? 'rgba(65, 224, 192, ' : 'rgba(150, 136, 255, '
        ctx.beginPath()
        ctx.arc(px, py, p.r, 0, Math.PI * 2)
        ctx.fillStyle = color + '0.5)'
        ctx.fill()
      }

      // 连线
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = (a.x - b.x) * width
          const dy = (a.y - b.y) * height
          const dist = Math.hypot(dx, dy)
          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.14
            ctx.beginPath()
            ctx.moveTo(a.x * width, a.y * height)
            ctx.lineTo(b.x * width, b.y * height)
            ctx.strokeStyle = `rgba(138, 123, 255, ${alpha})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouse)
    window.addEventListener('mouseout', onLeave)

    if (reduce) {
      cancelAnimationFrame(raf)
      // 静态画一帧
      ctx.clearRect(0, 0, width, height)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        ctx.beginPath()
        ctx.arc(p.x * width, p.y * height, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(150, 136, 255, 0.5)'
        ctx.fill()
      }
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('mouseout', onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="particle-field" aria-hidden="true" />
}