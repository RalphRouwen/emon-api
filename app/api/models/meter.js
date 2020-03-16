const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const meterSchema = new Schema({
    powerConsumptionLow: {
        type: Number,
        trim: true,
        required: true
    },
    powerProductionLow: {
        type: Number,
        trim: true,
        required: true
    },
    powerConsumptionNormal: {
        type: Number,
        trim: true,
        required: true
    },
    powerProductionNormal: {
        type: Number,
        trim: true,
        required: true
    },
    powerUsage: {
        type: Number,
        trim: true,
        required: true
    },
    datetime: {
        type: Date,
        trim: true,
        required: true
    }
});

module.exports = mongoose.model('Meter', meterSchema, 'emon');

