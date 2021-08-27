const express = require("express");
const sql = require("../config/mysqlConfig");

const router = new express.Router();

router.post("/getF", auth, async (req, res) => {
  let variable = req.body.variable;
  let query = "";
  try {
    let conn = await sql.getDBConnection();
    let [data, fields] = await conn.execute(query, [adminId]);
    res.send(data);
  } catch (error) {
    res.status(400).send("error fetching Admin");
  }
});


module.exports = router;