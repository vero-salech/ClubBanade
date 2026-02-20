export const Footer = () => {
    return (
        <footer className="bg-footer-bg text-gray-300 py-16 border-t-[6px] border-primary" id="contacto">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 mb-2">
                        <img src="/logo.png" alt="Club Banade" className="h-10 w-10 object-contain" />
                        <h4 className="text-white text-lg font-serif font-bold">Club Banade</h4>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Institución social y deportiva comprometida con la comunidad.
                    </p>
                    <div className="flex gap-4 mt-2">
                        <a className="text-gray-400 hover:text-accent transition-colors" href="#"><span className="material-symbols-outlined">social_leaderboard</span></a>
                        <a className="text-gray-400 hover:text-accent transition-colors" href="#"><span className="material-symbols-outlined">photo_camera</span></a>
                    </div>
                </div>

                <div>
                    <h5 className="text-white font-bold uppercase tracking-wider text-sm mb-6 border-b border-gray-700 pb-2 inline-block">Contacto</h5>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-base mt-0.5">location_on</span>
                            <span>Hipólito Yrigoyen 1290,<br />Martínez, Buenos Aires</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-base">call</span>
                            <span>+54 11 4733-4204</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-base">mail</span>
                            <span>info@clubbanade.com</span>
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
                    <div className="bg-gray-800 w-full h-40 rounded relative overflow-hidden group">
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJktnOMGSGRnJmNQONLQl1YPpyFBnXUN5w3hfZyYOju8UJOoWU_cN3fyqNmP5W3flCiHGB3-Zv7A7opt452JUXL22s_N_Ah4JpMYY2oNEhC8Ngojzw5ZMjB5lPYQOhnaEuOUB8sVcR0XBu1xVNJQSEz7CJITTq5lpkzZkQ49hPsUkkizx5kkBSKHIlPhsvQtlC_ftmxgzTgHMKsJNK51_NgAh19B2tJd34sPcQal67F56cWSVpU1fDoXftRqh72Qzip0uxXMMKIsJ1")' }}
                        ></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary text-4xl drop-shadow-md">location_on</span>
                        </div>
                        <a aria-label="Ver en Google Maps" className="absolute inset-0 z-10" href="#"></a>
                    </div>
                    <div className="mt-3 text-xs text-gray-500 text-center">
                        Haga clic para ver en el mapa
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-16 pt-8 text-center px-6">
                <p className="text-gray-500 text-xs">
                    © 2025 Club Banco Nacional de Desarrollo. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};
