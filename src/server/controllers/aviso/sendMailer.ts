import { readFileSync } from "fs";
import { transporter } from "../../../utils/mailer";
import path from "path";
import { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

export const enviar = async (req: Request, res: Response) => {
    const filePath = path.join(__dirname, "../../../templates", "aviso.html");
    const html = readFileSync(filePath, 'utf8');

    await transporter.sendMail({
        from: `"Olga Zacchi" <${process.env.MAIL_USER}>`,
        to: 'italomleitez@gmail.com',
        subject: 'Aviso Robotica',
        html
    });

    res.status(200).json({ msg: "Enviado Email!"})
}