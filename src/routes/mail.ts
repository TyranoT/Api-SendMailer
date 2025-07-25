import { FastifyInstance, FastifyRequest } from 'fastify';
import { transporter } from '../utils/mail';
import { readFileSync } from 'fs';
import path from 'path';

export async function mailRoutes(server: FastifyInstance) {
    server.post('/send-email', async (request, reply) => {

        const htmlPath = path.join(__dirname, 'templates', 'mail.html');
        const meuHtml = readFileSync(htmlPath, 'utf-8');
        const { email } = request.body as { email: string };

        try {
            const info = await transporter.sendMail({
                from: process.env.MAIL_USER,
                to: email,
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
