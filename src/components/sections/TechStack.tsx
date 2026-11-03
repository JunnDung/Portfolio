import { motion } from 'framer-motion';
import { Code, Layers, Database, Wrench, Brain, Search } from 'lucide-react';
import { FadeIn, StaggerContainer, itemVariants } from '../animations';
import { techStack, learningHighlights } from '../../data/projects';

const categoryIcons = {
  languages: Code,
  ai: Brain,
  llm: Search,
  frontend: Layers,
  backend: Database,
  tools: Wrench,
};

const categoryLabels = {
  languages: 'Programming Languages',
  ai: 'Machine Learning & Computer Vision',
  llm: 'LLM Applications & Retrieval',
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
            Tools I've applied in AI experiments and software projects, alongside the concepts I'm continuing to learn.
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

        <div className="mt-12 md:mt-16">
          <h3 className="text-2xl font-semibold text-primary mb-6">Recently Applied in Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {learningHighlights.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface2 border border-white/5 rounded-2xl p-6 hover:border-accent/30 transition-colors"
              >
                <h4 className="text-lg font-semibold text-accent mb-3">{item.title}</h4>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                <span className="inline-block mt-4 text-xs text-accent">View project evidence ↗</span>
              </a>
            ))}
          </div>
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
