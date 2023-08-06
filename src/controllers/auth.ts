import { Request, Response } from "express"
import { registerNewUser, loginUser } from "../services/auth";



const registerCtrl = async ({ body }: Request, res: Response) => {
    try {
        const responseUser = await registerNewUser(body)
        if (responseUser === "Already exists") {
            return res.status(400).send({ message: "User already exists" });
        }
        res.send(responseUser)
    } catch (error) {
        res.status(400).send(error)
    }
}

const loginCtrl = async ({ body }: Request, res: Response) => {
    const { email, password } = body;
    try {
        const responseUser = await loginUser({ email, password })
        if (responseUser === "User no exists" || responseUser === "Password incorrect") {
            return res.status(400).send({ "message": responseUser })
        }
        res.send(responseUser)
    } catch (error) {
        res.status(400).send(error)
    }
}

export { registerCtrl, loginCtrl }