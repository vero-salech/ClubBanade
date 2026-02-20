import { Spaces as SpacesSection } from "../components/Spaces";

export const SocialSpaces = () => {
    return (
        <main className="pt-20">
            <SpacesSection />
            <section className="bg-neutral-bg py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-serif text-3xl font-bold mb-8">Reserva de Espacios</h2>
                    <p className="text-gray-600 mb-6">Como socio, podés reservar nuestros quinchos y salones.</p>
                    <button className="bg-primary text-white px-6 py-3 rounded font-bold hover:bg-red-800 transition-colors">
                        Consultar Disponibilidad
                    </button>
                </div>
            </section>
        </main>
    );
};
