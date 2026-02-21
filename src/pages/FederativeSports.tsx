import { Link } from "react-router-dom";

const DISCIPLINES = [
    {
        title: "Hockey",
        icon: "sports_hockey",
        description: "Competencia de alto nivel en ligas metropolitanas con enfoque en técnica y trabajo en equipo.",
        schedule: "Lunes a Viernes 18:00 - 21:00 hs",
        categories: ["Primera", "Reserva", "Juveniles"],
        color: "primary"
    },
    {
        title: "Vóley",
        icon: "sports_volleyball",
        description: "Entrenamiento técnico riguroso enfocado en la formación de equipos competitivos nacionales.",
        schedule: "Martes y Jueves 19:00 - 22:00 hs",
        categories: ["Primera", "Reserva", "Juveniles"],
        color: "primary"
    },
    {
        title: "Básquet",
        icon: "sports_basketball",
        description: "Pasión y compromiso en cada cuarto. Formamos líderes dentro y fuera de la cancha.",
        schedule: "Lunes, Miércoles y Viernes 17:00 - 20:00 hs",
        categories: ["Primera", "Reserva", "Juveniles"],
        color: "primary"
    }
];

const ACHIEVEMENTS = [
    { year: "2023", title: "Campeones Metropolitanos", detail: "Hockey Masculino — Primera División A" },
    { year: "2022", title: "Ascenso Nacional", detail: "Vóley Femenino — Clasificación Liga Nacional" },
    { year: "2021", title: "Copa de Oro Formativas", detail: "Básquet — Categoría U17 Invictos" },
    { year: "2019", title: "Fair Play Award", detail: "Reconocimiento Institucional a la Excelencia" },
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
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">{d.description}</p>
                                <div className="space-y-4">
                                    <div className="bg-neutral-bg rounded-lg p-3">
                                        <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1">Horarios</span>
                                        <span className="text-sm text-gray-800 font-medium">{d.schedule}</span>
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">Categorías</span>
                                        <div className="flex gap-2 flex-wrap">
                                            {d.categories.map((cat) => (
                                                <span key={cat} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">{cat}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section className="bg-white py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <span className="w-12 h-[1px] bg-accent/50"></span>
                            <span className="text-accent font-bold uppercase text-xs tracking-widest" style={{ textShadow: '0 0 0 #000' }}>Palmarés</span>
                            <span className="w-12 h-[1px] bg-accent/50"></span>
                        </div>
                        <h3 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Logros</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {ACHIEVEMENTS.map((a) => (
                            <div key={a.year + a.title} className="bg-neutral-bg rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-4">
                                    <span className="text-2xl font-bold text-accent font-serif">{a.year}</span>
                                </div>
                                <h4 className="font-serif text-lg font-bold text-gray-900 mb-2">{a.title}</h4>
                                <p className="text-gray-500 text-sm">{a.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-dark text-white py-16 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="material-symbols-outlined text-accent text-4xl mb-4">sports_score</span>
                    <h3 className="font-serif text-3xl font-bold mb-4">¿Querés sumarte a nuestros equipos?</h3>
                    <p className="text-gray-400 font-light mb-8">
                        Formá parte de la historia del club. Buscamos deportistas comprometidos con los valores del deporte y la superación constante.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contacto" className="px-7 py-3 bg-primary text-white rounded-lg font-semibold text-sm hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                            Contactar al club
                        </Link>
                        <Link to="/deportes" className="px-7 py-3 border-2 border-white/20 text-white rounded-lg font-semibold text-sm hover:border-accent hover:text-accent transition-colors">
                            Ver horarios
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
