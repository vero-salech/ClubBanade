import { Helmet } from "react-helmet-async";

interface SEOProps {
    title: string;
    description: string;
    path?: string;
}

const SITE_NAME = "Club Banade";
const BASE_URL = "https://clubbanade.com";

/**
 * Componente SEO reutilizable. Inyecta <title>, meta description y Open Graph tags.
 * Usa react-helmet-async para manejar el <head> de forma declarativa por ruta.
 */
export const SEO = ({ title, description, path = "" }: SEOProps) => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const url = `${BASE_URL}${path}`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:image" content={`${BASE_URL}/logo.png`} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />

            {/* Canonical */}
            <link rel="canonical" href={url} />
        </Helmet>
    );
};
