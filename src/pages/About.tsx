import arbolesImg from "../assets/Arboles.png";
import floresImg from "../assets/FloresBanade.jpeg";
import fundacionImg from "../assets/Fundacion1.png";
import inauguracionImg from "../assets/Inauguracion1.png";
import bancoImg from "../assets/Banco.png";
import entradaImg from "../assets/Entrada1.jpeg";

/* ── Comisión Directiva ── */
const COMISION_DIRECTIVA = [
    { cargo: "Presidenta", nombre: "Sra. González Mónica", highlight: true },
    { cargo: "Vice Presidente", nombre: "Sr. Gomez Victorio" },
    { cargo: "Secretario General", nombre: "Sr. Sevegnani José A." },
    { cargo: "Pro-Secretario General", nombre: "Dr. Bologna Carlos D." },
    { cargo: "Tesorero", nombre: "Sr. Miranda Miguel H." },
    { cargo: "Pro Tesorero", nombre: "Sr. Albizzati Carlos" },
    { cargo: "Secretaria de Actas", nombre: "Sra. Salerno Silvana" },
    { cargo: "Vocal Titular", nombre: "Sr. Alexandro Manuel" },
    { cargo: "Vocal Titular", nombre: "Sra. Scalise Nélida" },
    { cargo: "Vocal Titular", nombre: "Sra. Canfora María" },
    { cargo: "Vocal Titular", nombre: "Sra. Galarza Graciela" },
    { cargo: "Vocal Suplente", nombre: "Sra. Saccomandi Lucía" },
    { cargo: "Vocal Suplente", nombre: "Sr. Saavedra Fernando" },
    { cargo: "Vocal Suplente", nombre: "Sra. De Alberico Liliana" },
];

const COMISION_FISCALIZADORA = [
    "Sr. Videla Hugo",
    "Sr. Duhalde Héctor",
    "Sr. Murno Hernán",
];

const TRIBUNAL_DISCIPLINA = [
    { cargo: "Presidente", nombre: "Sr. Gómez Alejandro" },
    { cargo: "Vocal", nombre: "Sr. Bologna Pedro" },
    { cargo: "Vocal", nombre: "Sra. Miranda Gabriela" },
    { cargo: "Vocal", nombre: "Sr. Sotelo Carlos" },
];

/* ── Valores ── */
const VALUES = [
    {
        icon: "groups",
        title: "Trabajo en equipo",
        description: "Camino por el cual logramos los objetivos reforzando el compañerismo, la colaboración, la empatía y el liderazgo horizontal.",
    },
    {
        icon: "handshake",
        title: "Respeto",
        description: "Ser honestos en nuestro actuar dentro y fuera de la cancha y de la institución. Compromiso con los principios del Juego Limpio y el valor por la verdad.",
    },
    {
        icon: "favorite",
        title: "Compromiso",
        description: "Actitud responsable que nos permite una vida de logros personales y grupales. Amor por lo que hacemos, sentimos y decimos.",
    },
    {
        icon: "diversity_3",
        title: "Inclusión",
        description: "Creemos que el deporte y la cultura permiten la plena convivencia y el desarrollo de la multiculturalidad, poniendo en valor la vida y acortando las diferencias.",
    },
    {
        icon: "star",
        title: "Excelencia y calidad",
        description: "Trabajo deportivo y cultural basado en criterios de calidad, disciplina y capacidad de esfuerzo. Búsqueda permanente de la excelencia en la gestión institucional.",
    },
    {
        icon: "volunteer_activism",
        title: "Humildad",
        description: "Razón fundamental que da sentido al resto de los valores: poner al equipo por sobre el ser individual, con respeto por el prójimo y compromiso con la inclusión.",
    },
];

