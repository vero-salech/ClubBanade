import buffetImg from "../assets/Buffet.png";
import mesasArbolesImg from "../assets/MesasArboles.png";
import salonEventosImg from "../assets/SalonEventos.jpg";

export const SPORTS_DATA = [
    {
        title: "Federativos",
        icon: "trophy",
        color: "primary",
        items: ["Hockey", "Vóley", "Básquet"],
        link: "/deportes/federativos"
    },
    {
        title: "Escuelitas",
        icon: "school",
        color: "accent",
        items: ["Hockey", "Vóley", "Básquet", "Fútbol"],
        link: "/deportes/escuelitas"
    },
    {
        title: "Instalaciones",
        icon: "pool",
        color: "primary",
        items: ["Pileta", "Gimnasio"]
    },
    {
        title: "Otras Actividades",
        icon: "sports_tennis",
        color: "accent",
        items: ["Tenis", "Squash", "Pádel", "Gimnasia Artística"],
        link: "/actividades/tercerizadas"
    }
];

export const SPACES_DATA = [
    {
        title: "Buffet & Restaurant",
        description: "Un ambiente cálido para disfrutar de almuerzos y cenas en familia, con un menú variado y atención personalizada.",
        image: buffetImg,
        link: "#"
    },
    {
        title: "Quinchos y Parrillas",
        description: "Espacios equipados para reuniones. Tasas diferenciadas para socios, ideales para celebraciones privadas.",
        image: mesasArbolesImg,
        link: "#",
        highlight: "socios"
    },
    {
        title: "Salón de Eventos",
        description: "Salón principal disponible para grandes eventos sociales y corporativos, con capacidad adaptable a sus necesidades.",
        image: salonEventosImg,
        link: "#"
    }
];

export const NAV_LINKS = [
    { label: "El Club", path: "/el-club" },
    { label: "Deportes", path: "/deportes" },
    { label: "Otras Actividades", path: "/actividades" },
    { label: "Espacios Sociales", path: "/espacios" },
    { label: "Contacto", path: "/contacto" }
];
