import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="bg-footer-bg text-gray-300 py-16 border-t-[6px] border-primary" id="contacto">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="flex flex-col gap-4">
                    <Link to="/" className="flex items-center gap-3 mb-2 hover:opacity-90 transition-opacity">
                        <img src="/logo.png" alt="Club Banade" className="h-10 w-10 object-contain" />
                        <h4 className="text-white text-lg font-serif font-bold">Club Banade</h4>
                    </Link>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Institución social y deportiva comprometida con la comunidad desde 1945.
                    </p>
                    <div className="flex gap-4 mt-2">
                        <a
                            href="https://www.instagram.com/clubbanadeok"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
                            aria-label="Instagram del Club Banade"
                        >
                            <span className="material-symbols-outlined">photo_camera</span>
                            <span className="text-xs">@clubbanadeok</span>
                        </a>
                    </div>
                </div>

                <div>
                    <h5 className="text-white font-bold uppercase tracking-wider text-sm mb-6 border-b border-gray-700 pb-2 inline-block">Contacto</h5>
                    <ul className="space-y-4 text-sm">
                        <li>
                            <a href="https://maps.google.com/?q=Hipólito+Yrigoyen+1290+Martínez+Buenos+Aires" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-primary text-base mt-0.5">location_on</span>
                                <span>Hipólito Yrigoyen 1290,<br />Martínez, Buenos Aires</span>
                            </a>
                        </li>
                        <li>
                            <a href="tel:+541147334204" className="flex items-center gap-3 hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-primary text-base">call</span>
                                <span>+54 11 4733-4204</span>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:info@clubbanade.com" className="flex items-center gap-3 hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-primary text-base">mail</span>
                                <span>info@clubbanade.com</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h5 className="text-white font-bold uppercase tracking-wider text-sm mb-6 border-b border-gray-700 pb-2 inline-block">Horarios</h5>
                    <ul className="space-y-3 text-sm">
                        <li className="flex justify-between border-b border-gray-800 pb-2">
                            <span>Todos los días</span>
                            <span className="text-white">09:00 - 23:00</span>
                        </li>
                    </ul>
                    <h6 className="text-gray-400 font-semibold uppercase tracking-wider text-xs mt-5 mb-3">Administración</h6>
                    <ul className="space-y-3 text-sm">
                        <li className="flex justify-between border-b border-gray-800 pb-2">
                            <span>Lunes a Viernes</span>
                            <span className="text-white">12:00 - 19:00</span>
                        </li>
                        <li className="flex justify-between border-b border-gray-800 pb-2">
                            <span>Sábados</span>
                            <span className="text-white">10:00 - 15:00</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h5 className="text-white font-bold uppercase tracking-wider text-sm mb-6 border-b border-gray-700 pb-2 inline-block">Ubicación</h5>
                    <a
                        href="https://maps.google.com/?q=Hipólito+Yrigoyen+1290+Martínez+Buenos+Aires"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-gray-800 w-full h-40 rounded relative overflow-hidden group"
                        aria-label="Ver ubicación en Google Maps"
                    >
                        <iframe
                            title="Ubicación Club Banade"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.5!2d-58.5052!3d-34.4932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDI5JzM1LjUiUyA1OMKwMzAnMTguNyJX!5e0!3m2!1ses!2sar"
                            width="100%"
                            height="100%"
                            style={{ border: 0, pointerEvents: "none" }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="opacity-70 group-hover:opacity-100 transition-opacity"
                        ></iframe>
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">open_in_new</span>
                                Abrir en Maps
                            </span>
                        </div>
                    </a>
                    <div className="mt-3 text-xs text-gray-500 text-center">
                        Clic para abrir en Google Maps
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-16 pt-8 text-center px-6">
                <p className="text-gray-500 text-xs">
                    © {new Date().getFullYear()} Club Banco Nacional de Desarrollo. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};
