const mongoose = require('mongoose')


// creating schema
const courseSchema = new mongoose.Schema(
    {
        label: {
            type: String,
            required: true,
            minLength: 2,
            maxLength: 20
        },
        description: {
            type: String,
            default: "Description du cours"
        },
        volume: {
            type: Number,
            min: 1
        },
        startDate: {
            type: Date,
            default: Date.now()
        }
    }
);


module.exports = mongoose.model('Course', courseSchema);
