const express = require("express");
const router = express.Router();

router.get("/projecttwo", (req,res) => {
    res.render("projecttwo");
});

module.exports = router;
