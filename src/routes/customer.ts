import { Router } from "express";
import { getCustomers, getCustomer, updateCustomer, deleteCustomer, postCustomer } from "../controllers/customer";
import { checkJwt } from "../middlewares/session";
const router = Router();

/**
 * http://localhost:3000/customer
 */
router.get("/", checkJwt, getCustomers);

router.get("/:id", checkJwt, getCustomer);

router.put("/:id", checkJwt, updateCustomer);

router.delete("/:id", checkJwt, deleteCustomer);

router.post("/",  postCustomer);


export { router };