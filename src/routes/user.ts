import { Router } from "express";
import { getUsers, getUser, updateUser, deleteUser, postUser } from "../controllers/user";
import { checkJwt } from "../middlewares/session";
const router = Router();

/**
 * http://localhost:3000/user
 */
router.get("/", checkJwt,getUsers);

router.get("/:id", checkJwt, getUser);

router.put("/:id", checkJwt, updateUser);

router.delete("/:id", checkJwt, deleteUser);

router.post("/", checkJwt, postUser);


export { router };