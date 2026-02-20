export const Contact = () => {
    return (
        <main className="pt-20">
            <section className="bg-white py-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="font-serif text-4xl font-bold text-gray-900 mb-8 text-center">Contacto</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="font-serif text-xl font-bold mb-6">Información</h3>
                            <div className="space-y-4">
                                <p className="flex items-center gap-3 text-gray-600">
                                    <span className="material-symbols-outlined text-primary">location_on</span>
                                    Hipólito Yrigoyen 1234, Martínez
                                </p>
                                <p className="flex items-center gap-3 text-gray-600">
                                    <span className="material-symbols-outlined text-primary">phone</span>
                                    +54 11 4791-XXXX
                                </p>
                                <p className="flex items-center gap-3 text-gray-600">
                                    <span className="material-symbols-outlined text-primary">mail</span>
                                    info@clubbanade.com.ar
                                </p>
                            </div>
                        </div>

                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                                <input type="text" className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="email" className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                                <textarea rows={4} className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-black text-white font-bold py-3 rounded hover:bg-gray-800 transition-colors">
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};
