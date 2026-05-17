import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork, ArrowUpRight } from 'lucide-react';
import { FadeIn, StaggerContainer, itemVariants } from '../animations';
import { projects } from '../../data/projects';

const categoryColors = {
  backend: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  web: 'bg-green-500/10 text-green-400 border-green-500/20',
  mobile: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  coursework: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
};

const languageIcons: Record<string, string> = {
  TypeScript: 'TS',
  JavaScript: 'JS',
  Java: '☕',
  Kotlin: '🎯',
  Python: '🐍',
  PHP: '🐘',
  Rust: '🦀',
};

export function Projects() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 lg:py-40"
    >
      <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-16 md:mb-20">
          <span className="inline-block text-xs md:text-sm uppercase tracking-[0.2em] text-accent mb-4">
            Featured Projects
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
            Things I've Built
          </h2>
          <p className="text-base md:text-lg text-muted/80 max-w-2xl mx-auto">
            A selection of projects I've worked on, from academic assignments to personal explorations.
          </p>
        </FadeIn>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-primary mb-6">Other Projects</h3>
          <StaggerContainer staggerDelay={0.05}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="bg-surface2 border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{languageIcons[project.language] || '📁'}</span>
                      <h4 className="font-medium text-primary group-hover:text-accent transition-colors">
                        {project.name}
                      </h4>
                    </div>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-sm text-muted line-clamp-2 mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-surface3 rounded text-xs text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </StaggerContainer>
        </div>

        {/* GitHub CTA */}
        <FadeIn delay={0.3} className="text-center">
          <motion.a
            href="https://github.com/JunnDung"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-surface2 border border-white/5 rounded-full hover:border-white/10 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">View all on GitHub</span>
            <ArrowUpRight className="w-4 h-4 text-muted" />
          </motion.a>
        </FadeIn>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <motion.div
      className="group bg-surface2 border border-white/5 rounded-3xl overflow-hidden card-glow h-full"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Card Header with Language */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <div className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[project.category]}`}>
            {project.category.toUpperCase()}
          </div>
          <div className="flex items-center gap-2 text-xs text-muted">
            <span className="text-sm">{languageIcons[project.language] || '📁'}</span>
            <span>{project.language}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
          {project.name}
        </h3>
        <p className="text-sm text-muted leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Full Description */}
      <div className="px-6 pb-4">
        <p className="text-sm text-muted/70 leading-relaxed">
          {project.fullDescription}
        </p>
      </div>

      {/* Technologies */}
      <div className="px-6 pb-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-surface3 rounded-lg text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-6 py-4 border-t border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-4 text-xs text-muted">
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5" />
            <span>{project.stars}</span>
          </div>
          <div className="flex items-center gap-1">
            <GitFork className="w-3.5 h-3.5" />
            <span>{project.forks}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-surface3 rounded-lg hover:bg-surface hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-4 h-4" />
          </motion.a>
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-surface3 rounded-lg hover:bg-surface hover:text-accent transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
