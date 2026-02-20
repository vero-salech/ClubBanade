import { Sports as SportsSection } from "../components/Sports";

export const Sports = () => {
    return (
        <main className="pt-20">
            <SportsSection />
            <section className="bg-white py-20 px-6 border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-serif text-3xl font-bold mb-8">Horarios de Entrenamiento</h2>
                    <p className="text-gray-600">
                        Próximamente: Grilla completa de días y horarios por disciplina.
                    </p>
                </div>
            </section>
        </main>
    );
};
