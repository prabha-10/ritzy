import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
  return (
    <section id={id} className={`py-16 md:py-24 px-6 md:px-12 lg:px-16 ${className}`}>
      <div className="max-w-[1440px] mx-auto">
        {children}
      </div>
    </section>
  );
};