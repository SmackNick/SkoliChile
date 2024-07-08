export default function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, school, city, message } = req.body;

        if (!name || !email || !school || !city || !message) {
            res.status(400).json({ error: 'Por favor completa todos los campos' });
            return;
        }

        const recipient = 'mygigs4884@gmail.com';
        const subject = 'Nueva solicitud de demo de Convive';
        const emailContent = `
            Nombre: ${name}
            Correo Electrónico: ${email}
            Nombre del Establecimiento: ${school}
            Ciudad: ${city}
            Mensaje: ${message}
        `;

        // Here you would typically send the email using a service like SendGrid, Mailgun, etc.
        console.log(emailContent);

        res.status(200).json({ message: 'Gracias! Tu mensaje ha sido enviado.' });
    } else {
        res.status(403).json({ error: 'Hay un problema con tu envío, inténtalo de nuevo.' });
    }
}
