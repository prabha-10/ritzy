import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full transition-all duration-300 font-semibold tracking-wide focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed active:scale-95";

  const variants = {
    primary: "bg-smart-accent text-white hover:bg-smart-accentHover shadow-lg shadow-smart-accent/20",
    secondary: "bg-smart-dark text-white hover:bg-black",
    ghost: "bg-transparent text-smart-text hover:bg-smart-bg",
    outline: "border-2 border-smart-text text-smart-text hover:bg-smart-text hover:text-white",
    white: "bg-white text-smart-text hover:bg-gray-50",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};