import { projects } from '../../data/projects';
import { profile } from '../../data/profile';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Award, Heart } from 'lucide-react';
import { FadeIn, StaggerContainer, itemVariants } from '../animations';

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div 
        className="absolute inset-0 grid-bg opacity-30" 
        style={{ y }}
      />
      
      <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-16 md:mb-20">
          <span className="inline-block text-xs md:text-sm uppercase tracking-[0.2em] text-accent mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            Building AI applications with{' '}
            <span className="font-serif italic text-accent">logic</span>
            ,{' '}
            <span className="font-serif italic text-accent">creativity</span>
            ,<br className="hidden md:block" />
            {' '}and{' '}
            <span className="font-serif italic text-accent">continuous curiosity</span>
            .
          </h2>
        </FadeIn>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Story */}
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              <p className="text-base md:text-lg text-muted/80 leading-relaxed">
                I'm <span className="text-primary font-medium">{profile.name}</span>, an Information Technology student 
                at the <span className="text-accent">University of Transport Ho Chi Minh City (UTH)</span>. 
                I'm developing toward an AI Engineer role by combining machine learning experiments
                with the software needed to make them usable.
              </p>
              <p className="text-base md:text-lg text-muted/80 leading-relaxed">
                My recent work focuses on <span className="text-primary">computer vision and OCR</span>,{' '}
                <span className="text-primary">LLM applications and RAG</span>, and{' '}
                <span className="text-primary">model evaluation</span>. I've fine-tuned YOLO detectors and OCR,
                built tracking pipelines, and contributed retrieval and embedding experiments to a library chatbot.
              </p>
              <p className="text-base md:text-lg text-muted/80 leading-relaxed">
                I connect inference to <span className="text-accent font-medium">FastAPI, databases and web dashboards</span>,
                keep reproducible evaluation evidence, and document where prototypes still need validation.
                My goal is to build useful AI systems and understand how they behave beyond a single demo.
              </p>
            </div>
          </FadeIn>

          {/* Right - Stats & Info */}
          <FadeIn delay={0.4} direction="left">
            <div className="space-y-6">
              {/* Info Cards */}
              <StaggerContainer staggerDelay={0.1}>
                <motion.div
                  variants={itemVariants}
                  className="bg-surface2 border border-white/5 rounded-2xl p-6 card-glow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-1">Education</h3>
                      <p className="text-sm text-muted">University of Transport Ho Chi Minh City</p>
                      <p className="text-xs text-accent mt-1">Bachelor of IT • 2023–Present</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="bg-surface2 border border-white/5 rounded-2xl p-6 card-glow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-1">Focus Areas</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {['Computer Vision', 'LLM & RAG', 'Model Evaluation', 'AI Applications'].map((item) => (
                          <span key={item} className="px-2 py-1 bg-surface3 rounded-lg text-xs text-muted">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="bg-surface2 border border-white/5 rounded-2xl p-6 card-glow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-1">Interests</h3>
                      <p className="text-sm text-muted">
                        Applied ML • Vietnamese NLP • Retrieval Quality •
                        Reproducible Experiments • Open Source
                      </p>
                    </div>
                  </div>
                </motion.div>
              </StaggerContainer>
            </div>
          </FadeIn>
        </div>

        {/* Quick Stats */}
        <FadeIn delay={0.6} className="mt-16 md:mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { value: 'IT', label: 'Student' },
              { value: String(projects.length), label: 'Projects & Contributions' },
              { value: '5+', label: 'Technologies' },
              { value: '∞', label: 'Curiosity' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-surface2/50 border border-white/5 rounded-2xl p-4 md:p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
