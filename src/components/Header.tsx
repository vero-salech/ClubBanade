import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../constants/data";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-sm h-16">
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
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

                <nav className="hidden lg:flex gap-8 items-center h-full">
                    {NAV_LINKS.map((link) => (
                        link.path === "/deportes" ? (
                            <div key={link.path} className="relative group h-full flex items-center">
                                <Link
                                    to={link.path}
                                    className={`text-sm font-medium transition-colors border-b-2 py-1 flex items-center gap-1 ${location.pathname.startsWith("/deportes")
                                        ? "text-primary border-primary"
                                        : "text-gray-600 border-transparent hover:text-primary hover:border-primary"
                                        }`}
                                >
                                    {link.label}
                                    <span className="material-symbols-outlined text-base group-hover:rotate-180 transition-transform duration-200">expand_more</span>
                                </Link>
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
                        ) : link.path === "/actividades" ? (
                            <div key={link.path} className="relative group h-full flex items-center">
                                <span
                                    className={`text-sm font-medium transition-colors border-b-2 py-1 flex items-center gap-1 cursor-pointer ${location.pathname.startsWith("/actividades")
                                        ? "text-primary border-primary"
                                        : "text-gray-600 border-transparent hover:text-primary hover:border-primary"
                                        }`}
                                >
                                    {link.label}
                                    <span className="material-symbols-outlined text-base group-hover:rotate-180 transition-transform duration-200">expand_more</span>
                                </span>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[260px]">
                                        <Link to="/actividades/otras" className="flex items-center gap-3 px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined text-primary text-lg">pool</span>
                                            Otras Actividades
                                        </Link>
                                        <Link to="/actividades/tercerizadas" className="flex items-center gap-3 px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined text-accent text-lg">sports_tennis</span>
                                            Actividades Tercerizadas
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-medium transition-colors border-b-2 py-1 ${location.pathname === link.path
                                    ? "text-primary border-primary"
                                    : "text-gray-600 border-transparent hover:text-primary hover:border-primary"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        )
                    ))}

                    {/* Sede Digital — Item destacado */}
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

                <button
                    className="lg:hidden p-2 text-gray-800 hover:bg-gray-100 rounded transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
                </button>
            </div>

            {/* Mobile Menu Backdrop */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            {/* Mobile Menu Drawer */}
            <div className={`fixed top-16 right-0 bottom-0 w-64 bg-white z-50 shadow-xl transform transition-transform duration-300 lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <nav className="flex flex-col p-6 gap-4">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-base font-semibold py-2 transition-colors ${location.pathname === link.path ? "text-primary" : "text-gray-700 hover:text-primary"
                                }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col gap-4">
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-accent text-dark py-3 rounded-lg font-bold text-sm hover:bg-accent/90 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <span className="material-symbols-outlined text-base">lock</span>
                            Sede Digital
                            <span className="material-symbols-outlined text-sm">open_in_new</span>
                        </a>
                        <button className="bg-primary text-white py-3 rounded font-bold text-sm">Información socios</button>
                        <button className="border-2 border-black py-3 rounded font-bold text-sm">Conocer el Club</button>
                    </div>
                </nav>
            </div>
        </header>
    );
};
