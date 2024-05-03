const express = require("express");
const authControllers = require("../controllers/auth-controller");
const validate = require("../middlewares/validate-middleware");
const signupSchema = require("../validators/auth-validator");
const authMiddleware = require("../middlewares/auth-middleware");
const router = express.Router();

router.get("/register",validate(signupSchema), authControllers.register);
router.get("/login", authControllers.login);
router.get('/user',authMiddleware, authControllers.user)

module.exports = router;
