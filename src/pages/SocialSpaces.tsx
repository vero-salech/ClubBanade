import buffetImg from "../assets/Buffet.png";
import salonImg from "../assets/SalonEventos.jpg";
import quincho1Img from "../assets/Quincho1.png";
import quincho2Img from "../assets/Quincho2.png";
import quincho3Img from "../assets/Quincho3.png";
import quincho4Img from "../assets/Quincho4.png";
import quincho5Img from "../assets/Quincho5.png";
import mesasParrillasImg from "../assets/MesasParrillas.png";

/* ── Datos de Quinchos (actualizar precios cada temporada) ── */
const QUINCHOS = [
    {
        name: "Quincho Nº 1",
        image: quincho1Img,
        capacity: 20,
        priceSocio: "$25.000",
        priceNoSocio: "$65.000",
        amenities: [
            { icon: "table_restaurant", text: "4 mesas y 8 bancos" },
            { icon: "outdoor_grill", text: "Parrilla interior y exterior" },
            { icon: "kitchen", text: "Heladera, cocina, mesada y pileta" },
        ],
    },
    {
        name: "Quincho Nº 2",
        image: quincho2Img,
        capacity: 50,
        priceSocio: "Sin cargo",
        priceNoSocio: "$45.000",
        amenities: [
            { icon: "table_restaurant", text: "4 mesas y 8 bancos" },
            { icon: "outdoor_grill", text: "Parrilla exterior" },
        ],
    },
    {
        name: "Quincho Nº 3",
        image: quincho3Img,
        capacity: 20,
        priceSocio: "Sin cargo",
        priceNoSocio: "$30.000",
        amenities: [
            { icon: "table_restaurant", text: "2 mesas y 4 bancos" },
            { icon: "outdoor_grill", text: "Parrilla exterior" },
        ],
    },
    {
        name: "Quincho Nº 4",
        image: quincho4Img,
        capacity: 30,
        priceSocio: "$65.000",
        priceNoSocio: "$125.000",
        amenities: [
            { icon: "table_restaurant", text: "Mesa y sillas" },
            { icon: "outdoor_grill", text: "Parrilla interior y exterior" },
            { icon: "kitchen", text: "Heladera, freezer, cocina, horno pizzero, mesada, pileta y TV" },
        ],
    },
    {
        name: "Quincho Nº 5",
        image: quincho5Img,
        capacity: 15,
        priceSocio: "Sin cargo",
        priceNoSocio: "$20.000",
        amenities: [
            { icon: "table_restaurant", text: "Mesa y 2 bancos" },
            { icon: "outdoor_grill", text: "Parrilla exterior" },
        ],
    },
    {
        name: "Mesa y Banco con Parrilla",
        image: mesasParrillasImg,
        capacity: 5,
        priceSocio: "Sin cargo",
        priceNoSocio: "$4.500",
        amenities: [
            { icon: "table_restaurant", text: "Mesa y 2 bancos (chicos)" },
            { icon: "outdoor_grill", text: "Parrilla exterior" },
        ],
    },
];

