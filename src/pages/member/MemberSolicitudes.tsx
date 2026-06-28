import { Link } from "react-router-dom";
import { SEO } from "../../components/SEO";

// Mock data — replace with real API data when backend is connected
const MOCK_SOLICITUDES = [
    {
        id: "SOL-001",
        tipo: "Licencia",
        fecha: "15/01/2026",
        detalle: "Licencia de 3 meses desde Febrero 2026",
        estado: "aprobada" as const,
    },
    {
        id: "SOL-002",
        tipo: "Baja deportiva",
        fecha: "10/12/2025",
        detalle: "Baja de Hockey",
        estado: "aprobada" as const,
    },
    {
        id: "SOL-003",
        tipo: "Licencia deportiva",
        fecha: "05/01/2026",
        detalle: "Licencia deportiva 2 meses — Lesión de rodilla",
        estado: "pendiente" as const,
    },
];

const ESTADO_CONFIG = {
    pendiente: {
        label: "Pendiente",
        icon: "schedule",
        class: "bg-amber-50 text-amber-700 border-amber-200",
    },
    aprobada: {
        label: "Aprobada",
        icon: "check_circle",
        class: "bg-green-50 text-green-700 border-green-200",
    },
    rechazada: {
        label: "Rechazada",
        icon: "cancel",
        class: "bg-red-50 text-red-700 border-red-200",
    },
};

export const MemberSolicitudes = () => {
    return (
        <div>
            <SEO
                title="Mis Solicitudes — Mi Banade"
                description="Gestioná tus solicitudes de licencias, bajas y trámites."
                path="/mi-banade/solicitudes"
            />

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="font-serif text-2xl font-bold text-gray-900">Mis Solicitudes</h1>
                    <p className="text-sm text-gray-500 mt-1">Historial y estado de tus trámites</p>
                </div>
                <Link
                    to="/mi-banade/solicitudes/nueva"
                    className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-95"
                >
                    <span className="material-symbols-outlined text-lg">add</span>
                    Nueva solicitud
                </Link>
            </div>

            {/* List */}
            <div className="space-y-3">
                {MOCK_SOLICITUDES.map((sol) => {
                    const config = ESTADO_CONFIG[sol.estado];
                    return (
                        <div
                            key={sol.id}
                            className="bg-white rounded-xl border border-amber-200/40 p-5 flex items-center gap-4 hover:border-accent/40 transition-colors"
                        >
                            {/* Type icon */}
                            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-blue-600 text-xl">
                                    {sol.tipo === "Licencia" ? "event_busy" :
                                     sol.tipo === "Licencia deportiva" ? "sports" :
                                     sol.tipo === "Baja deportiva" ? "directions_run" : "logout"}
                                </span>
                            </div>

                            {/* Info */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-0.5">
                                    <h3 className="font-semibold text-gray-900 text-sm">{sol.tipo}</h3>
                                    <span className="text-xs text-gray-400">#{sol.id}</span>
                                </div>
                                <p className="text-sm text-gray-500 truncate">{sol.detalle}</p>
                                <p className="text-xs text-gray-400 mt-1">{sol.fecha}</p>
                            </div>

                            {/* Status badge */}
                            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border shrink-0 ${config.class}`}>
                                <span className="material-symbols-outlined text-sm">{config.icon}</span>
                                {config.label}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Empty state hint */}
            <p className="text-center text-xs text-gray-400 mt-8">
                Los datos mostrados son de ejemplo. Cuando el sistema esté conectado, acá vas a ver tus solicitudes reales.
            </p>
        </div>
    );
};
