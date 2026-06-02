import React from "react";

interface SectionProps {
    id?: string;
    title?: string;
    children: React.ReactNode;
    className?: string;
}

export default function Section({ id, title, children, className = "" }: SectionProps) {
    return (
        <section 
            id={id} 
            className={`max-w-5xl mx-auto px-6 py-10 md:py-14 ${className}`}
        >
            {title && (
                <div className="flex items-center mb-8">
                    {/* Visual marker bar */}
                    <div className="w-1.5 h-6 rounded-full bg-gradient-to-b from-brand-start to-brand-end mr-4" />
                    <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-theme-text-title">
                        {title}
                    </h3>
                </div>
            )}
            <div>
                {children}
            </div>
        </section>
    );
}
