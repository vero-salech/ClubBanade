import { createContext, useContext, useState, ReactNode } from "react";

export interface MemberUser {
    dni: string;
    nombre: string;
    apellido: string;
    nroSocio: string;
    categoria: string;
}

interface MemberAuthContextType {
    user: MemberUser | null;
    isLoggedIn: boolean;
    login: (dni: string, password: string) => Promise<boolean>;
    logout: () => void;
}

const MemberAuthContext = createContext<MemberAuthContextType | null>(null);

// Mock user — when Fede connects the backend, this gets replaced with real auth
const MOCK_USER: MemberUser = {
    dni: "12345678",
    nombre: "Juan",
    apellido: "Pérez",
    nroSocio: "1234",
    categoria: "Activo",
};

export const MemberAuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<MemberUser | null>(() => {
        const saved = sessionStorage.getItem("member_session");
        return saved ? JSON.parse(saved) : null;
    });

    const login = async (_dni: string, _password: string): Promise<boolean> => {
        // Simulated login — always succeeds
        // Fede will replace this with real auth (Supabase, API, etc.)
        await new Promise((r) => setTimeout(r, 800)); // fake delay
        setUser(MOCK_USER);
        sessionStorage.setItem("member_session", JSON.stringify(MOCK_USER));
        return true;
    };

    const logout = () => {
        setUser(null);
        sessionStorage.removeItem("member_session");
    };

    return (
        <MemberAuthContext.Provider value={{ user, isLoggedIn: !!user, login, logout }}>
            {children}
        </MemberAuthContext.Provider>
    );
};

export const useMemberAuth = () => {
    const ctx = useContext(MemberAuthContext);
    if (!ctx) throw new Error("useMemberAuth must be used within MemberAuthProvider");
    return ctx;
};
