import { Router, Request, Response } from "express";
import { Avisos } from "../controllers";

const router = Router();

router.get('/', (req: Request, res: Response) => { res.send('Hello World'); });
router.post("/aviso", Avisos.enviar);

export { router };