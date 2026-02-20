interface SportCardProps {
    title: string;
    icon: string;
    color: 'primary' | 'accent';
    items: string[];
}

export const SportCard = ({ title, icon, color, items }: SportCardProps) => {
    const borderColor = color === 'primary' ? 'border-primary' : 'border-accent';
    const iconColor = color === 'primary' ? 'text-primary' : 'text-accent';
    const bulletColor = color === 'primary' ? 'bg-primary' : 'bg-accent';

    return (
        <div className={`bg-white p-8 rounded-xl shadow-sm border-t-4 ${borderColor} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}>
            <div className="flex items-center gap-3 mb-6">
                <span className={`material-symbols-outlined ${iconColor} text-4xl group-hover:scale-110 transition-transform`}>{icon}</span>
                <h4 className="font-serif text-xl font-bold text-gray-900">{title}</h4>
            </div>
            <ul className="space-y-4">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700 font-medium">
                        <span className={`w-2 h-2 ${bulletColor} rounded-full mr-3 opacity-70`}></span>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