/* ── Hitos históricos ── */
const TIMELINE = [
    {
        year: "1945",
        title: "Fundación del Club",
        image: inauguracionImg,
        imageCaption: "Fachada original con el cartel C.A.B.I.R.A.",
        description: "El 2 de septiembre — Día de la Industria Nacional — un grupo de empleados del Banco Industrial de la República Argentina funda el Club Atlético Banco Industrial (CABIRA). Su primera sede funcionó en el edificio de la casa matriz del confiscado Banco Germánico de la América del Sud, en la calle 25 de Mayo al 100, entre Cangallo (hoy Perón) y Bartolomé Mitre. De allí provienen los colores negro, amarillo y rojo del club. En sus inicios, el espacio contaba apenas con una mesa de billar, algunas mesas de cartas y un servicio de peluquería para caballeros atendido por el \"Tano\" Pascual, un entrañable personaje de origen italiano que trabajaba como ordenanza en el Banco.",
    },
    {
        year: "1966",
        title: "Inauguración de la sede en Martínez",
        image: fundacionImg,
        imageCaption: "Inauguración con la presencia del Presidente Illia, 1966",
        description: "El 23 de mayo se inaugura la sede ubicada en Hipólito Yrigoyen 1290, Martínez, sobre un predio de casi seis hectáreas obtenido en comodato — un terreno que el Banco había embargado a la empresa de estudios de filmación \"Emelco\". A la ceremonia asistió el Presidente de la República, Dr. Arturo Umberto Illia — en lo que sería su última aparición pública antes de su derrocamiento —, junto a su ministro de Economía Juan Carlos Pugliese, directivos del Banco, autoridades municipales, empleados y familiares. La gestión fue liderada por el presidente del Club, Raúl O. Torres, y el secretario general, Astolfo Pazos Cucullu.",
    },
    {
        year: "1971",
        title: "Nace BANADE",
        image: bancoImg,
        imageCaption: "Fachada del Banco Nacional de Desarrollo",
        description: "Las autoridades nacionales modifican la denominación del Banco, que pasa a llamarse Banco Nacional de Desarrollo (BANADE); el Club adopta consecuentemente su nombre actual. Al año siguiente, la Comisión Directiva toma la decisión de aceptar el ingreso de socios no vinculados a la institución bancaria. Hasta entonces, el Club era de uso exclusivo para empleados del Banco y sus familiares directos. No obstante, el ingreso continuaba siendo selectivo y con una elevada cuota de admisión.",
    },
    {
        year: "1994",
        title: "Liquidación del Banco y Ley 25.056",
        description: "El Banco Nacional de Desarrollo es liquidado durante la presidencia del Dr. Carlos S. Menem. Tras cuatro años de intensas negociaciones, se sanciona la Ley Nacional 25.056, que otorga al Club la tenencia del predio a título precario gratuito por 99 años, con el requisito de continuar como club bancario destinado a actividades deportivas, culturales y sociales.",
    },
    {
        year: "Hoy",
        title: "Un club en plena expansión",
        description: "El Club BANADE se ha consolidado como uno de los clubes más importantes de la Provincia de Buenos Aires. Desarrolla actividades deportivas federadas en hockey, vóley y básquet, además de escuelitas deportivas, actividades tercerizadas y espacios sociales. Su comunidad reúne a ex empleados y jubilados del BANADE, empleados del Banco Nación — quienes conforman los socios activos —, sus familiares adherentes y socios externos, integrados por empleados de otros bancos, socios no bancarios y socios deportivos.",
    },
];

