import { Link } from "react-router-dom";
import heroImg from "../assets/ImagenHero.png";

export const Hero = () => {
    return (
        <section className="relative bg-black text-white min-h-[660px] flex items-center justify-center overflow-hidden">
            {/* Background Image & Overlays */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 z-10"></div>
                <div
                    className="w-full h-full bg-cover bg-center scale-105 animate-slow-zoom"
                    style={{ backgroundImage: `url(${heroImg})` }}
                ></div>
            </div>

            {/* Content */}
            <div className="relative z-20 text-left w-full max-w-7xl px-6 lg:px-12 flex flex-col gap-8 items-start">
                <div className="animate-fade-in-up">
                    <span className="inline-flex items-center gap-2 py-1 px-3 bg-primary/20 backdrop-blur-md border border-primary/30 text-primary-light text-[10px] font-bold uppercase tracking-[0.3em] rounded-full mb-5">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
                        Institucional
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 drop-shadow-2xl">
                        Club Banco <br />
                        Nacional de <br />
                        <span className="text-accent">Desarrollo</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-300 font-light max-w-2xl leading-relaxed">
                        Un espacio de encuentro para nuestra comunidad. Mantenemos vivos los valores que nos definen desde hace generaciones.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto animate-fade-in-up delay-200">
                    <Link
                        to="/el-club"
                        className="group relative px-7 py-3 bg-primary text-white overflow-hidden rounded-lg font-semibold text-sm tracking-wide transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Conocer el Club
                            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                        </span>
                        <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </Link>
                    <Link
                        to="/contacto"
                        className="px-7 py-3 bg-white/5 backdrop-blur-xl border-2 border-white/20 hover:border-accent hover:bg-white/10 text-white transition-all font-semibold text-sm tracking-wide rounded-lg flex items-center justify-center gap-2 hover:text-accent shadow-xl"
                    >
                        Información para socios
                    </Link>
                </div>
            </div>

            {/* Bottom Accent Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-2.5 flex z-30 opacity-70">
                <div className="w-1/3 bg-black"></div>
                <div className="w-1/3 bg-primary"></div>
                <div className="w-1/3 bg-accent"></div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce opacity-50">
                <span className="material-symbols-outlined text-white text-3xl">expand_more</span>
            </div>
        </section>
    );
};
