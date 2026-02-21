const ACTIVITIES = [
    {
        title: "Tenis",
        icon: "sports_tennis",
        description: "Clases de tenis para todas las edades y niveles. Nuestras canchas están equipadas para ofrecerte la mejor experiencia deportiva.",
        schedule: "Lunes a Sábados desde las 8 hs",
        professor: { name: "Silvina / Claudia", phone: "11-5566-7788" },
        instagram: "@banadetenis",
    },
    {
        title: "Gimnasia Artística",
        icon: "sports_gymnastics",
        description: "Formación en gimnasia artística para niños y jóvenes. Desarrollo de flexibilidad, fuerza y coordinación con profesores especializados.",
        schedule: "Martes y Jueves desde las 17 hs",
        professor: { name: "Angy Sabone", phone: "11-4161-9704" },
        instagram: "@educgym_escuelagym",
    },
    {
        title: "Squash",
        icon: "sports_tennis",
        description: "Cancha de squash profesional con iluminación de primer nivel. Clases individuales y grupales para principiantes y avanzados.",
        schedule: "Lunes a Viernes desde las 9 hs",
        professor: { name: "Adrián Sidero", phone: "11-4455-6677" },
    },
    {
        title: "Pádel",
        icon: "sports_tennis",
        description: "Canchas de pádel en excelente estado. Clases para todos los niveles y alquiler de canchas para socios y no socios.",
        schedule: "Lunes a Sábados desde las 8 hs",
        professor: { name: "Oscar Soria", phone: "11-6677-8899" },
    },
];

export const Activities = () => {
    return (
        <div>
            {/* Hero */}
            <section className="relative bg-dark text-white py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/90 to-primary/20 opacity-80"></div>
                <div className="relative z-20 max-w-7xl mx-auto">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-12 h-[1px] bg-accent"></span>
                        <span className="text-accent font-bold uppercase text-xs tracking-widest">Actividades</span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Otras Actividades</h2>
                    <p className="text-gray-300 font-light text-lg max-w-2xl">
                        Disciplinas tercerizadas con profesores independientes que operan dentro de nuestras instalaciones.
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
                            <span className="text-accent font-bold uppercase text-xs tracking-widest" style={{ textShadow: '0 0 0 #000' }}>Disciplinas</span>
                            <span className="w-12 h-[1px] bg-accent/50"></span>
                        </div>
                        <h3 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Actividades Tercerizadas</h3>
                        <p className="text-gray-600 font-light max-w-xl mx-auto">
                            Actividades con profesores especializados que trabajan de forma independiente en nuestras instalaciones.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {ACTIVITIES.map((a) => (
                            <div key={a.title} className="bg-white rounded-xl border-t-4 border-accent shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-8">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center">
                                        <span className="material-symbols-outlined text-accent text-2xl" style={{ textShadow: '0 0 0 #000' }}>{a.icon}</span>
                                    </div>
                                    <h4 className="font-serif text-xl font-bold text-gray-900">{a.title}</h4>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-5">{a.description}</p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div className="bg-neutral-bg rounded-lg p-4">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Horarios</span>
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary text-lg">schedule</span>
                                            <div className="text-sm text-gray-800 font-medium">
                                                <span className="block">{a.schedule.split(' desde las ')[0]}</span>
                                                <span className="block">desde las {a.schedule.split(' desde las ')[1]}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-neutral-bg rounded-lg p-4">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Profesor</span>
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary text-lg">person</span>
                                            <div>
                                                <span className="text-sm text-gray-800 font-medium block">{a.professor.name}</span>
                                                {a.professor.phone && (
                                                    <a href={`tel:${a.professor.phone}`} className="text-xs text-primary font-medium hover:underline">{a.professor.phone}</a>
                                                )}
                                                {a.instagram && (
                                                    <a href={`https://instagram.com/${a.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-xs text-primary font-medium hover:underline block">{a.instagram}</a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="bg-dark text-white py-16 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <span className="material-symbols-outlined text-accent text-4xl mb-4">sports_tennis</span>
                    <h3 className="font-serif text-3xl font-bold mb-4">¿Querés sumarte a nuestras actividades?</h3>
                    <p className="text-gray-400 font-light">
                        Estas actividades son dictadas por profesores independientes dentro de las instalaciones del club. Contactá directamente al profesor de la disciplina que te interese para conocer horarios, aranceles y disponibilidad.
                    </p>
                </div>
            </section>
        </div>
    );
};
