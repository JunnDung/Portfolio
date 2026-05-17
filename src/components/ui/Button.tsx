import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  icon?: 'arrow' | 'external' | 'none';
  href?: string;
}

const easing = [0.16, 1, 0.3, 1];

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  icon = 'none',
  href,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 cursor-pointer rounded-full';
  
  const variants = {
    primary: 'bg-primary text-background hover:bg-accent',
    secondary: 'bg-surface2 text-primary border border-white/10 hover:border-white/20 hover:bg-surface3',
    ghost: 'bg-transparent text-primary hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const iconElement = icon === 'arrow' ? (
    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
  ) : icon === 'external' ? (
    <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
  ) : null;

  const buttonContent = (
    <>
      <span>{children}</span>
      {iconElement && (
        <motion.span
          className={`${iconSizes[size]} bg-black/20 rounded-full flex items-center justify-center ml-2`}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2, ease: easing }}
        >
          {iconElement}
        </motion.span>
      )}
    </>
  );

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('//');
    return (
      <motion.a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: easing }}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: easing }}
    >
      {buttonContent}
    </motion.button>
  );
}
