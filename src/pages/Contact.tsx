import { useState } from "react";
import entradaImg from "../assets/Entrada2.jpeg";

export const Contact = () => {
    const [formState, setFormState] = useState({
        nombre: "",
        email: "",
        telefono: "",
        asunto: "",
        mensaje: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: integrar con servicio de email (EmailJS, Formspree, etc.)
        setSubmitted(true);
    };

    return (
        <div>
            {/* Hero */}
            <section className="relative bg-dark text-white py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={entradaImg} alt="Club Banade" className="w-full h-full object-cover opacity-20" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40 z-10"></div>
                <div className="relative z-20 max-w-7xl mx-auto">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-12 h-[1px] bg-accent"></span>
                        <span className="text-accent font-bold uppercase text-xs tracking-widest">Contacto</span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Contactanos</h2>
                    <p className="text-gray-300 font-light text-lg max-w-2xl">
                        Estamos para ayudarte. Escribinos tu consulta y te responderemos a la brevedad.
                    </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-2.5 flex z-30 opacity-70">
                    <div className="w-1/3 bg-black"></div>
                    <div className="w-1/3 bg-primary"></div>
                    <div className="w-1/3 bg-accent"></div>
                </div>
            </section>

            {/* ═══════ CONTENIDO PRINCIPAL ═══════ */}
            <section className="bg-neutral-bg py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

                        {/* ── Formulario (3 columnas) ── */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary text-xl">edit_note</span>
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-xl font-bold text-gray-900">Envianos tu consulta</h3>
                                        <p className="text-xs text-gray-500">Completá el formulario y nos pondremos en contacto.</p>
                                    </div>
                                </div>

                                {!submitted ? (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div>
                                                <label htmlFor="nombre" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                                                    Nombre completo <span className="text-primary">*</span>
                                                </label>
                                                <input
                                                    id="nombre"
                                                    name="nombre"
                                                    type="text"
                                                    required
                                                    value={formState.nombre}
                                                    onChange={handleChange}
                                                    placeholder="Tu nombre"
                                                    className="w-full border border-gray-200 bg-neutral-bg/50 px-4 py-3 rounded-lg text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                                                    Email <span className="text-primary">*</span>
                                                </label>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    required
                                                    value={formState.email}
                                                    onChange={handleChange}
                                                    placeholder="tu@email.com"
                                                    className="w-full border border-gray-200 bg-neutral-bg/50 px-4 py-3 rounded-lg text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div>
                                                <label htmlFor="telefono" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                                                    Teléfono
                                                </label>
                                                <input
                                                    id="telefono"
                                                    name="telefono"
                                                    type="tel"
                                                    value={formState.telefono}
                                                    onChange={handleChange}
                                                    placeholder="+54 11 ..."
                                                    className="w-full border border-gray-200 bg-neutral-bg/50 px-4 py-3 rounded-lg text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="asunto" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                                                    Asunto <span className="text-primary">*</span>
                                                </label>
                                                <select
                                                    id="asunto"
                                                    name="asunto"
                                                    required
                                                    value={formState.asunto}
                                                    onChange={handleChange}
                                                    className="w-full border border-gray-200 bg-neutral-bg/50 px-4 py-3 rounded-lg text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                                                >
                                                    <option value="">Seleccioná un tema</option>
                                                    <option value="socio">Quiero ser socio</option>
                                                    <option value="deportes">Deportes y escuelitas</option>
                                                    <option value="actividades">Actividades</option>
                                                    <option value="quinchos">Reserva de quinchos</option>
                                                    <option value="eventos">Salón de eventos</option>
                                                    <option value="administracion">Administración</option>
                                                    <option value="otro">Otro</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="mensaje" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                                                Mensaje <span className="text-primary">*</span>
                                            </label>
                                            <textarea
                                                id="mensaje"
                                                name="mensaje"
                                                rows={5}
                                                required
                                                value={formState.mensaje}
                                                onChange={handleChange}
                                                placeholder="Escribí tu consulta..."
                                                className="w-full border border-gray-200 bg-neutral-bg/50 px-4 py-3 rounded-lg text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-none"
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-primary text-white font-bold py-3.5 rounded-lg hover:bg-red-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                                        >
                                            <span className="material-symbols-outlined text-lg">send</span>
                                            Enviar consulta
                                        </button>

                                        <p className="text-[10px] text-gray-400 text-center">
                                            Los campos marcados con <span className="text-primary">*</span> son obligatorios.
                                        </p>
                                    </form>
                                ) : (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                                            <span className="material-symbols-outlined text-green-600 text-3xl">check_circle</span>
                                        </div>
                                        <h4 className="font-serif text-2xl font-bold text-gray-900 mb-2">¡Mensaje enviado!</h4>
                                        <p className="text-gray-600 text-sm mb-6">
                                            Gracias por tu consulta. Te responderemos a la brevedad posible.
                                        </p>
                                        <button
                                            onClick={() => {
                                                setSubmitted(false);
                                                setFormState({ nombre: "", email: "", telefono: "", asunto: "", mensaje: "" });
                                            }}
                                            className="text-primary font-semibold text-sm hover:underline"
                                        >
                                            Enviar otra consulta
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* ── Sidebar info (2 columnas) ── */}
                        <div className="lg:col-span-2 space-y-6">

                            {/* Datos de contacto */}
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <h4 className="font-serif text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">contact_phone</span>
                                    Información de contacto
                                </h4>
                                <div className="space-y-5">
                                    <a href="https://maps.google.com/?q=Hipólito+Yrigoyen+1290+Martínez+Buenos+Aires" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                                        <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                            <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block">Dirección</span>
                                            <span className="text-sm text-gray-800 font-medium group-hover:text-primary transition-colors">
                                                Hipólito Yrigoyen 1290<br />Martínez, Buenos Aires
                                            </span>
                                        </div>
                                    </a>
                                    <a href="tel:+541147334204" className="flex items-start gap-3 group">
                                        <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                            <span className="material-symbols-outlined text-primary text-lg">call</span>
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block">Teléfono</span>
                                            <span className="text-sm text-gray-800 font-medium group-hover:text-primary transition-colors">+54 11 4733-4204</span>
                                        </div>
                                    </a>
                                    <a href="mailto:info@clubbanade.com" className="flex items-start gap-3 group">
                                        <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                            <span className="material-symbols-outlined text-primary text-lg">mail</span>
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block">Email</span>
                                            <span className="text-sm text-gray-800 font-medium group-hover:text-primary transition-colors">info@clubbanade.com</span>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* Horarios */}
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <h4 className="font-serif text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">schedule</span>
                                    Horarios
                                </h4>
                                <div className="space-y-3">
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Club</span>
                                        <div className="flex justify-between items-center bg-neutral-bg rounded-lg px-4 py-2.5">
                                            <span className="text-sm text-gray-700">Todos los días</span>
                                            <span className="text-sm text-gray-900 font-bold">09:00 a 23:00</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2 mt-4">Administración</span>
                                        <div className="space-y-1.5">
                                            <div className="flex justify-between items-center bg-neutral-bg rounded-lg px-4 py-2.5">
                                                <span className="text-sm text-gray-700">Lunes a Viernes</span>
                                                <span className="text-sm text-gray-900 font-bold">12:00 a 19:00</span>
                                            </div>
                                            <div className="flex justify-between items-center bg-neutral-bg rounded-lg px-4 py-2.5">
                                                <span className="text-sm text-gray-700">Sábados</span>
                                                <span className="text-sm text-gray-900 font-bold">10:00 a 15:00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Nota */}
                            <div className="bg-accent/10 rounded-xl px-5 py-4 flex items-start gap-3">
                                <span className="material-symbols-outlined text-accent text-lg mt-0.5">info</span>
                                <p className="text-xs text-gray-700 leading-relaxed">
                                    Para consultas sobre <strong>deportes federativos</strong> o <strong>escuelitas</strong>, te recomendamos contactar directamente a cada disciplina a través de sus coordinadores o sus redes sociales.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════ MAPA ═══════ */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="text-center mb-8">
                        <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">¿Cómo llegar?</h3>
                        <p className="text-gray-600 text-sm">Hipólito Yrigoyen 1290, Martínez, Buenos Aires</p>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                        <iframe
                            title="Ubicación Club Banade"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.5!2d-58.5052!3d-34.4932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb1234567890%3A0xabcdef!2sHip%C3%B3lito+Yrigoyen+1290%2C+Mart%C3%ADnez%2C+Buenos+Aires!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};
