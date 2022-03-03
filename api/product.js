const express = require("express");
const router = express.Router();

/**
 * GET product list
 * 
 * @return product list | empty
 */

router.get("/", async (req, res) => {
        res.json({
            status: 200,
            message: "Get data has successfully",
        });
});

module.exports = router;