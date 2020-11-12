const router = require("express").Router();

router.post("/register", (req, res) => {
  res.send("저장");
});

router.post('/login');

module.exports = router;
