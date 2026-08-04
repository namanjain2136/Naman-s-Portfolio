'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_CERTIFICATIONS } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import { useRef, useState, MouseEvent } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Certifications = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageContainer = useRef<HTMLDivElement>(null);
    const [selectedCertificate, setSelectedCertificate] = useState<string | null>(
        MY_CERTIFICATIONS[0]?.title || null,
    );

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

    useGSAP(
        (context, contextSafe) => {
            if (window.innerWidth < 768) {
                setSelectedCertificate(null);
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
            setSelectedCertificate(null);
            return;
        }

        setSelectedCertificate(title);
    };

    return (
        <section className="pb-section pt-section" id="my-certifications">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Certifications" />

                <div className="group/certificates relative">
                    {selectedCertificate && (
                        <div className="max-md:hidden absolute right-0 top-0 z-[1] pointer-events-none w-[330px] xl:w-[540px] h-[255px] xl:h-[390px] overflow-hidden rounded-lg opacity-0" ref={imageContainer}>
                            {MY_CERTIFICATIONS.map((item) => (
                                <Image
                                    src={item.thumbnail}
                                    alt={item.title}
                                    width="400"
                                    height="500"
                                    className={cn('absolute inset-0 transition-all duration-500 w-full h-full object-contain p-2', {
                                        'opacity-0': item.title !== selectedCertificate,
                                    })}
                                    key={item.title}
                                />
                            ))}
                        </div>
                    )}

                    <div className="flex flex-col max-md:gap-10">
                        {MY_CERTIFICATIONS.map((item) => (
                            <a
                                href={item.thumbnail}
                                target="_blank"
                                rel="noreferrer"
                                key={`${item.title}-${item.company}`}
                                className="experience-item group leading-none py-5 md:border-b first:!pt-0 last:pb-0 last:border-none md:group-hover/certificates:opacity-30 md:hover:!opacity-100 transition-all"
                                onMouseEnter={() => handleMouseEnter(item.title)}
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
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
