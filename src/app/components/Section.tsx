import React from "react";

interface SectionProps {
    id?: string;
    title?: string;
    children: React.ReactNode;
    className?: string;
}

export default function Section({ id, title, children, className = "" }: SectionProps) {
    return (
        <section id={id} className={className}>
            {title && <h3>{title}</h3>}
            {children}
        </section>
    );
}
