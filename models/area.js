const mongoose = require('mongoose');
const config = require('../config/database');

//area schema

const AreaSchema = mongoose.Schema({
    areaCode: {
        type: String,
        required: true,
        unique: true
    },
    areaName: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    },
    isDeleted: {
        type: Boolean
    }
});

const Area = module.exports = mongoose.model('Area', AreaSchema);

module.exports.getAllAreas = function (callback) {
    Area.find({ isDeleted: false }, callback);
}

module.exports.getAreaById = function (id, callback) {
    Area.findById(id, callback);
}

module.exports.getAreaByAreaCode = function (areaCode, callback) {
    const query = { areaCode: areaCode };
    Area.findOne(query, callback);
}

module.exports.addArea = function (newArea, callback) {
    newArea.save(callback);
}

module.exports.updateArea = function (updatedArea, callback) {
    //Area.findByIdAndUpdate(updatedArea.id, updatedArea, { new: true }, callback);
    let query = { _id: updatedArea.id }
    Area.update(query, updateArea, callback);
}
