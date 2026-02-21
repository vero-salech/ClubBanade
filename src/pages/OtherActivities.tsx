import piletaImg from "../assets/Pileta.png";

const OTHER_ACTIVITIES = [
    {
        title: "Pileta",
        icon: "pool",
        description: "Pileta descubierta de uso libre para socios. Ideal para disfrutar en familia durante la temporada de verano.",
        schedule: "Octubre a Marzo desde las 10 hs",
        image: piletaImg,
    },
    {
        title: "Gimnasio",
        icon: "fitness_center",
        description: "Espacio equipado con máquinas y elementos para entrenamiento funcional y musculación. De uso libre para socios.",
        schedule: "Lunes a Sábados de 14 a 20 hs",
        instagram: "@banadegym",
    },
];

export const OtherActivities = () => {
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
                        Instalaciones deportivas de uso libre para todos nuestros socios.
                    </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-2.5 flex z-30 opacity-70">
                    <div className="w-1/3 bg-black"></div>
                    <div className="w-1/3 bg-primary"></div>
                    <div className="w-1/3 bg-accent"></div>
                </div>
            </section>

            {/* Activities */}
            <section className="bg-neutral-bg py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <span className="w-12 h-[1px] bg-primary/30"></span>
                            <span className="text-primary font-bold uppercase text-xs tracking-widest">Instalaciones</span>
                            <span className="w-12 h-[1px] bg-primary/30"></span>
                        </div>
                        <h3 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Actividades del Club</h3>
                        <p className="text-gray-600 font-light max-w-xl mx-auto">
                            Espacios e instalaciones deportivas disponibles para todos los socios del club.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {OTHER_ACTIVITIES.map((a) => (
                            <div key={a.title} className="bg-white rounded-xl border-t-4 border-primary shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                                {a.image && (
                                    <img src={a.image} alt={a.title} className="w-full h-52 object-cover" />
                                )}
                                <div className="p-8">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                            <span className="material-symbols-outlined text-primary text-2xl">{a.icon}</span>
                                        </div>
                                        <h4 className="font-serif text-xl font-bold text-gray-900">{a.title}</h4>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-5">{a.description}</p>

                                    <div className="bg-neutral-bg rounded-lg p-4">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Horarios</span>
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary text-lg">schedule</span>
                                            <span className="text-sm text-gray-800 font-medium">{a.schedule}</span>
                                        </div>
                                    </div>
                                    {a.instagram && (
                                        <div className="bg-neutral-bg rounded-lg p-4 mt-3">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Instagram</span>
                                            <div className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-primary text-lg">photo_camera</span>
                                                <a href={`https://instagram.com/${a.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-sm text-primary font-medium hover:underline">{a.instagram}</a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-dark text-white py-16 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <span className="material-symbols-outlined text-accent text-4xl mb-4">pool</span>
                    <h3 className="font-serif text-3xl font-bold mb-4">¿Querés disfrutar de nuestras instalaciones?</h3>
                    <p className="text-gray-400 font-light">
                        Estas actividades están disponibles para todos los socios del club. Acercate a la administración para más información sobre membresías y horarios.
                    </p>
                </div>
            </section>
        </div>
    );
};
