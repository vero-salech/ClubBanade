export const Sports = () => {
    return (
        <section className="bg-neutral-bg py-20 px-6" id="deportes">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h3 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Deportes y Actividades</h3>
                    <p className="text-gray-600 font-light">
                        Fomentamos el desarrollo físico y humano a través de múltiples disciplinas para todas las edades.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-8 rounded shadow-sm border-t-4 border-primary hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="material-symbols-outlined text-primary text-3xl">trophy</span>
                            <h4 className="font-serif text-lg font-bold text-gray-900">Federativos</h4>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-center text-sm text-gray-700 font-medium">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>Hockey
                            </li>
                            <li className="flex items-center text-sm text-gray-700 font-medium">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>Vóley
                            </li>
                            <li className="flex items-center text-sm text-gray-700 font-medium">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>Básquet
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded shadow-sm border-t-4 border-accent hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="material-symbols-outlined text-accent text-3xl">school</span>
                            <h4 className="font-serif text-lg font-bold text-gray-900">Escuelitas</h4>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-center text-sm text-gray-700 font-medium">
                                <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>Hockey
                            </li>
                            <li className="flex items-center text-sm text-gray-700 font-medium">
                                <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>Vóley
                            </li>
                            <li className="flex items-center text-sm text-gray-700 font-medium">
                                <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>Básquet
                            </li>
                            <li className="flex items-center text-sm text-gray-700 font-medium">
                                <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>Fútbol
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded shadow-sm border-t-4 border-primary hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="material-symbols-outlined text-primary text-3xl">pool</span>
                            <h4 className="font-serif text-lg font-bold text-gray-900">Instalaciones</h4>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-center text-sm text-gray-700 font-medium">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>Pileta
                            </li>
                            <li className="flex items-center text-sm text-gray-700 font-medium">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>Gimnasio
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded shadow-sm border-t-4 border-accent hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="material-symbols-outlined text-accent text-3xl">sports_tennis</span>
                            <h4 className="font-serif text-lg font-bold text-gray-900">Tercerizadas</h4>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-center text-sm text-gray-700 font-medium">
                                <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>Tenis
                            </li>
                            <li className="flex items-center text-sm text-gray-700 font-medium">
                                <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>Squash
                            </li>
                            <li className="flex items-center text-sm text-gray-700 font-medium">
                                <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>Pádel
                            </li>
                            <li className="flex items-center text-sm text-gray-700 font-medium">
                                <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>Gimnasia Artística
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
