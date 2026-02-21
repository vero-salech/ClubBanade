import { Link } from "react-router-dom";
import { SpaceCard } from "./ui/SpaceCard";
import { SPACES_DATA } from "../constants/data";

export const Spaces = () => {
    return (
        <section className="py-24 px-6 bg-white" id="espacios">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-100 pb-8">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="w-8 h-[2px] bg-accent"></span>
                            <span className="text-gray-500 font-bold uppercase text-xs tracking-widest">Instalaciones</span>
                        </div>
                        <h3 className="font-serif text-4xl font-bold text-gray-900 mb-4">Espacios Sociales</h3>
                        <p className="text-lg text-gray-600">Áreas diseñadas exclusivamente para el encuentro, el relax y el disfrute de nuestros socios.</p>
                    </div>
                    <Link className="hidden md:inline-flex items-center text-primary font-bold hover:text-red-800 transition-all text-sm mt-4 md:mt-0 group" to="/espacios">
                        Ver todos los espacios
                        <span className="material-symbols-outlined text-base ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {SPACES_DATA.map((space, index) => (
                        <SpaceCard
                            key={index}
                            title={space.title}
                            description={space.description}
                            image={space.image}
                            highlight={space.highlight}
                            link={space.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
