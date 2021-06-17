const express = require("express");
const router = express.Router();

router.get("/reportbug", (req,res) => {
    res.render("reportbug");
});

module.exports = router;



