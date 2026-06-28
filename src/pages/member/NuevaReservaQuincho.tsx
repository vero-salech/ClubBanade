import { useState } from "react";
import { Link } from "react-router-dom";
import { SEO } from "../../components/SEO";
import { useMemberAuth } from "../../contexts/MemberAuthContext";
import { sendMemberNotification } from "../../utils/memberEmail";

const QUINCHOS = [
    { id: "q1", nombre: "Quincho 1", capacidad: "Hasta 30 personas" },
    { id: "q2", nombre: "Quincho 2", capacidad: "Hasta 30 personas" },
    { id: "q3", nombre: "Quincho 3", capacidad: "Hasta 40 personas" },
    { id: "q4", nombre: "Quincho 4", capacidad: "Hasta 40 personas" },
    { id: "q5", nombre: "Quincho 5", capacidad: "Hasta 50 personas" },
    { id: "mesas", nombre: "Mesas al aire libre", capacidad: "Espacios abiertos" },
    { id: "parrillas", nombre: "Parrillas", capacidad: "Uso compartido" },
];

// Mock occupied dates (DD) for the selected month — replace with real data
const MOCK_OCCUPIED: Record<string, number[]> = {
    q1: [5, 12, 19, 26],
    q2: [3, 10, 17, 24],
    q3: [7, 14, 21, 28],
    q4: [1, 8, 15, 22],
    q5: [4, 11, 18, 25],
    mesas: [6, 20],
    parrillas: [13, 27],
};

const DAYS = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

