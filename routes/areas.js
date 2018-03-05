const express = require('express');
const router = express.Router();
const Area = require('../models/area');


//get all
router.get('/', (req, res, next) => {
    Area.getAllAreas()



    
});

// Get Single Area
router.get('/:id', function (req, res) {
    Area.findById(req.params.id, function (err, area) {
        if (err) {
            res.json({ success: false, msg: 'Failed to find area' });
        }
        else {
            res.json({ success: true, area: area });
        }
    });
});

//add
router.post('/add', (req, res, next) => {
    let newArea = new Area({
        areaCode: req.body.areaCode,
        areaName: req.body.areaName,
        isActive: req.body.isActive,
        isDeleted: false
    });

    Area.addArea(newArea, (err, newArea) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to add area' });
        }
        else {
            res.json({ success: true, msg: 'area added' });
        }
    });
});

//update | delete
router.post('/update', (req, res, next) => {
    let updatedArea = new Area({
        areaCode: req.body.areaCode,
        areaName: req.body.areaName,
        isActive: req.body.isActive,
        isDeleted: req.body.isDeleted,
    });

    Area.updatedArea(updatedArea, (err, updatedArea) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to update Area' });
        }
        else {
            res.json({ success: true, msg: 'Area updated' });
        }
    });
});


module.exports = router;