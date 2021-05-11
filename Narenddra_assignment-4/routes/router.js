const express = require('../express');
const userController = require('../controller/Usercontroller');
const router = express.Router();


router.get('/',userController.addduserPage);

router.post('/users',userController.userList);


module.exports = router;