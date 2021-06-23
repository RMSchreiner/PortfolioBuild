const express = require("express");
const router = express.Router();

router.get("/projectthree", (req,res) => {
    res.render("projectthree");
});

module.exports = router;
