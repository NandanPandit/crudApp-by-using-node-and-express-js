const express = require('express');
const router = express.Router();
//import controller
const crudController = require('../crud-controller/crudController');

router.get('/', crudController.getForm);
router.post('/crud-app',crudController.insertedData);
// edit data form return
router.post('/updateData', crudController.updateData)
// router.post('/editdata',crudController.)


router.post('/delete', crudController.deleteData)
module.exports = router;
