import { Router, Request, Response } from "express";
import { Avisos } from "../controllers";

const router = Router();

router.get('/api', (req: Request, res: Response) => { res.send('Hello World'); });
router.post("/api/aviso", Avisos.enviar);

export { router };