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
            Whether it's an internship opportunity, a project collaboration, or just a conversation about software development — I'd love to hear from you.
          </p>
        </FadeIn>

        {/* Contact Cards */}
        <StaggerContainer staggerDelay={0.1} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            {
              icon: Github,
              label: 'GitHub',
              value: '@JunnDung',
              href: 'https://github.com/JunnDung',
              color: 'hover:bg-surface2 hover:border-white/10',
            },
            {
              icon: Linkedin,
              label: 'LinkedIn',
              value: 'Dung Nguyen Viet',
              href: 'https://www.linkedin.com/in/junndung/',
              color: 'hover:bg-blue-500/10 hover:border-blue-500/20',
            },
            {
              icon: Mail,
              label: 'Email',
              value: 'junndung2005@gmail.com',
              href: 'mailto:junndung2005@gmail.com',
              color: 'hover:bg-red-500/10 hover:border-red-500/20',
            },
            {
              icon: Facebook,
              label: 'Facebook',
              value: 'Dũng Nguyễn',
              href: 'https://www.facebook.com/Junn2005/',
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
              <p className="text-sm text-muted truncate">{contact.value}</p>
            </motion.a>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn delay={0.4} className="text-center">
          <p className="text-muted mb-6">
            Prefer email? Reach out directly at:
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            href="mailto:dungnv.ith@email.com"
            icon="arrow"
          >
            Send me a message
          </Button>
        </FadeIn>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div>
              <p className="text-lg font-semibold text-primary">Dung Nguyen</p>
              <p className="text-sm text-muted">3rd-Year IT Student • UTH</p>
            </div>
            
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/JunnDung"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:dungnv.ith@email.com"
                className="text-muted hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/Junn2005/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>

            <p className="text-xs text-muted/60">
              © 2026 Dung Nguyen. Built with React & Tailwind.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