export const NuevaReservaQuincho = () => {
    const [quincho, setQuincho] = useState("");
    const [selectedDate, setSelectedDate] = useState<number | null>(null);
    const [asistSocios, setAsistSocios] = useState("");
    const [asistNoSocios, setAsistNoSocios] = useState("");
    const [observaciones, setObservaciones] = useState("");
    const [submitted, setSubmitted] = useState(false);

    // Calendar state
    const now = new Date();
    const [viewMonth, setViewMonth] = useState(now.getMonth());
    const [viewYear, setViewYear] = useState(now.getFullYear());

    // Can't pick dates in the past
    const isToday = viewMonth === now.getMonth() && viewYear === now.getFullYear();

    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay();
    const occupiedDays = quincho ? (MOCK_OCCUPIED[quincho] || []) : [];

    const monthLabel = new Date(viewYear, viewMonth).toLocaleDateString("es-AR", {
        month: "long",
        year: "numeric",
    });

    const prevMonth = () => {
        if (viewMonth === 0) { setViewMonth(11); setViewYear(viewYear - 1); }
        else setViewMonth(viewMonth - 1);
        setSelectedDate(null);
    };

    const nextMonth = () => {
        if (viewMonth === 11) { setViewMonth(0); setViewYear(viewYear + 1); }
        else setViewMonth(viewMonth + 1);
        setSelectedDate(null);
    };

    const canGoPrev = viewYear > now.getFullYear() || (viewYear === now.getFullYear() && viewMonth > now.getMonth());

    const { user } = useMemberAuth();
    const [sending, setSending] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);

        const qName = QUINCHOS.find((q) => q.id === quincho)?.nombre || quincho;
        const totalAsist = parseInt(asistSocios || "0") + parseInt(asistNoSocios || "0");

        let detalles = `Espacio: ${qName}`;
        detalles += `\nFecha: ${selectedDate}/${viewMonth + 1}/${viewYear}`;
        detalles += `\nAsistentes socios: ${asistSocios || "0"}`;
        detalles += `\nAsistentes no socios: ${asistNoSocios || "0"}`;
        detalles += `\nTotal asistentes: ${totalAsist}`;
        if (observaciones) detalles += `\nObservaciones: ${observaciones}`;

        if (user) {
            await sendMemberNotification({
                socioNombre: user.nombre,
                socioNro: user.nroSocio,
                socioDni: user.dni,
                asunto: `[Mi Banade] Reserva Quincho: ${qName}`,
                mensaje: detalles,
            });
        }

        setSending(false);
        setSubmitted(true);
    };

    if (submitted) {
        const qName = QUINCHOS.find((q) => q.id === quincho)?.nombre || quincho;
        return (
            <div className="max-w-lg mx-auto text-center py-12">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                    <span className="material-symbols-outlined text-green-600 text-3xl">check_circle</span>
                </div>
                <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">Reserva solicitada</h2>
                <p className="text-gray-500 mb-1">
                    <strong>{qName}</strong> — {selectedDate}/{viewMonth + 1}/{viewYear}
                </p>
                <p className="text-sm text-gray-400 mb-2">Horario: A convenir con administración</p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-sm font-semibold mb-6">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    Pendiente de confirmación
                </div>
                <p className="text-sm text-gray-400 mb-8">
                    Te vamos a avisar cuando administración confirme tu reserva.
                </p>
                <div className="flex gap-3 justify-center">
                    <Link
                        to="/mi-banade/quinchos"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all"
                    >
                        Ver mis reservas
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto">
            <SEO
                title="Nueva Reserva — Mi Banade"
                description="Reservá un quincho del Club Banade."
                path="/mi-banade/quinchos/nueva"
            />

            <Link
                to="/mi-banade/quinchos"
                className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary mb-6 transition-colors"
            >
                <span className="material-symbols-outlined text-base">arrow_back</span>
                Volver a quinchos
            </Link>

            <h1 className="font-serif text-2xl font-bold text-gray-900 mb-6">Nueva Reserva</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* ─── Select Quincho ─── */}
                <div className="bg-white rounded-xl border border-amber-200/40 p-6">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                        ¿Qué espacio querés reservar?
                    </h2>
                    <select
                        value={quincho}
                        onChange={(e) => { setQuincho(e.target.value); setSelectedDate(null); }}
                        className="w-full border border-gray-200 bg-neutral-bg/50 px-4 py-3 rounded-lg text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                        required
                    >
                        <option value="">Elegí un espacio</option>
                        {QUINCHOS.map((q) => (
                            <option key={q.id} value={q.id}>{q.nombre} — {q.capacidad}</option>
                        ))}
                    </select>
                </div>

                {/* ─── Calendar ─── */}
                {quincho && (
                    <div className="bg-white rounded-xl border border-amber-200/40 p-6 animate-[fadeIn_0.3s_ease-out]">
                        <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                            Elegí una fecha
                        </h2>

                        {/* Month navigation */}
                        <div className="flex items-center justify-between mb-4">
                            <button
                                type="button"
                                onClick={prevMonth}
                                disabled={!canGoPrev}
                                className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                                <span className="material-symbols-outlined text-lg">chevron_left</span>
                            </button>
                            <span className="font-semibold text-gray-800 capitalize">{monthLabel}</span>
                            <button
                                type="button"
                                onClick={nextMonth}
                                className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <span className="material-symbols-outlined text-lg">chevron_right</span>
                            </button>
                        </div>

                        {/* Day headers */}
                        <div className="grid grid-cols-7 mb-2">
                            {DAYS.map((d) => (
                                <div key={d} className="text-center text-xs font-bold text-gray-400 uppercase py-1">
                                    {d}
                                </div>
                            ))}
                        </div>

                        {/* Day cells */}
                        <div className="grid grid-cols-7 gap-1">
                            {/* Empty cells before first day */}
                            {Array.from({ length: firstDayOfWeek }).map((_, i) => (
                                <div key={`empty-${i}`} />
                            ))}

                            {/* Day cells */}
                            {Array.from({ length: daysInMonth }).map((_, i) => {
                                const day = i + 1;
                                const isOccupied = occupiedDays.includes(day);
                                const isPast = isToday && day <= now.getDate();
                                const isSelected = selectedDate === day;
                                const isDisabled = isOccupied || isPast;

                                return (
                                    <button
                                        key={day}
                                        type="button"
                                        disabled={isDisabled}
                                        onClick={() => setSelectedDate(day)}
                                        className={`aspect-square flex items-center justify-center rounded-lg text-sm font-medium transition-all ${
                                            isSelected
                                                ? "bg-primary text-white shadow-md"
                                                : isOccupied
                                                ? "bg-red-50 text-red-300 cursor-not-allowed line-through"
                                                : isPast
                                                ? "text-gray-200 cursor-not-allowed"
                                                : "text-gray-700 hover:bg-accent/20 hover:text-gray-900"
                                        }`}
                                        title={isOccupied ? "Fecha no disponible" : ""}
                                    >
                                        {day}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Legend */}
                        <div className="flex items-center gap-4 mt-4 pt-3 border-t border-gray-100">
                            <div className="flex items-center gap-1.5 text-xs text-gray-400">
                                <div className="w-3 h-3 bg-red-50 border border-red-200 rounded" />
                                Ocupado
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-gray-400">
                                <div className="w-3 h-3 bg-primary rounded" />
                                Tu selección
                            </div>
                        </div>

                        {/* Selected date info */}
                        {selectedDate && (
                            <div className="mt-4 p-3 bg-accent/10 rounded-lg flex items-center gap-2 text-sm">
                                <span className="material-symbols-outlined text-accent text-lg">event</span>
                                <span className="text-gray-700">
                                    Fecha seleccionada: <strong>{selectedDate}/{viewMonth + 1}/{viewYear}</strong>
                                </span>
                            </div>
                        )}
                    </div>
                )}

                {/* ─── Horario & Observaciones ─── */}
                {quincho && selectedDate && (
                    <div className="bg-white rounded-xl border border-amber-200/40 p-6 space-y-4 animate-[fadeIn_0.3s_ease-out]">
                        {/* Horario */}
                        <div className="flex items-center gap-3 p-3 bg-blue-50/50 rounded-lg border border-blue-100">
                            <span className="material-symbols-outlined text-blue-500 text-lg">info</span>
                            <p className="text-sm text-blue-700">
                                El horario se coordina directamente con administración después de confirmar la reserva.
                            </p>
                        </div>

                        {/* Asistentes */}
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                                Asistentes <span className="text-primary">*</span>
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="asist-socios" className="block text-xs text-gray-500 mb-1">Socios</label>
                                    <input
                                        id="asist-socios"
                                        type="number"
                                        min="1"
                                        max="99"
                                        placeholder="0"
                                        value={asistSocios}
                                        onChange={(e) => setAsistSocios(e.target.value)}
                                        className="w-full border border-gray-200 bg-neutral-bg/50 px-4 py-3 rounded-lg text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="asist-no-socios" className="block text-xs text-gray-500 mb-1">No socios</label>
                                    <input
                                        id="asist-no-socios"
                                        type="number"
                                        min="0"
                                        max="99"
                                        placeholder="0"
                                        value={asistNoSocios}
                                        onChange={(e) => setAsistNoSocios(e.target.value)}
                                        className="w-full border border-gray-200 bg-neutral-bg/50 px-4 py-3 rounded-lg text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                                        required
                                    />
                                </div>
                            </div>
                            {(asistSocios || asistNoSocios) && (
                                <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                                    <span className="material-symbols-outlined text-base text-accent">groups</span>
                                    Total: <strong>{(parseInt(asistSocios || "0") + parseInt(asistNoSocios || "0"))}</strong> personas
                                </div>
                            )}
                        </div>

                        {/* Observaciones */}
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                                Observaciones <span className="text-gray-300 font-normal normal-case">(opcional)</span>
                            </label>
                            <textarea
                                value={observaciones}
                                onChange={(e) => setObservaciones(e.target.value)}
                                placeholder="Horario preferido, necesidades especiales..."
                                rows={3}
                                className="w-full border border-gray-200 bg-neutral-bg/50 px-4 py-3 rounded-lg text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-none"
                            />
                        </div>

                        {/* Pagar (disabled) */}
                        <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-100">
                            <span className="material-symbols-outlined text-gray-300 text-lg">payments</span>
                            <span className="text-sm text-gray-400">Pago online — Próximamente</span>
                        </div>
                    </div>
                )}

                {/* ─── Submit ─── */}
                {quincho && selectedDate && (
                    <div className="flex items-center justify-between">
                        <Link
                            to="/mi-banade/quinchos"
                            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                        >
                            Cancelar
                        </Link>
                        <button
                            type="submit"
                            disabled={sending}
                            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {sending ? (
                                <>
                                    <span className="material-symbols-outlined text-lg animate-spin">progress_activity</span>
                                    Enviando...
                                </>
                            ) : (
                                <>
                                    <span className="material-symbols-outlined text-lg">send</span>
                                    Solicitar reserva
                                </>
                            )}
                        </button>
                    </div>
                )}
            </form>
        </div>
    );
};
