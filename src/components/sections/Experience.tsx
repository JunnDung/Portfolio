import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';
import { FadeIn } from '../animations';
import { timeline } from '../../data/projects';

export function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 lg:py-40 bg-surface"
    >
      <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center mb-16 md:mb-20">
          <span className="inline-block text-xs md:text-sm uppercase tracking-[0.2em] text-accent mb-4">
            Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
            Education & Experience
          </h2>
          <p className="text-base md:text-lg text-muted/80 max-w-2xl mx-auto">
            My academic path and the experiences that have shaped my journey as a developer.
          </p>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent md:-translate-x-1/2" />

          {/* Education */}
          <FadeIn delay={0.2} className="mb-16">
            <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-12">
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-accent rounded-full border-4 border-background md:-translate-x-1/2 -translate-x-1/2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Content - Right side for education */}
              <div className="md:ml-auto md:pl-12">
                <motion.div
                  className="bg-surface2 border border-white/5 rounded-3xl p-6 md:p-8"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-xs uppercase tracking-wider text-accent">Education</span>
                  </div>

                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {timeline.education.school}
                  </h3>
                  
                  <div className="flex flex-wrap gap-3 text-sm text-muted mb-4">
                    <span className="flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5" />
                      {timeline.education.degree}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {timeline.education.period}
                    </span>
                  </div>

                  <p className="text-sm text-muted/80 leading-relaxed">
                    {timeline.education.description}
                  </p>
                </motion.div>
              </div>
            </div>
          </FadeIn>

          {/* Experience Items */}
          <div className="space-y-12">
            {timeline.experience.map((exp, index) => (
              <FadeIn key={index} delay={0.3 + index * 0.15}>
                <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-12">
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-surface3 rounded-full border-2 border-accent md:-translate-x-1/2 -translate-x-1/2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />

                  {/* Alternate layout */}
                  <div className={`${index % 2 === 0 ? 'md:mr-auto md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'}`}>
                    <motion.div
                      className="bg-surface2 border border-white/5 rounded-3xl p-6 md:p-8"
                      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                          <Briefcase className="w-5 h-5 text-accent" />
                        </div>
                        <span className="text-xs uppercase tracking-wider text-accent">{exp.company}</span>
                      </div>

                      <h3 className="text-xl font-semibold text-primary mb-2">
                        {exp.title}
                      </h3>
                      
                      <div className="flex flex-wrap gap-3 text-sm text-muted mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-sm text-muted/80 leading-relaxed">
                        {exp.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Goals Section */}
        <FadeIn delay={0.5} className="mt-20 text-center">
          <div className="bg-surface2 border border-white/5 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Looking Forward
            </h3>
            <p className="text-base md:text-lg text-muted/80 leading-relaxed mb-6">
              I'm actively seeking <span className="text-accent font-medium">internship opportunities</span> in software development 
              where I can apply my skills, learn from experienced developers, and contribute to meaningful projects. 
              I'm particularly interested in backend development, database systems, and full-stack applications.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {['Backend Development', 'Full-Stack', 'Database Systems', 'APIs & Microservices'].map((goal) => (
                <span
                  key={goal}
                  className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm text-accent"
                >
                  {goal}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
