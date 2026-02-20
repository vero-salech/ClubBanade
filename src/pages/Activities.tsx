export const Activities = () => {
    return (
        <main className="pt-20">
            <section className="bg-white py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="font-serif text-4xl font-bold text-gray-900 mb-6">Actividades del Club</h1>
                    <p className="text-gray-600 mb-12">Explorá todas las actividades recreativas y culturales que tenemos para vos.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 bg-neutral-bg rounded border-l-4 border-primary">
                            <h3 className="font-serif text-xl font-bold mb-4">Yoga y Bienestar</h3>
                            <p className="text-sm text-gray-600">Clases semanales para todos los niveles.</p>
                        </div>
                        <div className="p-8 bg-neutral-bg rounded border-l-4 border-accent">
                            <h3 className="font-serif text-xl font-bold mb-4">Escuela de Ajedrez</h3>
                            <p className="text-sm text-gray-600">Desarrollá tu mente con nuestros expertos.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
