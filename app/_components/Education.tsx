'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_EDUCATION } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Education = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const items = containerRef.current?.querySelectorAll('.experience-item');

            if (!items?.length) return;

            items.forEach((item, index) => {
                gsap.from(item, {
                    y: 36,
                    opacity: 0,
                    duration: 0.55,
                    delay: index * 0.03,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 88%',
                        toggleActions: 'play none none reverse',
                    },
                });
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section" id="my-education">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Education" />

                <div className="grid gap-14">
                    {MY_EDUCATION.map((item) => (
                        <div
                            key={`${item.title}-${item.company}`}
                            className="experience-item"
                        >
                            <p className="text-xl text-muted-foreground">
                                {item.company}
                            </p>
                            <p className="text-5xl font-anton leading-none mt-3.5 mb-2.5">
                                {item.title}
                            </p>
                            <p className="text-lg text-muted-foreground">
                                {item.duration}
                            </p>
                            {'description' in item && item.description ? (
                                <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground/90">
                                    {item.description}
                                </p>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
