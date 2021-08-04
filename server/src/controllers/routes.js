const express = require('express');
const userRoutes = require('./user-controller');
const roleRoutes = require('./role-controller');

let router = express.Router();

router.use("/users", userRoutes);
router.use("/roles", roleRoutes);

module.exports = router;