import { profile } from '../../data/profile';
import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, Facebook } from 'lucide-react';
import { FadeIn, StaggerContainer, itemVariants } from '../animations';
import { Button } from '../ui/Button';

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 lg:py-40"
    >
      <div className="relative max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Background Elements */}
        <div className="absolute inset-0 grid-bg opacity-20 -z-10" />
        
        {/* Large Statement */}
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight mb-6">
            Let's build something{' '}
            <span className="font-serif italic text-accent">meaningful</span>
            {' '}together.
          </h2>
          <p className="text-base md:text-lg text-muted/80 max-w-xl mx-auto">
            Whether it's an AI Engineer internship, a project collaboration, or a conversation about computer vision and LLM applications — I'd love to hear from you.
          </p>
        </FadeIn>

        {/* Contact Cards */}
        <StaggerContainer staggerDelay={0.1} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            {
              icon: Github,
              label: 'GitHub',
              value: '@JunnDung',
              href: profile.github,
              color: 'hover:bg-surface2 hover:border-white/10',
            },
            {
              icon: Linkedin,
              label: 'LinkedIn',
              value: profile.name,
              href: profile.linkedin,
              color: 'hover:bg-blue-500/10 hover:border-blue-500/20',
            },
            {
              icon: Mail,
              label: 'Email',
              value: profile.email,
              href: `mailto:${profile.email}`,
              color: 'hover:bg-red-500/10 hover:border-red-500/20',
            },
            {
              icon: Facebook,
              label: 'Facebook',
              value: 'Dũng Nguyễn',
              href: profile.facebook,
              color: 'hover:bg-blue-500/10 hover:border-blue-500/20',
            },
          ].map((contact) => (
            <motion.a
              key={contact.label}
              variants={itemVariants}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`group bg-surface border border-white/5 rounded-2xl p-6 text-center transition-all duration-300 ${contact.color}`}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-surface2 rounded-xl flex items-center justify-center group-hover:bg-surface3 transition-colors">
                <contact.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-medium text-primary mb-1">{contact.label}</h3>
              <p className="text-sm text-muted break-words">{contact.value}</p>
            </motion.a>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn delay={0.4} className="text-center">
          <p className="text-muted mb-6">
            Prefer email? Reach out directly at {profile.email}
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            href={`mailto:${profile.email}`}
            icon="arrow"
          >
            Send me a message
          </Button>
        </FadeIn>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div>
              <p className="text-lg font-semibold text-primary">{profile.name}</p>
              <p className="text-sm text-muted">{profile.headline}</p>
            </div>
            
            <div className="flex items-center gap-6">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors"
              >
                <Github aria-hidden="true" className="w-5 h-5" /><span className="sr-only">GitHub profile</span>
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="text-muted hover:text-primary transition-colors"
              >
                <Mail aria-hidden="true" className="w-5 h-5" /><span className="sr-only">Send email</span>
              </a>
              <a
                href={profile.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors"
              >
                <Facebook aria-hidden="true" className="w-5 h-5" /><span className="sr-only">Facebook profile</span>
              </a>
            </div>

            <p className="text-xs text-muted/60">
              © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
