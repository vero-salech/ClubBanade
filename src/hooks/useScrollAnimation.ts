import { useEffect, useRef } from "react";

/**
 * Hook que aplica animación fade-in-up a un elemento cuando entra en viewport.
 * Usa IntersectionObserver para eficiencia (no dispara en cada scroll).
 *
 * @param threshold - Porcentaje del elemento visible para activar (0.0 a 1.0)
 * @param rootMargin - Margen extra para anticipar la animación (ej: "0px 0px -60px 0px")
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
    threshold = 0.15,
    rootMargin = "0px 0px -60px 0px"
) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("scroll-visible");
                    observer.unobserve(el); // animate only once
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    return ref;
}

/**
 * Hook para animar múltiples hijos de un contenedor con delay escalonado.
 * Ideal para grids de tarjetas.
 *
 * @param staggerDelay - Delay entre cada hijo (ms)
 */
export function useStaggerAnimation<T extends HTMLElement = HTMLDivElement>(
    staggerDelay = 100
) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const container = ref.current;
        if (!container) return;

        const children = container.querySelectorAll(".scroll-fade-in");

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    children.forEach((child, i) => {
                        setTimeout(() => {
                            child.classList.add("scroll-visible");
                        }, i * staggerDelay);
                    });
                    observer.unobserve(container);
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
        );

        observer.observe(container);
        return () => observer.disconnect();
    }, [staggerDelay]);

    return ref;
}
