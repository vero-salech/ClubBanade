import emailjs from "@emailjs/browser";

// ━━━ EmailJS Configuration (same service as Contact page) ━━━
const EMAILJS_SERVICE_ID = "service_2nogh82";
const EMAILJS_TEMPLATE_ID = "template_d5ud8qo";
const EMAILJS_PUBLIC_KEY = "91fj0awUoRANSs8Ls";

const ADMIN_EMAIL = "administracion@clubbanade.com";

interface MemberEmailParams {
    socioNombre: string;
    socioNro: string;
    socioDni: string;
    asunto: string;
    mensaje: string;
}

/**
 * Sends a notification email to administración when a member submits
 * a request (solicitud) or quincho reservation.
 */
export const sendMemberNotification = async (params: MemberEmailParams): Promise<boolean> => {
    try {
        await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            {
                to_email: ADMIN_EMAIL,
                nombre: `${params.socioNombre} (Socio #${params.socioNro})`,
                email: `DNI: ${params.socioDni}`,
                telefono: "Enviado desde Mi Banade",
                asunto: params.asunto,
                mensaje: params.mensaje,
            },
            EMAILJS_PUBLIC_KEY
        );
        return true;
    } catch (err) {
        console.error("EmailJS member notification error:", err);
        return false;
    }
};
