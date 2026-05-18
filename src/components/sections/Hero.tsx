import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Code2, Database, Globe, Smartphone } from 'lucide-react';
import { FadeIn, TypingText, StaggerContainer, itemVariants } from '../animations';
import { Button } from '../ui/Button';

const floatingCards = [
  { icon: Code2, label: 'Backend Dev', x: '2%', y: '8%', delay: 0.2 },
  { icon: Database, label: 'Databases', x: '92%', y: '8%', delay: 0.4 },
  { icon: Globe, label: 'Web Apps', x: '90%', y: '85%', delay: 0.6 },
  { icon: Smartphone, label: 'Mobile', x: '4%', y: '88%', delay: 0.8 },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260514_102933_4e8f73b5-775a-4179-b2fb-472f59063dcd.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay to ensure content readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30 -z-10" />
      
      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[128px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[128px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Floating Tech Cards */}
      {floatingCards.map((card, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:flex items-center gap-3 bg-surface2/80 backdrop-blur-sm border border-white/5 rounded-2xl px-4 py-3 z-20"
          style={{ left: card.x, top: card.y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{ delay: card.delay + 1, duration: 0.6, ease: [0.16, 1, 0.3, 1], repeat: Infinity, repeatType: 'reverse' }}
        >
          <card.icon className="w-5 h-5 text-accent" />
          <span className="text-sm text-primary">{card.label}</span>
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-20"
        style={{ y, opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text Content */}
          <div className="text-center lg:text-left">
            <StaggerContainer staggerDelay={0.1}>
              {/* Status Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 bg-surface2 border border-white/5 rounded-full px-4 py-2 mb-8"
              >
                <motion.span
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm text-muted">Available for internships</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                variants={itemVariants}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary tracking-tight mb-6"
              >
                <span className="block">Dung</span>
                <span className="block text-accent">Nguyen</span>
              </motion.h1>

              {/* Subheading with typing */}
              <motion.div
                variants={itemVariants}
                className="text-lg sm:text-xl md:text-2xl text-muted mb-6 min-h-[2rem]"
              >
                <TypingText
                  text="3rd-Year IT Student • Software Developer"
                  delay={0.5}
                  speed={40}
                />
              </motion.div>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-base md:text-lg text-muted/80 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              >
                Building modern software experiences with clean architecture, scalable systems, and thoughtful design. 
                Passionate about backend development, databases, and creating impactful digital products.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button icon="arrow" href="#projects">
                  View Projects
                </Button>
                <Button variant="secondary" icon="external" href="#contact">
                  Contact Me
                </Button>
              </motion.div>
            </StaggerContainer>

            {/* Tech Badges */}
            <FadeIn delay={1.2} className="mt-12">
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {['TypeScript', 'Java', 'React', 'Node.js', 'MySQL'].map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1.5 bg-surface2 border border-white/5 rounded-full text-xs text-muted"
                    whileHover={{ scale: 1.05, borderColor: 'rgba(207, 202, 183, 0.3)' }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right - Developer Card */}
          <FadeIn delay={0.5} direction="left" className="hidden lg:block">
            <motion.div
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Main Card */}
              <div className="bg-surface2 border border-white/5 rounded-3xl p-6 glow-border">
                {/* Card Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-muted">portfolio.ts</span>
                </div>

                {/* Code Content */}
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex gap-2">
                    <span className="text-purple-400">const</span>
                    <span className="text-blue-400">developer</span>
                    <span className="text-primary"> = {'{'}</span>
                  </div>
                  <div className="pl-6 space-y-2">
                    <div className="flex gap-2">
                      <span className="text-primary">name</span>
                      <span className="text-muted">:</span>
                      <span className="text-green-400">"Nguyen Viet Dung"</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-primary">role</span>
                      <span className="text-muted">:</span>
                      <span className="text-green-400">"Software Developer"</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-primary">university</span>
                      <span className="text-muted">:</span>
                      <span className="text-green-400">"UTH"</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-primary">passion</span>
                      <span className="text-muted">:</span>
                      <span className="text-green-400">"Building software"</span>
                    </div>
                  </div>
                  <div><span className="text-primary">{'}'}</span><span className="text-primary">;</span></div>
                </div>

                {/* Stats Row */}
                <div className="mt-6 pt-6 border-t border-white/5 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">5+</div>
                    <div className="text-xs text-muted">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">3rd</div>
                    <div className="text-xs text-muted">Year IT</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">5+</div>
                    <div className="text-xs text-muted">Languages</div>
                  </div>
                </div>
              </div>

              {/* GitHub Link */}
              <motion.a
                href="https://github.com/JunnDung"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-4 -right-4 bg-surface3 border border-white/5 rounded-2xl p-4 hover:bg-surface2 transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-6 h-6 text-primary" />
              </motion.a>
            </motion.div>
          </FadeIn>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs text-muted uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-accent/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
