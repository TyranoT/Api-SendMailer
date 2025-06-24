import { FastifyInstance } from 'fastify';
import { transporter } from '../utils/mail';
import { readFileSync } from 'fs';

export async function mailRoutes(server: FastifyInstance) {
    server.post('/send-email', async (request, reply) => {

        const meuHtml = readFileSync('/src/routes/templates/mail.html', 'utf-8');

        try {
            const info = await transporter.sendMail({
                from: process.env.MAIL_USER,
                to: "italomleitez@gmail.com",
                subject: "Aviso",
                html: meuHtml
            });

            return reply.send({ success: true, info });
        } catch (error) {
            console.error(error);
            return reply.status(500).send({ success: false, error });
        }
    });
}
