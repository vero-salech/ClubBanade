import { SportCard } from "./ui/SportCard";
import { SPORTS_DATA } from "../constants/data";

export const Sports = () => {
    return (
        <section className="bg-neutral-bg py-24 px-6" id="deportes">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 max-w-2xl mx-auto">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="w-12 h-[1px] bg-primary/30"></span>
                        <span className="text-primary font-bold uppercase text-xs tracking-widest">Disciplinas</span>
                        <span className="w-12 h-[1px] bg-primary/30"></span>
                    </div>
                    <h3 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">Deportes y Actividades</h3>
                    <p className="text-lg text-gray-600 font-light leading-relaxed">
                        Fomentamos el desarrollo físico y humano a través de múltiples disciplinas para todas las edades, con profesionales dedicados.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {SPORTS_DATA.map((sport, index) => (
                        <SportCard
                            key={index}
                            title={sport.title}
                            icon={sport.icon}
                            color={sport.color as 'primary' | 'accent'}
                            items={sport.items}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
