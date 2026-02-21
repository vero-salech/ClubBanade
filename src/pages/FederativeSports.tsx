
import canchaHockeyImg from "../assets/CanchaHockey3.png";
import canchaBasquetImg from "../assets/CanchaBasquet.png";
import voleyImg from "../assets/Voley.png";

const DISCIPLINES = [
    {
        title: "Hockey",
        icon: "sports_hockey",
        description: "Competencia de alto nivel en ligas metropolitanas con enfoque en técnica y trabajo en equipo.",
        schedule: "Lunes a Viernes desde las 18 hs",
        coordinator: { name: "Virginia Morelli", phone: "11-6602-3750" },
        coordinatorLabel: "Secretaria Administrativa",
        instagram: "@hockeybanadeoficial"
    },
    {
        title: "Vóley",
        icon: "sports_volleyball",
        description: "Entrenamiento técnico riguroso enfocado en la formación de equipos competitivos nacionales.",
        schedule: "Lunes a Viernes desde las 18 hs",
        coordinator: { name: "Walter Franco", phone: "11-3061-1374" },
        instagram: "@banadevoley"
    },
    {
        title: "Básquet",
        icon: "sports_basketball",
        description: "Pasión y compromiso en cada cuarto. Formamos líderes dentro y fuera de la cancha.",
        schedule: "Lunes, Miércoles y Viernes desde las 18 hs",
        coordinator: { name: "Gustavo Moyano", phone: "11-4195-0309" },
        instagram: "@banadebasquet"
    }
];

export const FederativeSports = () => {
    return (
        <div>
            {/* Hero */}
            <section className="relative bg-dark text-white py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1461896836934-bd45ba8920c7?w=1920&q=80')] bg-cover bg-center opacity-40"></div>
                <div className="relative z-20 max-w-7xl mx-auto">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-12 h-[1px] bg-primary"></span>
                        <span className="text-primary font-bold uppercase text-xs tracking-widest">Competitivo</span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Deportes Federativos</h2>
                    <p className="text-gray-300 font-light text-lg max-w-2xl">
                        Representamos al club en las competencias oficiales con orgullo, compromiso y excelencia deportiva.
                    </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-2.5 flex z-30 opacity-70">
                    <div className="w-1/3 bg-black"></div>
                    <div className="w-1/3 bg-primary"></div>
                    <div className="w-1/3 bg-accent"></div>
                </div>
            </section>

            {/* Disciplines */}
            <section className="bg-neutral-bg py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <span className="w-12 h-[1px] bg-primary/30"></span>
                            <span className="text-primary font-bold uppercase text-xs tracking-widest">Disciplinas</span>
                            <span className="w-12 h-[1px] bg-primary/30"></span>
                        </div>
                        <h3 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestras Disciplinas</h3>
                        <p className="text-gray-600 font-light max-w-xl mx-auto">
                            Formación técnica y alto rendimiento en las ligas más importantes del país.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {DISCIPLINES.map((d) => (
                            <div key={d.title} className="bg-white rounded-xl border-t-4 border-primary shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-8">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary text-2xl">{d.icon}</span>
                                    </div>
                                    <h4 className="font-serif text-xl font-bold text-gray-900">{d.title}</h4>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-3">{d.description}</p>
                                {d.instagram && (
                                    <a href={`https://instagram.com/${d.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-primary font-semibold hover:underline mb-5">
                                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C16.67.014 16.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                                        {d.instagram}
                                    </a>
                                )}
                                <div className="space-y-3">
                                    <div className="bg-neutral-bg rounded-lg p-3">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Horarios</span>
                                        <span className="text-sm text-gray-800 font-medium">{d.schedule}</span>
                                    </div>
                                    <div className="bg-neutral-bg rounded-lg p-3">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">{d.coordinatorLabel || "Coordinador"}</span>
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary text-lg">person</span>
                                            <div>
                                                <span className="text-sm text-gray-800 font-medium block">{d.coordinator.name}</span>
                                                <a href={`tel:${d.coordinator.phone}`} className="text-xs text-primary font-medium hover:underline">{d.coordinator.phone}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Instalaciones */}
            <section className="bg-neutral-bg py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <span className="w-12 h-[1px] bg-accent/50"></span>
                            <span className="text-accent font-bold uppercase text-xs tracking-widest" style={{ textShadow: '0 0 0 #000' }}>Espacios</span>
                            <span className="w-12 h-[1px] bg-accent/50"></span>
                        </div>
                        <h3 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestras Instalaciones</h3>
                        <p className="text-gray-600 font-light max-w-xl mx-auto">
                            Espacios de primer nivel para el entrenamiento y la competencia de nuestros equipos.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <img src={canchaHockeyImg} alt="Cancha de Hockey" className="h-48 w-full object-cover" />
                            <div className="p-5">
                                <h4 className="font-serif text-lg font-bold text-gray-900 mb-1">Cancha de Hockey</h4>
                                <p className="text-sm text-gray-500">Cancha sintética reglamentaria para entrenamientos y partidos oficiales.</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <img src={canchaBasquetImg} alt="Canchas de Básquet" className="h-48 w-full object-cover object-bottom" />
                            <div className="p-5">
                                <h4 className="font-serif text-lg font-bold text-gray-900 mb-1">Canchas de Básquet</h4>
                                <p className="text-sm text-gray-500">Canchas techadas y descubiertas con tableros profesionales y pisos de madera.</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <img src={voleyImg} alt="Canchas de Vóley" className="h-48 w-full object-cover" />
                            <div className="p-5">
                                <h4 className="font-serif text-lg font-bold text-gray-900 mb-1">Canchas de Vóley</h4>
                                <p className="text-sm text-gray-500">Canchas reglamentarias con red oficial para entrenamiento y competencia.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* CTA */}
            <section className="bg-dark text-white py-16 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <span className="material-symbols-outlined text-accent text-4xl mb-4">sports_score</span>
                    <h3 className="font-serif text-3xl font-bold mb-4">¿Querés sumarte a nuestros equipos?</h3>
                    <p className="text-gray-400 font-light">
                        En todos los casos, contactá primero al coordinador de la disciplina que te interese, para confirmar horarios y disponibilidad de vacantes. Luego de las clases de prueba, si decidís continuar, podrás formalizar la inscripción y realizar el pago de la cuota y arancel deportivo correspondiente en la administración del Club.
                    </p>
                </div>
            </section>
        </div>
    );
};
