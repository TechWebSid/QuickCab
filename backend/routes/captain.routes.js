const express = require('express')
const captainController = require('../controllers/captain.controller')
const {body} = require('express-validator')
const router = express.Router()
const userMiddleware = require('../middlewares/user.middleware')


router.post("/register", [
    body("email").isEmail().withMessage("Invalid email"),
    body("fullname.firstname").isLength({min:3,max:20}).withMessage("First name must be at least 3 characters long and less than 20 characters"),
    body("fullname.lastname").isLength({min:3,max:20}).withMessage("Last name must be at least 3 characters long and less than 20 characters"),
    body("password").isLength({min:6}).withMessage("Password must be at least 6 characters long"),
    body("vehicle.color").isLength({min:3,max:20}).withMessage("Color must be at least 3 characters long and less than 20 characters"),
    body("vehicle.plate").isLength({min:3,max:20}).withMessage("Plate must be at least 3 characters long and less than 20 characters"),
    body("vehicle.capacity").isInt({min:1}).withMessage("Capacity must be at least 1"),
    body("vehicle.vehicleType").isIn(["car","motorcycle","auto"]).withMessage("Invalid vehicle type"),
],captainController.registerCaptain)


router.post("/login", [
    body("email").isEmail().withMessage("Invalid email"),
    body("password").isLength({min:6}).withMessage("Password must be at least 6 characters long"),
],captainController.loginCaptain)

router.get("/profile",userMiddleware.authCaptain,captainController.getCaptainProfile)

router.post("/logout",userMiddleware.authCaptain,captainController.logoutCaptain)

module.exports = router;