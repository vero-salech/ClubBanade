import { Link } from "react-router-dom";
import { SEO } from "../../components/SEO";

const QUINCHOS = [
    { id: "q1", nombre: "Quincho 1", capacidad: "Hasta 30 personas", imagen: "outdoor_grill" },
    { id: "q2", nombre: "Quincho 2", capacidad: "Hasta 30 personas", imagen: "outdoor_grill" },
    { id: "q3", nombre: "Quincho 3", capacidad: "Hasta 40 personas", imagen: "outdoor_grill" },
    { id: "q4", nombre: "Quincho 4", capacidad: "Hasta 40 personas", imagen: "outdoor_grill" },
    { id: "q5", nombre: "Quincho 5", capacidad: "Hasta 50 personas", imagen: "outdoor_grill" },
    { id: "mesas", nombre: "Mesas al aire libre", capacidad: "Espacios abiertos", imagen: "deck" },
    { id: "parrillas", nombre: "Parrillas", capacidad: "Uso compartido", imagen: "local_fire_department" },
];

const MOCK_RESERVAS = [
    {
        id: "RES-001",
        quincho: "Quincho 3",
        fecha: "15/02/2026",
        horario: "A convenir",
        estado: "aprobada" as const,
    },
    {
        id: "RES-002",
        quincho: "Quincho 1",
        fecha: "22/03/2026",
        horario: "A convenir",
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
        label: "Confirmada",
        icon: "check_circle",
        class: "bg-green-50 text-green-700 border-green-200",
    },
    rechazada: {
        label: "Rechazada",
        icon: "cancel",
        class: "bg-red-50 text-red-700 border-red-200",
    },
};

export const MemberQuinchos = () => {
    return (
        <div>
            <SEO
                title="Quinchos — Mi Banade"
                description="Reservá quinchos y espacios del Club Banade."
                path="/mi-banade/quinchos"
            />

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="font-serif text-2xl font-bold text-gray-900">Quinchos</h1>
                    <p className="text-sm text-gray-500 mt-1">Reservá tu espacio para tu próximo evento</p>
                </div>
                <Link
                    to="/mi-banade/quinchos/nueva"
                    className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-95"
                >
                    <span className="material-symbols-outlined text-lg">add</span>
                    Nueva reserva
                </Link>
            </div>

            {/* ─── Available Quinchos ─── */}
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Espacios disponibles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                {QUINCHOS.map((q) => (
                    <div key={q.id} className="bg-white rounded-xl border border-amber-200/40 p-4 flex items-center gap-3 hover:border-accent/40 transition-colors">
                        <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-orange-600 text-xl">{q.imagen}</span>
                        </div>
                        <div>
                            <p className="font-semibold text-sm text-gray-900">{q.nombre}</p>
                            <p className="text-xs text-gray-400">{q.capacidad}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* ─── My Reservations ─── */}
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Mis reservas</h2>
            <div className="space-y-3">
                {MOCK_RESERVAS.map((res) => {
                    const config = ESTADO_CONFIG[res.estado];
                    return (
                        <div
                            key={res.id}
                            className="bg-white rounded-xl border border-amber-200/40 p-5 flex items-center gap-4 hover:border-accent/40 transition-colors"
                        >
                            <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-orange-600 text-xl">outdoor_grill</span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-0.5">
                                    <h3 className="font-semibold text-gray-900 text-sm">{res.quincho}</h3>
                                    <span className="text-xs text-gray-400">#{res.id}</span>
                                </div>
                                <p className="text-sm text-gray-500">
                                    📅 {res.fecha} · Horario: {res.horario}
                                </p>
                            </div>
                            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border shrink-0 ${config.class}`}>
                                <span className="material-symbols-outlined text-sm">{config.icon}</span>
                                {config.label}
                            </div>
                        </div>
                    );
                })}
            </div>

            <p className="text-center text-xs text-gray-400 mt-8">
                Los datos mostrados son de ejemplo. Cuando el sistema esté conectado, acá vas a ver tus reservas reales.
            </p>
        </div>
    );
};
