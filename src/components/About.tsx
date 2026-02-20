export const About = () => {
    return (
        <section className="bg-white py-20 px-6 border-b border-gray-100" id="club">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-2">
                        <span className="w-8 h-[2px] bg-primary"></span>
                        <span className="text-gray-500 font-bold uppercase text-xs tracking-widest">Sobre Nosotros</span>
                    </div>
                    <h3 className="font-serif text-3xl text-gray-900 font-bold">Nuestra Historia y Valores</h3>
                    <div className="prose prose-gray text-gray-600">
                        <p>
                            El Club Banade es mucho más que una institución deportiva; es un hogar para cientos de familias que comparten una visión común de respeto, esfuerzo y camaradería.
                        </p>
                        <p className="mt-4">
                            Fundado bajo principios de integración y desarrollo social, trabajamos día a día para preservar nuestras raíces mientras miramos hacia el futuro, ofreciendo instalaciones de calidad y un ambiente seguro.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        <div className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary mt-1">diversity_3</span>
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">Comunidad</h4>
                                <p className="text-xs text-gray-500">Unión familiar y social.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-accent mt-1">history_edu</span>
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">Trayectoria</h4>
                                <p className="text-xs text-gray-500">Más de 75 años de historia.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative h-96 w-full rounded-sm overflow-hidden auto shadow-xl bg-gray-100">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBj63GkTF9bdDZzZevSJ7oavCOKexzBL3RzqrKD8fFGImcEf15NV1lFnuwq_6S13SoGP9aFcaocyY6JTTnBbYdBtCVTfBAKePYQfrpnLQ3GsqaDFh_cwhxkInZivXdgfdnPLrCG8S7g7rIsOOsHWfScCFNnjzZnAKsvJ4-lpfAGd42YuM6qmbHaZxvv5_R3Aw_CqZdYX8ccfpQSqG4LKM9OegaM_pcyc9t7dnTvVPjCw5igW9YkSEJ2iJJtP3ray7nZ4wsw0rmcJjEp")', opacity: 0.9 }}
                    ></div>
                    <div className="absolute inset-0 bg-gray-900/10 mix-blend-multiply"></div>
                </div>
            </div>
        </section>
    );
};
