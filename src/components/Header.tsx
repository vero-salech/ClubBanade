export const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm h-20">
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                <div className="flex items-center gap-3">
                    {/* Aquí se usará el logotipo de CBND suministrado */}
                    <div className="h-12 w-12 flex items-center justify-center shrink-0">
                        <img
                            src="/logo.png"
                            alt="Club Banade Logo"
                            className="h-full w-full object-contain"
                            onError={(e) => {
                                // Fallback a texto en caso de que la imagen no esté disponible en public/
                                e.currentTarget.style.display = 'none';
                                if (e.currentTarget.nextElementSibling) {
                                    (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                                }
                            }}
                        />
                        <div className="hidden h-10 w-10 bg-black rounded-full items-center justify-center border-2 border-primary shrink-0">
                            <span className="text-accent text-sm font-bold font-serif">CB</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-black text-xl font-bold font-serif leading-none tracking-tight">CLUB BANADE</h1>
                        <span className="text-[10px] uppercase tracking-widest text-gray-500 mt-0.5">Fundado en 1945</span>
                    </div>
                </div>

                <nav className="hidden lg:flex gap-8 items-center h-full">
                    <a className="text-sm font-medium text-gray-600 hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary py-1" href="#club">El Club</a>
                    <a className="text-sm font-medium text-gray-600 hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary py-1" href="#deportes">Deportes</a>
                    <a className="text-sm font-medium text-gray-600 hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary py-1" href="#actividades">Actividades</a>
                    <a className="text-sm font-medium text-gray-600 hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary py-1" href="#espacios">Espacios Sociales</a>
                    <a className="text-sm font-medium text-gray-600 hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary py-1" href="#contacto">Contacto</a>
                </nav>

                <button className="lg:hidden p-2 text-gray-800 hover:bg-gray-100 rounded">
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>
        </header>
    );
};
