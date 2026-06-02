import { useEffect, useRef } from 'react'

export default function FloatingParticles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let particles = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()

    class Particle {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height + canvas.height * 0.1 // start lower or distributed
        this.size = Math.random() * 1.5 + 0.5
        this.speedY = -(Math.random() * 0.3 + 0.1) // slow drift up
        this.speedX = (Math.random() * 0.2 - 0.1) // slight horizontal drift
        this.alpha = Math.random() * 0.5 + 0.1
        this.fadeSpeed = Math.random() * 0.005 + 0.002
        this.glow = Math.random() > 0.8
      }

      update() {
        this.y += this.speedY
        this.x += this.speedX

        // If particle goes off top or sides, reset
        if (this.y < 0 || this.x < 0 || this.x > canvas.width) {
          this.reset()
          this.y = canvas.height
        }
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.alpha
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = '#93a4c8' // Silver base

        if (this.glow) {
          ctx.shadowBlur = 10
          ctx.shadowColor = '#cbd5f5'
        }

        ctx.fill()
        ctx.restore()
      }
    }

    // Initialize particles based on screen size
    const particleCount = Math.min(60, Math.floor((canvas.width * canvas.height) / 25000))
    for (let i = 0; i < particleCount; i++) {
      const p = new Particle()
      // Distribute them evenly initially
      p.y = Math.random() * canvas.height
      particles.push(p)
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-60"
    />
  )
}