export const About = () => {
    return (
        <div>
            {/* Hero */}
            <section className="relative bg-dark text-white py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={entradaImg} alt="Entrada del Club Banade" className="w-full h-full object-cover opacity-30" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40 z-10"></div>
                <div className="relative z-20 max-w-7xl mx-auto">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-12 h-[1px] bg-accent"></span>
                        <span className="text-accent font-bold uppercase text-xs tracking-widest">Institucional</span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">El Club</h2>
                    <p className="text-gray-300 font-light text-lg max-w-2xl">
                        Más de 80 años de historia, pasión deportiva y compromiso con la comunidad.
                    </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-2.5 flex z-30 opacity-70">
                    <div className="w-1/3 bg-black"></div>
                    <div className="w-1/3 bg-primary"></div>
                    <div className="w-1/3 bg-accent"></div>
                </div>
            </section>

            {/* ═══════ HISTORIA ═══════ */}
            <section className="bg-neutral-bg py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-14">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <span className="w-12 h-[1px] bg-primary/30"></span>
                            <span className="text-primary font-bold uppercase text-xs tracking-widest">De dónde venimos</span>
                            <span className="w-12 h-[1px] bg-primary/30"></span>
                        </div>
                        <h3 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">Nuestra Historia</h3>
                    </div>

                    {/* Timeline vertical */}
                    <div className="relative">
                        {/* Línea vertical */}
                        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-primary/20"></div>

                        <div className="space-y-12">
                            {TIMELINE.map((item) => (
                                <div key={item.year} className="relative pl-12 md:pl-20">
                                    {/* Punto */}
                                    <div className="absolute left-2.5 md:left-6.5 w-3 h-3 bg-primary rounded-full border-4 border-neutral-bg z-10 mt-1.5"></div>

                                    {/* Badge año */}
                                    <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                                        {item.year}
                                    </span>

                                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                                        {/* Imagen histórica */}
                                        {item.image && (
                                            <div className="relative">
                                                <img src={item.image} alt={item.imageCaption} className="w-full h-56 md:h-64 object-cover object-top" />
                                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                                    <span className="text-white text-xs font-medium italic">{item.imageCaption}</span>
                                                </div>
                                            </div>
                                        )}

                                        <div className="p-6">
                                            <h4 className="font-serif text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Imagen panorámica del predio */}
                    <div className="mt-14 rounded-2xl overflow-hidden shadow-lg">
                        <img src={arbolesImg} alt="Predio del Club Banade en Martínez" className="w-full h-48 md:h-72 object-cover" />
                    </div>
                </div>
            </section>

            {/* ═══════ MISIÓN Y VALORES ═══════ */}
            <section className="bg-white py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <span className="w-12 h-[1px] bg-primary/30"></span>
                            <span className="text-primary font-bold uppercase text-xs tracking-widest">Identidad</span>
                            <span className="w-12 h-[1px] bg-primary/30"></span>
                        </div>
                        <h3 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Misión y Valores</h3>
                        <p className="text-gray-600 font-light max-w-2xl mx-auto">
                            Resultado de un proceso participativo entre la comisión directiva, directores deportivos, profesores y socios comprometidos con la profesionalización del club.
                        </p>
                    </div>

                    {/* Misión + Visión */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <div className="bg-primary/5 border border-primary/15 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary text-xl">flag</span>
                                </div>
                                <h4 className="font-serif text-xl font-bold text-gray-900">Misión</h4>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Acompañar a los integrantes de la comunidad del club en la formación de excelencia en cada actividad deportiva y cultural, estimulando valores con compromiso social y contribuyendo así al desarrollo de la sociedad.
                            </p>
                        </div>
                        <div className="bg-accent/5 border border-accent/15 rounded-xl p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-accent/15 rounded-lg flex items-center justify-center">
                                    <span className="material-symbols-outlined text-accent text-xl" style={{ textShadow: '0 0 0 #000' }}>visibility</span>
                                </div>
                                <h4 className="font-serif text-xl font-bold text-gray-900">Visión</h4>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Ser un club referente en la zona por la excelencia deportiva y cultural, estimulando hábitos saludables y la inclusión social.
                            </p>
                        </div>
                    </div>

                    {/* Valores */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {VALUES.map((v) => (
                            <div key={v.title} className="bg-neutral-bg rounded-xl p-6 hover:shadow-md transition-all duration-300">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                    <span className="material-symbols-outlined text-primary text-2xl">{v.icon}</span>
                                </div>
                                <h5 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-2">{v.title}</h5>
                                <p className="text-xs text-gray-600 leading-relaxed">{v.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ COMISIÓN DIRECTIVA ═══════ */}
            <section className="bg-neutral-bg py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <span className="w-12 h-[1px] bg-primary/30"></span>
                            <span className="text-primary font-bold uppercase text-xs tracking-widest">Autoridades</span>
                            <span className="w-12 h-[1px] bg-primary/30"></span>
                        </div>
                        <h3 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comisión Directiva</h3>
                        <p className="text-gray-600 font-light max-w-xl mx-auto">
                            Quienes llevan adelante la gestión y el crecimiento diario del club.
                        </p>
                    </div>

                    {/* Tabla ejecutiva */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
                        <div className="bg-dark text-white px-6 py-4">
                            <h4 className="font-bold text-sm uppercase tracking-wider">Comisión Directiva</h4>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {COMISION_DIRECTIVA.map((m, i) => (
                                <div
                                    key={`cd-${i}`}
                                    className={`flex flex-col sm:flex-row sm:items-center sm:justify-between px-6 py-3.5 gap-0.5 sm:gap-4 ${m.highlight ? 'bg-accent/5 border-l-4 border-accent' : i % 2 === 0 ? 'bg-white' : 'bg-neutral-bg/50'}`}
                                >
                                    <span className={`text-xs uppercase tracking-wider order-1 sm:order-2 ${m.highlight ? 'text-primary font-bold' : 'text-gray-400 font-semibold'}`}>
                                        {m.cargo}
                                    </span>
                                    <span className={`text-sm order-2 sm:order-1 ${m.highlight ? 'font-bold text-gray-900' : 'text-gray-700'}`}>
                                        {m.nombre}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Fiscalizadora + Tribunal */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <div className="bg-dark/90 text-white px-6 py-3">
                                <h5 className="font-bold text-xs uppercase tracking-wider">Comisión Fiscalizadora</h5>
                            </div>
                            <div className="divide-y divide-gray-100">
                                {COMISION_FISCALIZADORA.map((nombre, i) => (
                                    <div key={`fisc-${i}`} className={`px-6 py-3 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-bg/50'}`}>
                                        <span className="text-sm text-gray-700">{nombre}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <div className="bg-dark/90 text-white px-6 py-3">
                                <h5 className="font-bold text-xs uppercase tracking-wider">Tribunal de Disciplina</h5>
                            </div>
                            <div className="divide-y divide-gray-100">
                                {TRIBUNAL_DISCIPLINA.map((m, i) => (
                                    <div key={`trib-${i}`} className={`flex items-center justify-between px-6 py-3 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-bg/50'}`}>
                                        <span className="text-sm text-gray-700">{m.nombre}</span>
                                        <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">{m.cargo}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Imagen cierre — Letras BANADE con flores */}
            <div className="w-full">
                <img src={floresImg} alt="Letras BANADE entre flores en el predio del club" className="w-full h-56 md:h-80 object-cover" />
            </div>

            {/* CTA */}
            <section className="bg-dark text-white py-16 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <span className="material-symbols-outlined text-accent text-4xl mb-4">diversity_1</span>
                    <h3 className="font-serif text-3xl font-bold mb-4">Sumate a nuestra comunidad</h3>
                    <p className="text-gray-400 font-light">
                        Más de 80 años formando deportistas, construyendo lazos y abriendo las puertas a toda la comunidad. Acercate a conocernos.
                    </p>
                </div>
            </section>
        </div>
    );
};
