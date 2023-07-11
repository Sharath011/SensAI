const router = require("express").Router()
const pool = require("../db")
const authorisation = require("../middleware/authorization")

router.get("/", authorisation, async(req, res) =>{
    try {
        
        const user = await pool.query("Select user_name from users where user_id = $1", [ req.user ]);

        res.json(user.rows[0]);

    } catch (err) {
        console.err(err.message)
        res.status(500).send("Server Error")
    }
})


module.exports = router;
