import { ReactNode } from "react";

interface SectionProps {
    title: string;
    children: ReactNode;
    id?: string;
}

export default function Section({ title, children, id }: SectionProps) {
    return (
        <section id={id}>
            <h3>{title}</h3>
            {children}
        </section>
    );
}
