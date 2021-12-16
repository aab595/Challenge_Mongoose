const mongoose = require('mongoose')
const Course = require('../models/participant')


/**
 * 
 * PARTICIPANT METHODS
 */

// create participants method
const createParticipant = async (participant) => {
    try {
        const p = await Participant.create(participant);
        console.log(p);
        console.log('Participant created successfully');
    } catch (e) { console.error(e.message); }
};

// get all courses method
const getAllParticipants = async () => {
    try {
        let all = await Participant.find();
        return all;
    } catch (e) { console.error(e.message); }
}


module.exports = {
    createParticipant,
    getAllParticipants
}
