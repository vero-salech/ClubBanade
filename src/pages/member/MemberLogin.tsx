import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMemberAuth } from "../../contexts/MemberAuthContext";
import { SEO } from "../../components/SEO";

export const MemberLogin = () => {
    const { login, isLoggedIn } = useMemberAuth();
    const navigate = useNavigate();
    const [dni, setDni] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
    const [showPassword, setShowPassword] = useState(false);

    // If already logged in, redirect
    if (isLoggedIn) {
        navigate("/mi-banade/inicio", { replace: true });
        return null;
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!dni || !password) return;

        setStatus("loading");
        const success = await login(dni, password);
        if (success) {
            navigate("/mi-banade/inicio", { replace: true });
        } else {
            setStatus("error");
        }
    };

    return (
        <div className="min-h-[80vh] bg-member-bg flex items-center justify-center px-6 py-12">
            <SEO
                title="Iniciar sesión — Mi Banade"
                description="Ingresá al portal exclusivo de socios del Club Banade."
                path="/mi-banade/login"
            />

            <div className="w-full max-w-md">
                {/* Logo & Title */}
                <div className="text-center mb-8">
                    <div className="w-20 h-20 mx-auto mb-4">
                        <img
                            src="/logo.png"
                            alt="Club Banade"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <h1 className="font-serif text-2xl font-bold text-gray-900">Mi Banade</h1>
                    <p className="text-sm text-gray-500 mt-1">Portal exclusivo para socios</p>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-2xl shadow-lg shadow-amber-900/5 border border-amber-200/30 p-8">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* DNI */}
                        <div>
                            <label htmlFor="login-dni" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                                DNI
                            </label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">badge</span>
                                <input
                                    id="login-dni"
                                    type="text"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    placeholder="Ingresá tu DNI sin puntos"
                                    value={dni}
                                    onChange={(e) => setDni(e.target.value.replace(/\D/g, ""))}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 bg-neutral-bg/50 rounded-lg text-sm focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all"
                                    disabled={status === "loading"}
                                    required
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="login-password" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                                Contraseña
                            </label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">lock</span>
                                <input
                                    id="login-password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Ingresá tu contraseña"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-10 pr-12 py-3 border border-gray-200 bg-neutral-bg/50 rounded-lg text-sm focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all"
                                    disabled={status === "loading"}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <span className="material-symbols-outlined text-lg">
                                        {showPassword ? "visibility_off" : "visibility"}
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Error */}
                        {status === "error" && (
                            <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 px-4 py-2.5 rounded-lg">
                                <span className="material-symbols-outlined text-base">error</span>
                                DNI o contraseña incorrectos.
                            </div>
                        )}

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={status === "loading" || !dni || !password}
                            className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {status === "loading" ? (
                                <>
                                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Ingresando...
                                </>
                            ) : (
                                <>
                                    <span className="material-symbols-outlined text-lg">login</span>
                                    Ingresar
                                </>
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="mt-6 pt-5 border-t border-gray-100 text-center">
                        <p className="text-xs text-gray-400">
                            ¿Primera vez? Contactate con administración para obtener tu acceso.
                        </p>
                    </div>
                </div>

                {/* Back link */}
                <div className="text-center mt-6">
                    <a
                        href="/"
                        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary transition-colors"
                    >
                        <span className="material-symbols-outlined text-base">arrow_back</span>
                        Volver al sitio
                    </a>
                </div>
            </div>
        </div>
    );
};
