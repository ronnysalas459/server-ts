import { Request, Response, Router } from "express";
import { registerCtrl, loginCtrl } from "../controllers/auth";
const router = Router();

/**
 * http://localhost:3000/auth/login or register [POST]
 */
router.post("/login", loginCtrl);
router.post("/register", registerCtrl);


export { router };