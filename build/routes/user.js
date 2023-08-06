"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_1 = require("../controllers/user");
const session_1 = require("../middlewares/session");
const router = (0, express_1.Router)();
exports.router = router;
/**
 * http://localhost:3000/user
 */
router.get("/", session_1.checkJwt, user_1.getUsers);
router.get("/:id", session_1.checkJwt, user_1.getUser);
router.put("/:id", session_1.checkJwt, user_1.updateUser);
router.delete("/:id", session_1.checkJwt, user_1.deleteUser);
router.post("/", session_1.checkJwt, user_1.postUser);
