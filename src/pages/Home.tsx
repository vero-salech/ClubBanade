import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Sports } from "../components/Sports";
import { Spaces } from "../components/Spaces";
import { SEO } from "../components/SEO";

export const Home = () => {
    return (
        <main>
            <SEO
                title="Club Social y Deportivo en Martínez"
                description="Club Banco Nacional de Desarrollo — Institución social y deportiva en Martínez, Buenos Aires. Deportes federativos, escuelitas, pileta, gimnasio, quinchos y más. Fundado en 1945."
                path="/"
            />
            <Hero />
            <About />
            <Sports />
            <Spaces />
        </main>
    );
};
