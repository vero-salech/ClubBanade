import { Link } from "react-router-dom";

const SCHOOLS = [
    {
        title: "Hockey Infantil",
        icon: "sports_hockey",
        ages: "7 a 10 años",
        schedule: "Martes y Viernes desde las 17 hs",
        description: "Iniciación deportiva y técnica profesional en un ambiente de sana competencia.",
        coordinator: { name: "Virginia Morelli", phone: "11-6602-3750" },
        coordinatorLabel: "Secretaria Administrativa",
    },
    {
        title: "Vóley Infantil",
        icon: "sports_volleyball",
        ages: "6 a 17 años",
        schedule: "Lunes a Viernes desde las 17:30 hs",
        description: "Desarrollo de habilidades motoras, coordinación y fuerte trabajo en equipo.",
        coordinator: { name: "Walter Franco", phone: "11-3061-1374" },
    },
    {
        title: "Básquet Pre-Federados",
        icon: "sports_basketball",
        ages: "5 a 13 años",
        schedule: "Lunes y Miércoles desde las 17 hs",
        description: "Formamos chicos para que el día de mañana integren nuestros planteles federativos. Nivel inicial con enfoque competitivo.",
        coordinator: { name: "Gustavo Moyano", phone: "11-4195-0309" },
    },
    {
        title: "Básquet Recreativo y Femenino",
        icon: "sports_basketball",
        ages: "11 a 15+ años",
        schedule: "Martes y Jueves desde las 17:45 hs",
        description: "Para chicos y chicas que quieran adquirir los fundamentos del deporte sin ánimos de competir. Ambiente distendido y formativo.",
        coordinator: { name: "Pedro Andrés", phone: "11-5875-0471" },
    },
    {
        title: "Fútbol Infantil",
        icon: "sports_soccer",
        ages: "5 a 20 años",
        schedule: "Martes a Viernes desde las 17 hs",
        description: "Entrenamiento integral, técnica de base y fomento de la amistad deportiva.",
        coordinator: { name: "Alan Pickering", phone: "11-6555-9054" },
    },
];

const VALUES = [
    {
        icon: "school",
        title: "Profesores certificados",
        description: "Contamos con un staff técnico altamente capacitado y especializado en pedagogía infantil."
    },
    {
        icon: "stadium",
        title: "Instalaciones de primer nivel",
        description: "Canchas profesionales y espacios seguros diseñados para la práctica deportiva de niños."
    },
    {
        icon: "diversity_3",
        title: "Valores deportivos",
        description: "Fomentamos el respeto, la disciplina y el compañerismo en cada entrenamiento."
    },
];

export const SportsSchools = () => {
    return (
        <div>
            {/* Hero */}
            <section className="relative bg-dark text-white py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=1920&q=80')] bg-cover bg-center opacity-40"></div>
                <div className="relative z-20 max-w-7xl mx-auto">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-12 h-[1px] bg-accent"></span>
                        <span className="text-accent font-bold uppercase text-xs tracking-widest">Formativas</span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Escuelitas Deportivas</h2>
                    <p className="text-gray-300 font-light text-lg max-w-2xl">
                        Formamos deportistas y personas desde la infancia, con valores de compañerismo y esfuerzo.
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
                            <span className="w-12 h-[1px] bg-accent/50"></span>
                            <span className="text-accent font-bold uppercase text-xs tracking-widest" style={{ textShadow: '0 0 0 #000' }}>Escuelitas</span>
                            <span className="w-12 h-[1px] bg-accent/50"></span>
                        </div>
                        <h3 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestras Disciplinas</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {SCHOOLS.map((s) => (
                            <div key={s.title} className="bg-white rounded-xl border-t-4 border-accent shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-8">
                                <div className="flex items-center justify-between mb-5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center">
                                            <span className="material-symbols-outlined text-accent text-2xl" style={{ textShadow: '0 0 0 #000' }}>{s.icon}</span>
                                        </div>
                                        <h4 className="font-serif text-xl font-bold text-gray-900">{s.title}</h4>
                                    </div>
                                    <span className="text-xs px-3 py-1.5 bg-primary/10 text-primary rounded-full font-bold">{s.ages}</span>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-5">{s.description}</p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div className="bg-neutral-bg rounded-lg p-4">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Horarios</span>
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary text-lg">schedule</span>
                                            <div className="text-sm text-gray-800 font-medium">
                                                <span className="block">{s.schedule.split(' desde las ')[0]}</span>
                                                <span className="block">desde las {s.schedule.split(' desde las ')[1]}</span>
                                            </div>
                                        </div>
                                    </div>
                                    {s.coordinator && (
                                        <div className="bg-neutral-bg rounded-lg p-4">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">{s.coordinatorLabel || "Coordinador"}</span>
                                            <div className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-primary text-lg">person</span>
                                                <div>
                                                    <span className="text-sm text-gray-800 font-medium block">{s.coordinator.name}</span>
                                                    <a href={`tel:${s.coordinator.phone}`} className="text-xs text-primary font-medium hover:underline">{s.coordinator.phone}</a>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Tarjeta de inscripción */}
                        <div className="bg-white rounded-xl border-t-4 border-primary shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-8 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary text-2xl">how_to_reg</span>
                                </div>
                                <h4 className="font-serif text-xl font-bold text-gray-900">¿Cómo inscribirse?</h4>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                En todos los casos, contactá primero al coordinador de la disciplina que te interese, para confirmar horarios y disponibilidad de vacantes. Luego de las clases de prueba, si decidís continuar, podrás formalizar la inscripción y realizar el pago de la cuota y arancel deportivo correspondiente en la administración del Club.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="bg-white py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h3 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Por qué elegirnos?</h3>
                        <p className="text-gray-600 font-light max-w-xl mx-auto">
                            Comprometidos con el desarrollo integral de tus hijos a través del deporte.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {VALUES.map((v) => (
                            <div key={v.title} className="text-center p-8 rounded-xl bg-neutral-bg hover:shadow-lg transition-all duration-300">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                                    <span className="material-symbols-outlined text-primary text-3xl">{v.icon}</span>
                                </div>
                                <h4 className="font-serif text-lg font-bold text-gray-900 mb-3">{v.title}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-dark text-white py-16 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="material-symbols-outlined text-accent text-4xl mb-4">child_care</span>
                    <h3 className="font-serif text-3xl font-bold mb-4">Inscribí a tu hijo/a en nuestras escuelitas</h3>
                    <p className="text-gray-400 font-light mb-2">
                        Período de inscripción abierto todo el año.
                    </p>
                    <p className="text-gray-500 text-sm mb-8">
                        Consultá disponibilidad y horarios para cada disciplina.
                    </p>
                    <Link to="/contacto" className="inline-block px-8 py-3 bg-accent text-black rounded-lg font-bold text-sm hover:scale-105 transition-transform shadow-lg shadow-accent/20">
                        Consultar inscripción
                    </Link>
                </div>
            </section>
        </div>
    );
};
