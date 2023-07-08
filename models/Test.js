const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const TestSchema = Schema({

    estId: {
        type: String,
        required: true,
        unique: true
    },

    name: {
        type: String,
        required: true
    },

    marks: {
        type: Number,
        required: true
    },

    duration: {
        hrs: {
            type: String,
            required: true
    },

    scores: {
        type: Array,
        default: []
    }
}}
)

module.exports = mongoose.model('Test',TestSchema);