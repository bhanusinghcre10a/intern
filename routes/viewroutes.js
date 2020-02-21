const express = require("express");
const viewcontroler = require("./../controller/viewcontroler");
const router = express.Router();
const cont = require("./../controller/cont");

router.get("/add", viewcontroler.addstartup);
router.get("/home", viewcontroler.home);
router.get("/", viewcontroler.home);
router.get("/getlist", cont.getstartups);
router.post("/addstartup", cont.add);

module.exports = router;
