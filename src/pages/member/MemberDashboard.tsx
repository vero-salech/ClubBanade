import { Link } from "react-router-dom";
import { SEO } from "../../components/SEO";
import { useMemberAuth } from "../../contexts/MemberAuthContext";

interface DashboardCard {
    to: string;
    icon: string;
    label: string;
    description: string;
    enabled: boolean;
    badge?: string;
    accentColor: string;
}

const CARDS: DashboardCard[] = [
    {
        to: "/mi-banade/solicitudes",
        icon: "description",
        label: "Mis Solicitudes",
        description: "Licencias, bajas deportivas y otros trámites",
        enabled: true,
        accentColor: "text-blue-600 bg-blue-50",
    },
    {
        to: "/mi-banade/quinchos",
        icon: "outdoor_grill",
        label: "Reservar Quincho",
        description: "Consultá disponibilidad y solicitá tu reserva",
        enabled: true,
        accentColor: "text-orange-600 bg-orange-50",
    },
    {
        to: "#",
        icon: "account_balance",
        label: "Mi Estado de Cuenta",
        description: "Cuotas, aranceles y pagos realizados",
        enabled: false,
        badge: "Próximamente",
        accentColor: "text-green-600 bg-green-50",
    },
    {
        to: "#",
        icon: "badge",
        label: "Mi Carnet Digital",
        description: "Tu carnet de socio en el celular",
        enabled: false,
        badge: "Próximamente",
        accentColor: "text-purple-600 bg-purple-50",
    },
    {
        to: "#",
        icon: "payments",
        label: "Pagar Online",
        description: "Pagá cuotas y reservas desde acá",
        enabled: false,
        badge: "Próximamente",
        accentColor: "text-emerald-600 bg-emerald-50",
    },
];

// Mock announcement — replace with real data when backend is connected
const MOCK_ANNOUNCEMENT = {
    title: "Torneo de Verano 2026",
    message: "¡Inscripción abierta! Consultá los deportes disponibles y anotate antes del 15 de febrero.",
    date: "20 Ene 2026",
    icon: "campaign",
};

export const MemberDashboard = () => {
    const { user } = useMemberAuth();

    return (
        <div>
            <SEO
                title="Inicio — Mi Banade"
                description="Panel principal del portal de socios del Club Banade."
                path="/mi-banade/inicio"
            />

            {/* ─── Welcome Section ─── */}
            <div className="mb-8">
                <h1 className="font-serif text-2xl md:text-3xl font-bold text-gray-900">
                    ¡Bienvenido, {user?.nombre}!
                </h1>
                <p className="text-gray-500 mt-1">
                    ¿Qué necesitás hacer hoy?
                </p>
            </div>

            {/* ─── Announcement Banner ─── */}
            {MOCK_ANNOUNCEMENT && (
                <div className="mb-8 bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-xl p-5 flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-accent text-xl">{MOCK_ANNOUNCEMENT.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-gray-900 text-sm">{MOCK_ANNOUNCEMENT.title}</h3>
                            <span className="text-xs text-gray-400">{MOCK_ANNOUNCEMENT.date}</span>
                        </div>
                        <p className="text-sm text-gray-600">{MOCK_ANNOUNCEMENT.message}</p>
                    </div>
                </div>
            )}

            {/* ─── Cards Grid ─── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {CARDS.map((card) => {
                    const content = (
                        <div
                            className={`relative bg-white rounded-xl border p-6 transition-all duration-200 group ${
                                card.enabled
                                    ? "border-amber-200/40 hover:border-accent/50 hover:shadow-lg hover:shadow-amber-900/5 hover:-translate-y-0.5 cursor-pointer"
                                    : "border-gray-100 opacity-60 cursor-not-allowed"
                            }`}
                        >
                            {/* Badge */}
                            {card.badge && (
                                <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full">
                                    {card.badge}
                                </span>
                            )}

                            {/* Icon */}
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${card.accentColor}`}>
                                <span className="material-symbols-outlined text-2xl">{card.icon}</span>
                            </div>

                            {/* Text */}
                            <h3 className="font-semibold text-gray-900 mb-1">{card.label}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{card.description}</p>

                            {/* Arrow */}
                            {card.enabled && (
                                <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="material-symbols-outlined text-accent text-lg">arrow_forward</span>
                                </div>
                            )}
                        </div>
                    );

                    return card.enabled ? (
                        <Link key={card.label} to={card.to}>
                            {content}
                        </Link>
                    ) : (
                        <div key={card.label}>{content}</div>
                    );
                })}
            </div>

            {/* ─── WhatsApp Socios ─── */}
            <div className="mt-6">
                <a
                    href="https://wa.me/5491123984714"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-white rounded-xl border border-green-200/60 p-5 hover:border-green-400 hover:shadow-lg hover:shadow-green-900/5 transition-all group"
                >
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-green-100 transition-colors">
                        <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 text-sm">WhatsApp exclusivo socios</h3>
                        <p className="text-sm text-gray-500">Comunicate directamente con administración</p>
                    </div>
                    <span className="material-symbols-outlined text-green-500 text-lg opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
                </a>
            </div>

            {/* ─── Quick Info ─── */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl border border-amber-200/40 p-4 flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-xl">person</span>
                    <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider">Socio</p>
                        <p className="font-semibold text-gray-900">#{user?.nroSocio}</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl border border-amber-200/40 p-4 flex items-center gap-3">
                    <span className="material-symbols-outlined text-green-600 text-xl">check_circle</span>
                    <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider">Estado</p>
                        <p className="font-semibold text-green-700">{user?.categoria}</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl border border-amber-200/40 p-4 flex items-center gap-3">
                    <span className="material-symbols-outlined text-accent text-xl">badge</span>
                    <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider">DNI</p>
                        <p className="font-semibold text-gray-900">{user?.dni}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
