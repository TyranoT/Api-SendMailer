import { FastifyInstance } from 'fastify';
import nodemailer from 'nodemailer';

export async function mailRoutes(server: FastifyInstance) {
  server.post('/send-email', async (request, reply) => {
    const { to, subject, html } = request.body as {
      to: string;
      subject: string;
      html: string;
    };

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      },
      connectionTimeout: 10000
    });

    try {
      const info = await transporter.sendMail({
        from: process.env.EMAIL,
        to,
        subject,
        html
      });

      return reply.send({ success: true, info });
    } catch (error) {
      console.error(error);
      return reply.status(500).send({ success: false, error });
    }
  });
}
