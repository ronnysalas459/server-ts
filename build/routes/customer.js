"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const customer_1 = require("../controllers/customer");
const session_1 = require("../middlewares/session");
const router = (0, express_1.Router)();
exports.router = router;
/**
 * http://localhost:3000/customer
 */
router.get("/", session_1.checkJwt, customer_1.getCustomers);
router.get("/:id", session_1.checkJwt, customer_1.getCustomer);
router.put("/:id", session_1.checkJwt, customer_1.updateCustomer);
router.delete("/:id", session_1.checkJwt, customer_1.deleteCustomer);
router.post("/", customer_1.postCustomer);
