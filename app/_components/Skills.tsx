'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_STACK } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const rows = containerRef.current?.querySelectorAll('.stack-row');

            if (!rows?.length) return;

            rows.forEach((row) => {
                const heading = row.querySelector('.stack-heading');
                const items = row.querySelectorAll('.stack-item');

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: row,
                        start: 'top 88%',
                        toggleActions: 'play none none reverse',
                    },
                });

                tl.from(heading, {
                    opacity: 0,
                    x: -28,
                    duration: 0.45,
                    ease: 'power2.out',
                }).from(
                    items,
                    {
                        opacity: 0,
                        y: 26,
                        duration: 0.42,
                        ease: 'power2.out',
                        stagger: 0.06,
                    },
                    '-=0.2',
                );
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'top 80%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from(containerRef.current, {
                y: 150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section id="my-stack" ref={containerRef}>
            <div className="container">
                <SectionTitle title="My Stack" />

                <div className="space-y-20">
                    {Object.entries(MY_STACK).map(([key, value]) => (
                        <div className="stack-row grid sm:grid-cols-12" key={key}>
                            <div className="sm:col-span-5">
                                <p className="stack-heading text-5xl font-anton leading-none text-muted-foreground uppercase">
                                    {key}
                                </p>
                            </div>

                            <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
                                {value.map((item) => (
                                    <div
                                        className="stack-item flex gap-3.5 items-center leading-none"
                                        key={item.name}
                                    >
                                        {item.icon ? (
                                            <div>
                                                <Image
                                                    src={item.icon}
                                                    alt={item.name}
                                                    width={40}
                                                    height={40}
                                                    className="size-10 shrink-0 object-contain"
                                                />
                                            </div>
                                        ) : null}
                                        <span className="text-2xl">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
