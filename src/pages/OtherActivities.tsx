import piletaImg from "../assets/Pileta.png";
import pesasImg from "../assets/pesas.png";

const OTHER_ACTIVITIES = [
    {
        title: "Pileta",
        icon: "pool",
        description: "Pileta descubierta de uso libre para socios. Ideal para disfrutar en familia durante la temporada de verano.",
        schedule: "Martes a Viernes 17 a 21 hs · Sábados y Domingos 9 a 21 hs",
        image: piletaImg,
    },
    {
        title: "Gimnasio",
        icon: "fitness_center",
        description: "Espacio equipado con máquinas y elementos para entrenamiento funcional y musculación. De uso libre para socios.",
        schedule: "Lunes a Sábados de 14 a 20 hs",
        instagram: "@banadegym",
        image: pesasImg,
    },
];

/* ── Datos de temporada (actualizar cada año) ── */
const POOL_SEASON = {
    label: "Temporada 2025 / 2026",
    pricing: [
        {
            age: "Mayores de 14 años",
            quincenal: "$60.000",
            diarioSocio: "$6.000",
            diarioInvitado: "$12.000",
            diarioJubilado: "$7.000",
        },
        {
            age: "De 4 a 13 años",
            quincenal: "$40.000",
            diarioSocio: "$4.000",
            diarioInvitado: "$6.000",
            diarioJubilado: "—",
        },
        {
            age: "De 0 a 3 años",
            quincenal: "Sin cargo",
            diarioSocio: "—",
            diarioInvitado: "—",
            diarioJubilado: "—",
        },
    ],
    weekdayNote: "De Martes a Viernes, socios mayores de 13 años abonan $5.000 y de 4 a 13 años $3.000 (diario).",
    medicalCheck: "Miércoles 13 a 18 hs · Sábados y Domingos 10 a 18 hs",
    medicalValidity: "Validez: 1 mes",
};

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
                                                <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C16.67.014 16.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
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

            {/* ═══════ TEMPORADA PILETA ═══════ */}
            <section className="bg-white pt-8 pb-16 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <span className="w-12 h-[1px] bg-primary/30"></span>
                            <span className="text-primary font-bold uppercase text-xs tracking-widest">Natatorio</span>
                            <span className="w-12 h-[1px] bg-primary/30"></span>
                        </div>
                        <h3 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-2">Temporada de Pileta</h3>
                        <span className="inline-flex items-center gap-2 py-1 px-4 bg-accent/15 text-dark text-xs font-bold uppercase tracking-widest rounded-full">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                            {POOL_SEASON.label}
                        </span>
                    </div>

                    {/* Tabla de precios */}
                    <div className="bg-neutral-bg rounded-2xl overflow-hidden shadow-lg mb-8">
                        {/* Desktop table */}
                        <div className="hidden md:block overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-dark text-white">
                                        <th className="text-left py-4 px-6 font-semibold uppercase tracking-wider text-xs">Edad</th>
                                        <th className="text-center py-4 px-4 font-semibold uppercase tracking-wider text-xs">
                                            Abono Quincenal<br /><span className="text-gray-400 font-normal normal-case tracking-normal">Socios</span>
                                        </th>
                                        <th className="text-center py-4 px-4 font-semibold uppercase tracking-wider text-xs">
                                            Diario<br /><span className="text-gray-400 font-normal normal-case tracking-normal">Socios</span>
                                        </th>
                                        <th className="text-center py-4 px-4 font-semibold uppercase tracking-wider text-xs">
                                            Diario<br /><span className="text-gray-400 font-normal normal-case tracking-normal">Invitados</span>
                                        </th>
                                        <th className="text-center py-4 px-4 font-semibold uppercase tracking-wider text-xs">
                                            Diario<br /><span className="text-gray-400 font-normal normal-case tracking-normal">Jubilados</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {POOL_SEASON.pricing.map((row, i) => (
                                        <tr key={row.age} className={`border-b border-gray-200 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-bg'}`}>
                                            <td className="py-4 px-6 font-semibold text-gray-900">{row.age}</td>
                                            <td className="py-4 px-4 text-center font-bold text-primary text-base">{row.quincenal}</td>
                                            <td className="py-4 px-4 text-center text-gray-700">{row.diarioSocio}</td>
                                            <td className="py-4 px-4 text-center text-gray-700">{row.diarioInvitado}</td>
                                            <td className="py-4 px-4 text-center text-gray-700">{row.diarioJubilado}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile cards */}
                        <div className="md:hidden p-4 space-y-4">
                            {POOL_SEASON.pricing.map((row) => (
                                <div key={row.age} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                                    <h5 className="font-semibold text-gray-900 mb-3 text-base">{row.age}</h5>
                                    <div className="grid grid-cols-2 gap-3 text-sm">
                                        <div className="bg-primary/5 rounded-lg p-3">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Quincenal</span>
                                            <span className="font-bold text-primary">{row.quincenal}</span>
                                        </div>
                                        <div className="bg-neutral-bg rounded-lg p-3">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Diario Socio</span>
                                            <span className="font-medium text-gray-800">{row.diarioSocio}</span>
                                        </div>
                                        <div className="bg-neutral-bg rounded-lg p-3">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Invitados</span>
                                            <span className="font-medium text-gray-800">{row.diarioInvitado}</span>
                                        </div>
                                        <div className="bg-neutral-bg rounded-lg p-3">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Jubilados</span>
                                            <span className="font-medium text-gray-800">{row.diarioJubilado}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Nota de precio entre semana */}
                        <div className="bg-accent/10 px-6 py-3 text-xs text-gray-700 flex items-center gap-2">
                            <span className="material-symbols-outlined text-accent text-sm">info</span>
                            {POOL_SEASON.weekdayNote}
                        </div>
                    </div>

                    {/* Beneficios + Requisitos */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Beneficio Federados */}
                        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="material-symbols-outlined text-primary text-2xl">trophy</span>
                            </div>
                            <h5 className="font-bold text-gray-900 text-sm mb-2">Socios Federados</h5>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                Los que pagaron el arancel deportivo durante todo 2025 acceden a la pileta <strong className="text-primary">sin cargo</strong>.
                            </p>
                        </div>

                        {/* Beneficio Escuelitas */}
                        <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 text-center">
                            <div className="w-12 h-12 bg-accent/15 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="material-symbols-outlined text-accent text-2xl" style={{ textShadow: '0 0 0 #000' }}>school</span>
                            </div>
                            <h5 className="font-bold text-gray-900 text-sm mb-2">Escuelitas</h5>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                Alumnos con arancel del mes en curso al día acceden con <strong className="text-primary">50% de descuento</strong>.
                            </p>
                        </div>

                        {/* Requisitos */}
                        <div className="bg-neutral-bg border border-gray-200 rounded-xl p-6 text-center">
                            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="material-symbols-outlined text-gray-600 text-2xl">badge</span>
                            </div>
                            <h5 className="font-bold text-gray-900 text-sm mb-2">Requisitos</h5>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                Carnet de socio con <strong>cuota al día</strong> + revisación médica obligatoria.
                            </p>
                        </div>

                        {/* Revisión médica */}
                        <div className="bg-neutral-bg border border-gray-200 rounded-xl p-6 text-center">
                            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="material-symbols-outlined text-gray-600 text-2xl">medical_services</span>
                            </div>
                            <h5 className="font-bold text-gray-900 text-sm mb-2">Revisión Médica</h5>
                            <p className="text-xs text-gray-600 leading-relaxed mb-1">{POOL_SEASON.medicalCheck}</p>
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">{POOL_SEASON.medicalValidity}</span>
                        </div>
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
