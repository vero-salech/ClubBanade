import { About as AboutSection } from "../components/About";

export const About = () => {
    return (
        <main className="pt-20">
            <AboutSection />
            <section className="bg-neutral-bg py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-serif text-3xl font-bold mb-8">Nuestra Filosofía</h2>
                    <p className="text-gray-600 mb-4">
                        Contenido detallado sobre la historia del club, fundadores y visión a futuro...
                    </p>
                </div>
            </section>
        </main>
    );
};
