const express = require("express");
const router = express.Router();

router.get("/projectfour", (req,res) => {
    res.render("projectfour");
});

module.exports = router;
