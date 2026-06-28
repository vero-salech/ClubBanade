import { Link } from "react-router-dom";
import { SEO } from "../../components/SEO";

export const MemberComingSoon = () => {
    return (
        <div className="min-h-[80vh] bg-member-bg flex items-center justify-center px-6">
            <SEO
                title="Mi Banade — Portal de Socios"
                description="Próximamente: tu portal exclusivo de socio del Club Banade. Gestioná trámites, reservas y más."
                path="/mi-banade"
            />
            <div className="text-center max-w-lg">
                {/* Icon */}
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-accent text-4xl">construction</span>
                </div>

                {/* Title */}
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Mi Banade
                </h1>
                <p className="text-lg text-primary font-semibold mb-3">Próximamente</p>

                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed">
                    Estamos trabajando en tu portal exclusivo de socio. 
                    Muy pronto vas a poder gestionar tus trámites, reservar quinchos 
                    y mucho más desde acá.
                </p>

                {/* Features preview */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                    {[
                        { icon: "description", label: "Solicitudes" },
                        { icon: "outdoor_grill", label: "Reservar quinchos" },
                        { icon: "account_balance", label: "Estado de cuenta" },
                        { icon: "badge", label: "Carnet digital" },
                    ].map((f) => (
                        <div key={f.label} className="bg-white rounded-xl px-4 py-3 border border-accent/20 flex items-center gap-2">
                            <span className="material-symbols-outlined text-accent text-lg">{f.icon}</span>
                            <span className="text-sm text-gray-700">{f.label}</span>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                    <span className="material-symbols-outlined text-lg">arrow_back</span>
                    Volver al sitio
                </Link>
            </div>
        </div>
    );
};
