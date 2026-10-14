'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_EXPERIENCE } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import { useRef, useState, MouseEvent } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageContainer = useRef<HTMLDivElement>(null);
    const [selectedExperience, setSelectedExperience] = useState<string | null>(
        MY_EXPERIENCE[0]?.title || null,
    );

    useGSAP(
        () => {
            const items =
                containerRef.current?.querySelectorAll('.experience-item');

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

    useGSAP(
        (context, contextSafe) => {
            if (window.innerWidth < 768) {
                setSelectedExperience(null);
                return;
            }

            const handleMouseMove = contextSafe?.((e: MouseEvent) => {
                if (!containerRef.current || !imageContainer.current) return;

                const containerRect = containerRef.current.getBoundingClientRect();
                const imageRect = imageContainer.current.getBoundingClientRect();
                const offsetTop = e.clientY - containerRect.y;

                if (
                    containerRect.y > e.clientY ||
                    containerRect.bottom < e.clientY ||
                    containerRect.x > e.clientX ||
                    containerRect.right < e.clientX
                ) {
                    return gsap.to(imageContainer.current, {
                        duration: 0.3,
                        opacity: 0,
                    });
                }

                gsap.to(imageContainer.current, {
                    y: offsetTop - imageRect.height / 2,
                    duration: 1,
                    opacity: 1,
                });
            }) as any;

            window.addEventListener('mousemove', handleMouseMove);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };
        },
        { scope: containerRef },
    );

    const handleMouseEnter = (title: string) => {
        if (window.innerWidth < 768) {
            setSelectedExperience(null);
            return;
        }

        setSelectedExperience(title);
    };

    return (
        <section className="py-section" id="my-experience">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Experiences" />

                <div className="group/experiences relative">
                    {selectedExperience && (
                        <div className="max-md:hidden absolute right-0 top-0 z-[1] pointer-events-none w-[330px] xl:w-[540px] h-[255px] xl:h-[390px] overflow-hidden rounded-lg opacity-0" ref={imageContainer}>
                            {MY_EXPERIENCE.filter((item) => item.thumbnail).map((item) => (
                                <Image
                                    src={item.thumbnail!}
                                    alt={`${item.company} experience`}
                                    width="500"
                                    height="320"
                                    className={cn('absolute inset-0 transition-all duration-500 w-full h-full object-contain p-2', {
                                        'opacity-0': item.title !== selectedExperience,
                                    })}
                                    key={`${item.title}-${item.company}`}
                                />
                            ))}
                        </div>
                    )}

                    <div className="grid gap-14">
                        {MY_EXPERIENCE.map((item) => (
                            <div
                                key={`${item.title}-${item.company}`}
                                className="experience-item group leading-none py-5 md:border-b first:!pt-0 last:pb-0 last:border-none md:group-hover/experiences:opacity-30 md:hover:!opacity-100 transition-all"
                                onMouseEnter={() => item.thumbnail && handleMouseEnter(item.title)}
                            >
                                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                                    <div className="flex-1">
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

                                    {item.thumbnail ? (
                                        <a
                                            href={item.thumbnail}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="block w-full max-w-[260px] shrink-0 overflow-hidden rounded-xl border border-border/80 bg-background/50 shadow-sm transition-transform duration-300 hover:scale-[1.01]"
                                            onMouseEnter={() => handleMouseEnter(item.title)}
                                        >
                                            <Image
                                                src={item.thumbnail}
                                                alt={`${item.company} certificate`}
                                                width={500}
                                                height={320}
                                                className="h-auto w-full object-cover"
                                            />
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experiences;
