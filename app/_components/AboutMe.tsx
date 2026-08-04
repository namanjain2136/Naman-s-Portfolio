'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top bottom',
                    end: 'top 80%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from(container.current, {
                y: 150,
                opacity: 0,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
                    A dedicated learner with enthusiasm in developing
                    projects across various domains and a drive for
                    problem-solving. Passionate about learning and excited to contribute to
                    innovative projects that make a difference.
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    This is me.
                </p>

                <div className="grid md:grid-cols-12 mt-9">
                    <div className="md:col-span-5">
                        <p className="text-5xl slide-up-and-fade">
                            Recognized for quickly adapting to new technologies, collaborating effectively in team environments and taking ownership of projects from ideation to implementation.
                        </p>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[450px]">
                            <p className="slide-up-and-fade">
                                Technology enthusiast with a passion for
                                continuous learning and developing multi-domain
                                projects. Highly adaptable to dynamic
                                environments, I combine solid problem-solving
                                abilities with a proactive approach to
                                leadership and operations.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                I specialize in bridging the gap between
                                technical innovation and operational
                                management, with a strong focus on building
                                creative, high-impact solutions in evolving
                                environments.

                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                Experienced using GitHub Copilot, ChatGPT, and modern AI-powered workflows to accelerate full-stack development, debugging, documentation, and rapid prototyping.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
