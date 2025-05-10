import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function initTransitions() {
    gsap.from('.section-transition', {
        scrollTrigger: {
            trigger: '.section-transition',
            start: 'top 80%', // Inicia la animación cuando el 80% de la viewport alcanza la sección
            toggleActions: 'play none none reverse',
            markers: true, // ✅ Agrega esto temporalmente para verificar en pantalla el trigger
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
    });
}
