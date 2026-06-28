import { Outlet, NavLink, Navigate, useNavigate } from "react-router-dom";
import { useMemberAuth } from "../../contexts/MemberAuthContext";

export const MemberLayout = () => {
    const { user, isLoggedIn, logout } = useMemberAuth();
    const navigate = useNavigate();

    if (!isLoggedIn) return <Navigate to="/mi-banade/login" replace />;

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const navItems = [
        { to: "/mi-banade/inicio", icon: "dashboard", label: "Inicio" },
        { to: "/mi-banade/solicitudes", icon: "description", label: "Solicitudes" },
        { to: "/mi-banade/quinchos", icon: "outdoor_grill", label: "Quinchos" },
    ];

    return (
        <div className="min-h-[80vh] bg-member-bg">
            {/* ─── Welcome Bar ─── */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-accent/20 rounded-full flex items-center justify-center">
                            <span className="material-symbols-outlined text-accent text-lg">person</span>
                        </div>
                        <div>
                            <p className="text-sm font-semibold">
                                Hola, {user?.nombre} {user?.apellido}
                            </p>
                            <p className="text-xs text-gray-400">
                                Socio #{user?.nroSocio} · {user?.categoria}
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="text-xs text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
                    >
                        <span className="material-symbols-outlined text-sm">logout</span>
                        Cerrar sesión
                    </button>
                </div>
            </div>

            {/* ─── Navigation Tabs ─── */}
            <div className="border-b border-amber-200/50 bg-member-card/80 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6">
                    <nav className="flex gap-1 overflow-x-auto scrollbar-none">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={({ isActive }) =>
                                    `flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                                        isActive
                                            ? "border-primary text-primary"
                                            : "border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300"
                                    }`
                                }
                            >
                                <span className="material-symbols-outlined text-lg">{item.icon}</span>
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </div>

            {/* ─── Content ─── */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                <Outlet />
            </div>
        </div>
    );
};
