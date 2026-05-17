import { motion } from 'framer-motion';
import { Code, Layers, Database, Wrench } from 'lucide-react';
import { FadeIn, StaggerContainer, itemVariants } from '../animations';
import { techStack } from '../../data/projects';

const categoryIcons = {
  languages: Code,
  frontend: Layers,
  backend: Database,
  tools: Wrench,
};

const categoryLabels = {
  languages: 'Programming Languages',
  frontend: 'Frontend',
  backend: 'Backend & Database',
  tools: 'Tools & Platforms',
};

export function TechStack() {
  return (
    <section
      id="tech"
      className="relative py-24 md:py-32 lg:py-40 bg-surface"
    >
      <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-16 md:mb-20">
          <span className="inline-block text-xs md:text-sm uppercase tracking-[0.2em] text-accent mb-4">
            Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
            Technologies I Work With
          </h2>
          <p className="text-base md:text-lg text-muted/80 mt-4 max-w-2xl mx-auto">
            The tools and technologies I've learned and used throughout my journey as a software developer.
          </p>
        </FadeIn>

        {/* Tech Categories */}
        <div className="space-y-12 md:space-y-16">
          {(Object.keys(techStack) as Array<keyof typeof techStack>).map((category, categoryIndex) => {
            const Icon = categoryIcons[category];
            const items = techStack[category];
            
            return (
              <FadeIn key={category} delay={categoryIndex * 0.15}>
                <div className="bg-surface2 border border-white/5 rounded-3xl p-6 md:p-8">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary">
                      {categoryLabels[category]}
                    </h3>
                  </div>

                  {/* Tech Pills */}
                  <StaggerContainer staggerDelay={0.03}>
                    <div className="flex flex-wrap gap-3">
                      {items.map((tech) => (
                        <motion.div
                          key={tech.name}
                          variants={itemVariants}
                          className="group relative"
                        >
                          <motion.div
                            className="px-4 py-2.5 bg-surface3 border border-white/5 rounded-xl flex items-center gap-3 cursor-pointer"
                            whileHover={{ 
                              scale: 1.02, 
                              borderColor: 'rgba(207, 202, 183, 0.3)',
                              boxShadow: '0 0 20px rgba(207, 202, 183, 0.1)'
                            }}
                            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <span className="text-base">{tech.icon}</span>
                            <span className="text-sm font-medium text-primary">{tech.name}</span>
                          </motion.div>

                          {/* Hover Glow Effect */}
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
                        </motion.div>
                      ))}
                    </div>
                  </StaggerContainer>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Learning Note */}
        <FadeIn delay={0.8} className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface2/50 border border-white/5 rounded-full">
            <motion.span
              className="w-2 h-2 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm text-muted">
              Always learning and exploring new technologies
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
