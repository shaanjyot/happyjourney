'use client'

import { ReactNode } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

interface ButtonProps extends HTMLMotionProps<'button'> {
    children: ReactNode
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg' | 'xl'
    className?: string
}

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center font-bold tracking-wider uppercase rounded-full transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap'

    const variants = {
        primary: 'bg-coral text-white hover:bg-coral/90 shadow-lg hover:shadow-coral/30',
        secondary: 'bg-dark-navy text-white hover:bg-dark-navy/90 shadow-lg',
        outline: 'border-2 border-dark-navy dark:border-white text-dark-navy dark:text-white hover:bg-dark-navy hover:text-white dark:hover:bg-white dark:hover:text-dark-navy',
        ghost: 'bg-transparent text-dark-navy dark:text-white hover:bg-brand-muted',
    }

    const sizes = {
        sm: 'px-6 py-2.5 text-xs',
        md: 'px-8 py-4 text-sm',
        lg: 'px-12 py-5 text-base',
        xl: 'px-16 py-6 text-lg',
    }

    return (
        <motion.button
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    )
}
