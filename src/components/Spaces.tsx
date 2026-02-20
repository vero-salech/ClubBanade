export const Spaces = () => {
    return (
        <section className="py-20 px-6 bg-white" id="espacios">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-4">
                    <div>
                        <h3 className="font-serif text-3xl font-bold text-gray-900 mb-2">Espacios Sociales</h3>
                        <p className="text-gray-600">Áreas diseñadas para el disfrute de nuestros socios.</p>
                    </div>
                    <a className="hidden md:inline-flex items-center text-primary font-semibold hover:text-red-800 transition-colors text-sm mt-4 md:mt-0" href="#">
                        Ver galería de fotos <span className="material-symbols-outlined text-sm ml-1">arrow_forward_ios</span>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="group cursor-default">
                        <div className="overflow-hidden rounded-sm mb-4 relative h-64 bg-gray-200">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBj63GkTF9bdDZzZevSJ7oavCOKexzBL3RzqrKD8fFGImcEf15NV1lFnuwq_6S13SoGP9aFcaocyY6JTTnBbYdBtCVTfBAKePYQfrpnLQ3GsqaDFh_cwhxkInZivXdgfdnPLrCG8S7g7rIsOOsHWfScCFNnjzZnAKsvJ4-lpfAGd42YuM6qmbHaZxvv5_R3Aw_CqZdYX8ccfpQSqG4LKM9OegaM_pcyc9t7dnTvVPjCw5igW9YkSEJ2iJJtP3ray7nZ4wsw0rmcJjEp")' }}
                            ></div>
                        </div>
                        <h4 className="font-serif text-xl font-bold text-gray-900 mb-2">Buffet &amp; Restaurant</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Un ambiente cálido para disfrutar de almuerzos y cenas en familia, con un menú variado y atención personalizada.
                        </p>
                    </div>

                    <div className="group cursor-default">
                        <div className="overflow-hidden rounded-sm mb-4 relative h-64 bg-gray-200">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDrAdgvtmvvYP8Djrn0nuMH-bkX9g2O55Ecnuw0YFvN1FX4-CniY8NTePL2D9ODIXAOqLI_yUInQ_eGCDP-lMa9s0iBOM7oU1d5khK9c8dEMuM1O34nB9A2cU92Ri3J_pQ01Auxkr13jpnR0i_W4WZIfGPePDGzdbFqrB1sZf39EdSzPv30GVXk_X1XSp5FR8OY4z7hsC65zErEVZAWS5pAsIyaFovYRubTDNErTtFKoNvNI45m1srsGqdZLQ80Q_0hoRIsFk9XyIWq")' }}
                            ></div>
                        </div>
                        <h4 className="font-serif text-xl font-bold text-gray-900 mb-2">Quinchos y Parrillas</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Espacios equipados para reuniones. <span className="text-primary font-semibold">Tasas diferenciadas para socios</span>, ideales para celebraciones privadas.
                        </p>
                    </div>

                    <div className="group cursor-default">
                        <div className="overflow-hidden rounded-sm mb-4 relative h-64 bg-gray-200">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAvq1KmzfZrptsZ9F5-34JIJA2l5LLn6aiSINivmm6GTc9qvp_B-AE9hTwVOSTe_iARHsCMKFC6mPLsLVdyIxHIktk1Wspt45O5RjWCdngFLe3QyDR7cS7tsswhZkxVDcHZyG7hutfXdn4rrJn9z9t2uxiBXAfD09cmQuuD_DOhJUvPShjomZ8OCxNSXbAKDGKvUilwhJ28BCQ-py4V0q8Gv-8VL3yJhjkkqfe3MnUGZANEMmlYVP-nKEU2z0oEtBqAOTUjr3N6TSm4")' }}
                            ></div>
                        </div>
                        <h4 className="font-serif text-xl font-bold text-gray-900 mb-2">Salón de Eventos</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Salón principal disponible para grandes eventos sociales y corporativos, con capacidad adaptable a sus necesidades.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
