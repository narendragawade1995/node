const path = require("path");
const express = require('express');
const rootDir = require("../util/path");
const router = express.Router();

router.get("/", (request, response) => {
    response.sendFile(path.join(rootDir,"views","login.html"));
});
 

router.post("/user-list", (request, response) => {
    response.sendFile(path.join(rootDir,"views","user.html"));
});

module.exports = router;