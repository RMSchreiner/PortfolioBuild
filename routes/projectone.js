const express = require("express");
const router = express.Router();

router.get("/projectone", (req,res) => {
    res.render("projectone");
});

module.exports = router;
