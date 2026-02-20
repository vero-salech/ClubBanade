interface SpaceCardProps {
    title: string;
    description: string;
    image: string;
    highlight?: string;
}

export const SpaceCard = ({ title, description, image, highlight }: SpaceCardProps) => {
    return (
        <div className="group cursor-default bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
            <div className="overflow-hidden relative h-64 bg-gray-100">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url("${image}")` }}
                ></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
            </div>
            <div className="p-6">
                <h4 className="font-serif text-2xl font-bold text-gray-900 mb-3">{title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                    {description.split(highlight || '').map((part, i, arr) => (
                        <span key={i}>
                            {part}
                            {i < arr.length - 1 && highlight && (
                                <span className="text-primary font-bold border-b-2 border-primary/20">{highlight}</span>
                            )}
                        </span>
                    ))}
                </p>
                <div className="mt-6 pt-4 border-t border-gray-50 flex justify-between items-center">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Ver más</span>
                    <span className="material-symbols-outlined text-primary scale-0 group-hover:scale-100 transition-transform duration-300">arrow_forward</span>
                </div>
            </div>
        </div>
    );
};
