import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SEO } from "../../components/SEO";
import { useMemberAuth } from "../../contexts/MemberAuthContext";
import { sendMemberNotification } from "../../utils/memberEmail";

type TipoSolicitud = "" | "licencia" | "licencia_deportiva" | "baja_deportiva" | "baja";

const DEPORTES = ["Hockey", "Vóley", "Básquet"];

const MESES_LABEL: Record<number, string> = {
    0: "Enero", 1: "Febrero", 2: "Marzo", 3: "Abril",
    4: "Mayo", 5: "Junio", 6: "Julio", 7: "Agosto",
    8: "Septiembre", 9: "Octubre", 10: "Noviembre", 11: "Diciembre",
};

// Generate next 12 months options starting from next month
const getMonthOptions = () => {
    const now = new Date();
    const options = [];
    for (let i = 1; i <= 12; i++) {
        const date = new Date(now.getFullYear(), now.getMonth() + i, 1);
        options.push({
            value: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`,
            label: `${MESES_LABEL[date.getMonth()]} ${date.getFullYear()}`,
        });
    }
    return options;
};

export const NuevaSolicitud = () => {
    const { user } = useMemberAuth();
    const navigate = useNavigate();
    const [tipo, setTipo] = useState<TipoSolicitud>("");
    const [mesInicio, setMesInicio] = useState("");
    const [duracion, setDuracion] = useState("1");
    const [deporte, setDeporte] = useState("");
    const [motivo, setMotivo] = useState("");
    const [archivo, setArchivo] = useState<File | null>(null);
    const [descripcionLesion, setDescripcionLesion] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const monthOptions = getMonthOptions();

    const [sending, setSending] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);

        // Build email message
        const tipoLabels: Record<string, string> = {
            licencia: "Licencia",
            licencia_deportiva: "Licencia deportiva",
            baja_deportiva: "Baja deportiva",
            baja: "Baja",
        };

        let detalles = `Tipo: ${tipoLabels[tipo] || tipo}`;
        if (needsMes) {
            const mesLabel = monthOptions.find(m => m.value === mesInicio)?.label || mesInicio;
            detalles += `\nDesde: ${mesLabel}\nDuración: ${duracion} ${parseInt(duracion) === 1 ? 'mes' : 'meses'}`;
        }
        if (needsDeporte) detalles += `\nDeporte: ${deporte}`;
        if (needsCertificado && archivo) detalles += `\nCertificado adjuntado: ${archivo.name}`;
        if (needsCertificado && descripcionLesion) detalles += `\nLesión: ${descripcionLesion}`;
        if (motivo) detalles += `\nMotivo: ${motivo}`;

        if (user) {
            await sendMemberNotification({
                socioNombre: user.nombre,
                socioNro: user.nroSocio,
                socioDni: user.dni,
                asunto: `[Mi Banade] Solicitud: ${tipoLabels[tipo]}`,
                mensaje: detalles,
            });
        }

        setSending(false);
        setSubmitted(true);
    };

    const needsMes = tipo === "licencia" || tipo === "licencia_deportiva";
    const needsDeporte = tipo === "baja_deportiva";
    const needsCertificado = tipo === "licencia_deportiva";
    const isComplete =
        tipo &&
        (!needsMes || mesInicio) &&
        (!needsDeporte || deporte) &&
        (!needsCertificado || archivo);

    if (submitted) {
        return (
            <div className="max-w-lg mx-auto text-center py-12">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                    <span className="material-symbols-outlined text-green-600 text-3xl">check_circle</span>
                </div>
                <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">Solicitud enviada</h2>
                <p className="text-gray-500 mb-2">Tu solicitud fue registrada correctamente.</p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-sm font-semibold mb-6">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    Pendiente de revisión
                </div>
                <p className="text-sm text-gray-400 mb-8">
                    Te vamos a avisar cuando la administración revise tu trámite.
                </p>
                <div className="flex gap-3 justify-center">
                    <Link
                        to="/mi-banade/solicitudes"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all"
                    >
                        Ver mis solicitudes
                    </Link>
                    <button
                        onClick={() => { setSubmitted(false); setTipo(""); setMesInicio(""); setDuracion("1"); setDeporte(""); setMotivo(""); setArchivo(null); setDescripcionLesion(""); }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 rounded-lg text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-all"
                    >
                        Nueva solicitud
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto">
            <SEO
                title="Nueva Solicitud — Mi Banade"
                description="Solicitá licencias, bajas deportivas y otros trámites."
                path="/mi-banade/solicitudes/nueva"
            />

            {/* Back */}
            <Link
                to="/mi-banade/solicitudes"
                className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary mb-6 transition-colors"
            >
                <span className="material-symbols-outlined text-base">arrow_back</span>
                Volver a solicitudes
            </Link>

            <h1 className="font-serif text-2xl font-bold text-gray-900 mb-6">Nueva Solicitud</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* ─── Step 1: Tipo ─── */}
                <div className="bg-white rounded-xl border border-amber-200/40 p-6">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                        Tipo de solicitud
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                            { value: "licencia", icon: "event_busy", label: "Licencia", desc: "Suspender cuota temporalmente" },
                            { value: "licencia_deportiva", icon: "sports", label: "Licencia deportiva", desc: "Por lesión (requiere certificado)" },
                            { value: "baja_deportiva", icon: "directions_run", label: "Baja deportiva", desc: "Dejar un deporte, seguir como socio" },
                            { value: "baja", icon: "logout", label: "Baja", desc: "Dejar de ser socio" },
                        ].map((opt) => (
                            <button
                                key={opt.value}
                                type="button"
                                onClick={() => setTipo(opt.value as TipoSolicitud)}
                                className={`text-left p-4 rounded-xl border-2 transition-all ${
                                    tipo === opt.value
                                        ? "border-primary bg-primary/5"
                                        : "border-gray-100 hover:border-gray-200"
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`material-symbols-outlined text-xl ${tipo === opt.value ? "text-primary" : "text-gray-400"}`}>
                                        {opt.icon}
                                    </span>
                                    <div>
                                        <p className={`font-semibold text-sm ${tipo === opt.value ? "text-primary" : "text-gray-800"}`}>
                                            {opt.label}
                                        </p>
                                        <p className="text-xs text-gray-400 mt-0.5">{opt.desc}</p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* ─── Step 2: Campos dinámicos ─── */}
                {tipo && (
                    <div className="bg-white rounded-xl border border-amber-200/40 p-6 space-y-5 animate-[fadeIn_0.3s_ease-out]">
                        <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                            Detalles
                        </h2>

                        {/* Mes de inicio (Licencia / Licencia deportiva) */}
                        {needsMes && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                                        Mes de inicio <span className="text-primary">*</span>
                                    </label>
                                    <select
                                        value={mesInicio}
                                        onChange={(e) => setMesInicio(e.target.value)}
                                        className="w-full border border-gray-200 bg-neutral-bg/50 px-4 py-3 rounded-lg text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                                        required
                                    >
                                        <option value="">Elegí un mes</option>
                                        {monthOptions.map((m) => (
                                            <option key={m.value} value={m.value}>{m.label}</option>
                                        ))}
                                    </select>
                                    <p className="text-xs text-gray-400 mt-1">La licencia comienza el 1° del mes</p>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                                        Duración <span className="text-primary">*</span>
                                    </label>
                                    <select
                                        value={duracion}
                                        onChange={(e) => setDuracion(e.target.value)}
                                        className="w-full border border-gray-200 bg-neutral-bg/50 px-4 py-3 rounded-lg text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                                    >
                                        {[1, 2, 3, 4, 5, 6].map((n) => (
                                            <option key={n} value={n}>{n} {n === 1 ? "mes" : "meses"}</option>
                                        ))}
                                    </select>
                                    <p className="text-xs text-gray-400 mt-1">Máximo 6 meses</p>
                                </div>
                            </div>
                        )}

                        {/* Certificado médico (Licencia deportiva) */}
                        {needsCertificado && (
                            <>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                                        Certificado médico <span className="text-primary">*</span>
                                    </label>
                                    <div
                                        className={`border-2 border-dashed rounded-xl p-6 text-center transition-all ${
                                            archivo ? "border-green-300 bg-green-50/50" : "border-gray-200 hover:border-accent/50"
                                        }`}
                                    >
                                        {archivo ? (
                                            <div className="flex items-center justify-center gap-3">
                                                <span className="material-symbols-outlined text-green-600 text-xl">attach_file</span>
                                                <span className="text-sm font-medium text-gray-700">{archivo.name}</span>
                                                <button
                                                    type="button"
                                                    onClick={() => setArchivo(null)}
                                                    className="text-red-500 hover:text-red-700"
                                                >
                                                    <span className="material-symbols-outlined text-lg">close</span>
                                                </button>
                                            </div>
                                        ) : (
                                            <label className="cursor-pointer">
                                                <span className="material-symbols-outlined text-gray-400 text-3xl mb-2 block">cloud_upload</span>
                                                <p className="text-sm text-gray-600 font-medium">Subí tu certificado médico</p>
                                                <p className="text-xs text-gray-400 mt-1">PDF, JPG o PNG (máx. 5MB)</p>
                                                <input
                                                    type="file"
                                                    accept=".pdf,.jpg,.jpeg,.png"
                                                    onChange={(e) => setArchivo(e.target.files?.[0] || null)}
                                                    className="hidden"
                                                />
                                            </label>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                                        Descripción de la lesión <span className="text-primary">*</span>
                                    </label>
                                    <textarea
                                        value={descripcionLesion}
                                        onChange={(e) => setDescripcionLesion(e.target.value)}
                                        placeholder="Describí brevemente la lesión o motivo..."
                                        rows={3}
                                        className="w-full border border-gray-200 bg-neutral-bg/50 px-4 py-3 rounded-lg text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-none"
                                        required
                                    />
                                </div>
                            </>
                        )}

                        {/* Deporte (Baja deportiva) */}
                        {needsDeporte && (
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                                    Deporte <span className="text-primary">*</span>
                                </label>
                                <select
                                    value={deporte}
                                    onChange={(e) => setDeporte(e.target.value)}
                                    className="w-full border border-gray-200 bg-neutral-bg/50 px-4 py-3 rounded-lg text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                                    required
                                >
                                    <option value="">Elegí el deporte</option>
                                    {DEPORTES.map((d) => (
                                        <option key={d} value={d}>{d}</option>
                                    ))}
                                </select>
                            </div>
                        )}

                        {/* Motivo (siempre opcional, excepto baja total) */}
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                                Motivo {tipo !== "licencia_deportiva" && <span className="text-gray-300 font-normal normal-case">(opcional)</span>}
                            </label>
                            <textarea
                                value={motivo}
                                onChange={(e) => setMotivo(e.target.value)}
                                placeholder={
                                    tipo === "baja"
                                        ? "Contanos por qué querés darte de baja..."
                                        : "Algún detalle adicional que quieras agregar..."
                                }
                                rows={3}
                                className="w-full border border-gray-200 bg-neutral-bg/50 px-4 py-3 rounded-lg text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-none"
                            />
                        </div>
                    </div>
                )}

                {/* ─── Submit ─── */}
                {tipo && (
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            onClick={() => navigate("/mi-banade/solicitudes")}
                            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            disabled={!isComplete || sending}
                            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary/20 active:scale-95"
                        >
                            {sending ? (
                                <>
                                    <span className="material-symbols-outlined text-lg animate-spin">progress_activity</span>
                                    Enviando...
                                </>
                            ) : (
                                <>
                                    <span className="material-symbols-outlined text-lg">send</span>
                                    Enviar solicitud
                                </>
                            )}
                        </button>
                    </div>
                )}
            </form>
        </div>
    );
};