export const SocialSpaces = () => {
    return (
        <div>
            {/* Hero */}
            <section className="relative bg-dark text-white py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/90 to-primary/20 opacity-80"></div>
                <div className="relative z-20 max-w-7xl mx-auto">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-12 h-[1px] bg-accent"></span>
                        <span className="text-accent font-bold uppercase text-xs tracking-widest">Espacios</span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Espacios Sociales</h2>
                    <p className="text-gray-300 font-light text-lg max-w-2xl">
                        Disfrutá de nuestras instalaciones para compartir momentos con familia y amigos.
                    </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-2.5 flex z-30 opacity-70">
                    <div className="w-1/3 bg-black"></div>
                    <div className="w-1/3 bg-primary"></div>
                    <div className="w-1/3 bg-accent"></div>
                </div>
            </section>

            {/* ═══════ BUFFET + SALÓN ═══════ */}
            <section className="bg-neutral-bg py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <span className="w-12 h-[1px] bg-primary/30"></span>
                            <span className="text-primary font-bold uppercase text-xs tracking-widest">Servicios</span>
                            <span className="w-12 h-[1px] bg-primary/30"></span>
                        </div>
                        <h3 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Espacios</h3>
                        <p className="text-gray-600 font-light max-w-xl mx-auto">
                            Gastronomía y eventos en un entorno único dentro del club.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Buffet */}
                        <div className="bg-white rounded-xl border-t-4 border-primary shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                            <img src={buffetImg} alt="Buffet del Club" className="w-full h-52 object-cover object-[center_35%]" />
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary text-2xl">restaurant</span>
                                    </div>
                                    <h4 className="font-serif text-xl font-bold text-gray-900">Buffet</h4>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                                    Nuestro buffet ofrece servicio de almuerzo, merienda y snacks para todos. Un punto de encuentro ideal para socios, visitantes y familias dentro del club.
                                </p>
                                <div className="bg-neutral-bg rounded-lg p-4">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Horarios</span>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-lg">schedule</span>
                                        <span className="text-sm text-gray-800 font-medium">Todos los días de 10 a 23 hs</span>
                                    </div>
                                </div>
                                <div className="bg-accent/10 rounded-lg p-3 mt-3 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-accent text-sm">groups</span>
                                    <span className="text-xs text-gray-700 font-medium">Abierto a socios y público en general</span>
                                </div>
                            </div>
                        </div>

                        {/* Salón de Eventos */}
                        <div className="bg-white rounded-xl border-t-4 border-accent shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                            <img src={salonImg} alt="Salón de Eventos" className="w-full h-52 object-cover" />
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center">
                                        <span className="material-symbols-outlined text-accent text-2xl" style={{ textShadow: '0 0 0 #000' }}>celebration</span>
                                    </div>
                                    <h4 className="font-serif text-xl font-bold text-gray-900">Salón de Eventos</h4>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                    Salón equipado para eventos sociales, cumpleaños, reuniones y celebraciones. Servicio tercerizado con atención personalizada.
                                </p>
                                <a href="https://instagram.com/eventosbanade" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-primary font-semibold hover:underline mb-5">
                                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C16.67.014 16.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                                    @eventosbanade
                                </a>
                                <div className="bg-neutral-bg rounded-lg p-4">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Contacto</span>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-lg">person</span>
                                        <span className="text-sm text-gray-500 italic">Próximamente</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════ QUINCHOS Y PARRILLAS ═══════ */}
            <section className="bg-white pt-8 pb-16 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <span className="w-12 h-[1px] bg-primary/30"></span>
                            <span className="text-primary font-bold uppercase text-xs tracking-widest">Alquiler</span>
                            <span className="w-12 h-[1px] bg-primary/30"></span>
                        </div>
                        <h3 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-2">Quinchos y Parrillas</h3>
                        <p className="text-gray-600 font-light max-w-2xl mx-auto">
                            Espacios al aire libre y techados con parrilla para disfrutar de un asado en familia o con amigos.
                        </p>
                    </div>

                    {/* Grid de quinchos */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {QUINCHOS.map((q) => (
                            <div key={q.name} className="bg-neutral-bg rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col">
                                {/* Imagen + badge capacidad */}
                                <div className="relative">
                                    <img src={q.image} alt={q.name} className="w-full h-48 object-cover" />
                                    <span className="absolute top-3 right-3 bg-dark/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm">group</span>
                                        {q.capacity} personas
                                    </span>
                                </div>

                                {/* Contenido */}
                                <div className="p-6 flex flex-col flex-1">
                                    <h4 className="font-serif text-lg font-bold text-gray-900 mb-4">{q.name}</h4>

                                    {/* Precios */}
                                    <div className="grid grid-cols-2 gap-3 mb-4">
                                        <div className={`rounded-lg p-3 text-center ${q.priceSocio === "Sin cargo" ? "bg-green-50 border border-green-200" : "bg-primary/5 border border-primary/15"}`}>
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Socio</span>
                                            <span className={`font-bold text-sm ${q.priceSocio === "Sin cargo" ? "text-green-600" : "text-primary"}`}>
                                                {q.priceSocio}
                                            </span>
                                        </div>
                                        <div className="bg-gray-100 border border-gray-200 rounded-lg p-3 text-center">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">No Socio</span>
                                            <span className="font-bold text-sm text-gray-700">{q.priceNoSocio}</span>
                                        </div>
                                    </div>

                                    {/* Comodidades */}
                                    <div className="space-y-2 mt-auto">
                                        {q.amenities.map((am) => (
                                            <div key={am.text} className="flex items-start gap-2">
                                                <span className="material-symbols-outlined text-primary text-base mt-0.5">{am.icon}</span>
                                                <span className="text-xs text-gray-600 leading-relaxed">{am.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Nota informativa */}
                    <div className="bg-accent/10 rounded-xl px-6 py-5">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="material-symbols-outlined text-accent text-lg">info</span>
                            <span className="text-sm font-bold text-gray-900">Información para reservar</span>
                        </div>
                        <ul className="space-y-2 text-xs text-gray-700 leading-relaxed ml-7">
                            <li className="flex items-start gap-2">
                                <span className="material-symbols-outlined text-primary text-sm mt-0.5">payments</span>
                                Los quinchos se reservan con un mínimo de 48 hs de anticipación en la administración del Club, abonando una seña del 50% del total.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="material-symbols-outlined text-primary text-sm mt-0.5">list_alt</span>
                                Se requiere la presentación de una lista de invitados. El estacionamiento se abona por separado.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="material-symbols-outlined text-primary text-sm mt-0.5">group</span>
                                El valor de socio aplica cuando al menos el 60% de los asistentes son socios del club.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="material-symbols-outlined text-primary text-sm mt-0.5">call</span>
                                Para consultar disponibilidad o reservar, comunicate al <a href="tel:+5411XXXXXXXX" className="text-primary font-semibold hover:underline">teléfono de administración</a>.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-dark text-white py-16 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <span className="material-symbols-outlined text-accent text-4xl mb-4">outdoor_grill</span>
                    <h3 className="font-serif text-3xl font-bold mb-4">¿Querés reservar un espacio?</h3>
                    <p className="text-gray-400 font-light">
                        Consultá la disponibilidad de nuestros quinchos y salones. Acercate a la administración o contactanos para más información.
                    </p>
                </div>
            </section>
        </div>
    );
};
