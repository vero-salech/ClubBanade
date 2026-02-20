export const Hero = () => {
    return (
        <section className="relative bg-gray-900 text-white min-h-[600px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/60 z-10"></div>
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDByyOlG-3Wwbk8EASQede62QjxjTdqJtZwwF8TMRVtmjZUFq8H5ojAxTKXyYdmwg3N0JcsoJCUZrzoIsPn4eZi0t1XOxEYfgIJ5ckwgnpvmuu-P6ujDfPbxNpcndm63sAb7xw07ABiBh3EKjML9lf8eUCw0ylKTRTNaqVd2x3_Xta7IC_Ij8CETqZTcy9RxGC0Mx01kDge_m4l-b8Kuddwm5tef7VCpiyWtXOBit8x1LH4K845tIP4ymErKvy5arVjzN-of02i_URD")' }}
                ></div>
            </div>
            <div className="relative z-20 text-center max-w-4xl px-6 flex flex-col gap-6 items-center">
                <span className="inline-block py-1 px-3 border border-accent/50 text-accent text-xs font-bold uppercase tracking-[0.2em] rounded mb-2">Institucional</span>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
                    Tradición, familia y deporte
                </h2>
                <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
                    Un espacio de encuentro para nuestra comunidad. Mantenemos vivos los valores que nos definen desde hace generaciones.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
                    <button className="px-8 py-3 bg-transparent border border-white text-white hover:bg-white hover:text-black transition-all font-medium text-sm tracking-wide rounded uppercase cursor-pointer">
                        Conocer el Club
                    </button>
                    <button className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-transparent hover:bg-white/20 text-white transition-all font-medium text-sm tracking-wide rounded uppercase cursor-pointer">
                        Información para socios
                    </button>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-2 flex z-30">
                <div className="w-1/3 bg-black"></div>
                <div className="w-1/3 bg-primary"></div>
                <div className="w-1/3 bg-accent"></div>
            </div>
        </section>
    );
};
