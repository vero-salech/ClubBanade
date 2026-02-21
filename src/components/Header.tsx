import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);
    const location = useLocation();

    const closeMenu = () => {
        setIsMenuOpen(false);
        setMobileSubOpen(null);
    };

    const toggleSub = (key: string) => {
        setMobileSubOpen(mobileSubOpen === key ? null : key);
    };

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-sm h-16">
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity" onClick={closeMenu}>
                    <div className="h-12 w-12 flex items-center justify-center shrink-0">
                        <img
                            src="/logo.png"
                            alt="Club Banade Logo"
                            className="h-full w-full object-contain"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                if (e.currentTarget.nextElementSibling) {
                                    (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                                }
                            }}
                        />
                        <div className="hidden h-10 w-10 bg-black rounded-full items-center justify-center border-2 border-primary shrink-0">
                            <span className="text-accent text-sm font-bold font-serif">CB</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center mt-1">
                        <h1 className="text-black text-xl font-bold font-serif leading-none tracking-tight">CLUB BA.NA.DE.</h1>
                        <span className="text-[10px] uppercase tracking-widest text-gray-500 mt-0.5">Fundado en 1945</span>
                    </div>
                </Link>

                {/* ─── Desktop Nav ─── */}
                <nav className="hidden lg:flex gap-8 items-center h-full">
                    <Link
                        to="/el-club"
                        className={`text-sm font-medium transition-colors border-b-2 py-1 ${location.pathname === "/el-club"
                            ? "text-primary border-primary"
                            : "text-gray-600 border-transparent hover:text-primary hover:border-primary"
                            }`}
                    >
                        El Club
                    </Link>

                    {/* Deportes dropdown */}
                    <div className="relative group h-full flex items-center">
                        <span
                            className={`text-sm font-medium transition-colors border-b-2 py-1 flex items-center gap-1 cursor-pointer ${location.pathname.startsWith("/deportes")
                                ? "text-primary border-primary"
                                : "text-gray-600 border-transparent hover:text-primary hover:border-primary"
                                }`}
                        >
                            Deportes
                            <span className="material-symbols-outlined text-base group-hover:rotate-180 transition-transform duration-200">expand_more</span>
                        </span>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[260px]">
                                <Link to="/deportes/federativos" className="flex items-center gap-3 px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-primary text-lg">trophy</span>
                                    Deportes Federativos
                                </Link>
                                <Link to="/deportes/escuelitas" className="flex items-center gap-3 px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-accent text-lg">school</span>
                                    Escuelitas Deportivas
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Otras Actividades dropdown */}
                    <div className="relative group h-full flex items-center">
                        <span
                            className={`text-sm font-medium transition-colors border-b-2 py-1 flex items-center gap-1 cursor-pointer ${location.pathname.startsWith("/actividades")
                                ? "text-primary border-primary"
                                : "text-gray-600 border-transparent hover:text-primary hover:border-primary"
                                }`}
                        >
                            Otras Actividades
                            <span className="material-symbols-outlined text-base group-hover:rotate-180 transition-transform duration-200">expand_more</span>
                        </span>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[260px]">
                                <Link to="/actividades/otras" className="flex items-center gap-3 px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-primary text-lg">pool</span>
                                    Pileta y Gimnasio
                                </Link>
                                <Link to="/actividades/tercerizadas" className="flex items-center gap-3 px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-accent text-lg">sports_tennis</span>
                                    Actividades Tercerizadas
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Link
                        to="/espacios"
                        className={`text-sm font-medium transition-colors border-b-2 py-1 ${location.pathname === "/espacios"
                            ? "text-primary border-primary"
                            : "text-gray-600 border-transparent hover:text-primary hover:border-primary"
                            }`}
                    >
                        Espacios Sociales
                    </Link>

                    <Link
                        to="/contacto"
                        className={`text-sm font-medium transition-colors border-b-2 py-1 ${location.pathname === "/contacto"
                            ? "text-primary border-primary"
                            : "text-gray-600 border-transparent hover:text-primary hover:border-primary"
                            }`}
                    >
                        Contacto
                    </Link>

                    {/* Sede Digital */}
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 inline-flex items-center gap-1.5 px-4 py-2 bg-accent text-dark text-sm font-bold rounded-lg hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25 transition-all duration-200 hover:scale-105 active:scale-95"
                    >
                        <span className="material-symbols-outlined text-base">lock</span>
                        Sede Digital
                        <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </a>
                </nav>

                {/* Hamburger */}
                <button
                    className="lg:hidden p-2 text-gray-800 hover:bg-gray-100 rounded transition-colors"
                    onClick={() => {
                        setIsMenuOpen(!isMenuOpen);
                        if (isMenuOpen) setMobileSubOpen(null);
                    }}
                >
                    <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
                </button>
            </div>

            {/* ─── Mobile Menu ─── */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 top-16 bg-black/40 z-40 lg:hidden"
                    onClick={closeMenu}
                />
            )}

            <div className={`fixed top-16 left-0 right-0 bottom-0 z-50 bg-white overflow-y-auto transform transition-transform duration-300 lg:hidden ${isMenuOpen ? 'translate-y-0' : '-translate-y-[120%]'}`}>
                <nav className="flex flex-col p-6">
                    {/* El Club */}
                    <Link
                        to="/el-club"
                        className={`text-base font-semibold py-3 border-b border-gray-100 transition-colors ${location.pathname === "/el-club" ? "text-primary" : "text-gray-800"}`}
                        onClick={closeMenu}
                    >
                        El Club
                    </Link>

                    {/* Deportes — expandible */}
                    <div className="border-b border-gray-100">
                        <button
                            className={`w-full text-left text-base font-semibold py-3 flex items-center justify-between transition-colors ${location.pathname.startsWith("/deportes") ? "text-primary" : "text-gray-800"}`}
                            onClick={() => toggleSub("deportes")}
                        >
                            Deportes
                            <span className={`material-symbols-outlined text-lg transition-transform duration-200 ${mobileSubOpen === "deportes" ? "rotate-180" : ""}`}>expand_more</span>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${mobileSubOpen === "deportes" ? "max-h-40 pb-3" : "max-h-0"}`}>
                            <Link to="/deportes/federativos" className="flex items-center gap-3 pl-4 py-2.5 text-sm text-gray-600 hover:text-primary" onClick={closeMenu}>
                                <span className="material-symbols-outlined text-primary text-base">trophy</span>
                                Deportes Federativos
                            </Link>
                            <Link to="/deportes/escuelitas" className="flex items-center gap-3 pl-4 py-2.5 text-sm text-gray-600 hover:text-primary" onClick={closeMenu}>
                                <span className="material-symbols-outlined text-accent text-base">school</span>
                                Escuelitas Deportivas
                            </Link>
                        </div>
                    </div>

                    {/* Otras Actividades — expandible */}
                    <div className="border-b border-gray-100">
                        <button
                            className={`w-full text-left text-base font-semibold py-3 flex items-center justify-between transition-colors ${location.pathname.startsWith("/actividades") ? "text-primary" : "text-gray-800"}`}
                            onClick={() => toggleSub("actividades")}
                        >
                            Otras Actividades
                            <span className={`material-symbols-outlined text-lg transition-transform duration-200 ${mobileSubOpen === "actividades" ? "rotate-180" : ""}`}>expand_more</span>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${mobileSubOpen === "actividades" ? "max-h-40 pb-3" : "max-h-0"}`}>
                            <Link to="/actividades/otras" className="flex items-center gap-3 pl-4 py-2.5 text-sm text-gray-600 hover:text-primary" onClick={closeMenu}>
                                <span className="material-symbols-outlined text-primary text-base">pool</span>
                                Pileta y Gimnasio
                            </Link>
                            <Link to="/actividades/tercerizadas" className="flex items-center gap-3 pl-4 py-2.5 text-sm text-gray-600 hover:text-primary" onClick={closeMenu}>
                                <span className="material-symbols-outlined text-accent text-base">sports_tennis</span>
                                Actividades Tercerizadas
                            </Link>
                        </div>
                    </div>

                    {/* Espacios Sociales */}
                    <Link
                        to="/espacios"
                        className={`text-base font-semibold py-3 border-b border-gray-100 transition-colors ${location.pathname === "/espacios" ? "text-primary" : "text-gray-800"}`}
                        onClick={closeMenu}
                    >
                        Espacios Sociales
                    </Link>

                    {/* Contacto */}
                    <Link
                        to="/contacto"
                        className={`text-base font-semibold py-3 border-b border-gray-100 transition-colors ${location.pathname === "/contacto" ? "text-primary" : "text-gray-800"}`}
                        onClick={closeMenu}
                    >
                        Contacto
                    </Link>

                    {/* Sede Digital + CTA */}
                    <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col gap-3">
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-accent text-dark py-3 rounded-lg font-bold text-sm hover:bg-accent/90 transition-colors"
                            onClick={closeMenu}
                        >
                            <span className="material-symbols-outlined text-base">lock</span>
                            Sede Digital
                            <span className="material-symbols-outlined text-sm">open_in_new</span>
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
};
