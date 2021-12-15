const mongoose = require('mongoose')


// creating address schema
const addressSchema = new mongoose.Schema(
    {
        city: {
            type: String,
            required: true
        },
        street: String,
        houseNumber: Number
    }
);


// creating participant schema
const participantSchema = mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            lowercase: true
        },
        birthDate: {
            type: Date,
        },
        address: {
            type: addressSchema
        },
        courses: {
            type: [mongoose.Types.ObjectId]
        }
    }
);


module.exports = mongoose.model('Participant', participantSchema);