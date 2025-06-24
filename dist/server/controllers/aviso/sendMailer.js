"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.enviar = void 0;
const fs_1 = require("fs");
const mailer_1 = require("../../../utils/mailer");
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const enviar = async (req, res) => {
    const filePath = path_1.default.join(__dirname, "../../../templates", "aviso.html");
    const html = (0, fs_1.readFileSync)(filePath, 'utf8');
    await mailer_1.transporter.sendMail({
        from: `"Olga Zacchi" <${process.env.MAIL_USER}>`,
        to: 'italomleitez@gmail.com',
        subject: 'Aviso Robotica',
        html
    });
    res.status(200).json({ msg: "Enviado Email!" });
};
exports.enviar = enviar;
