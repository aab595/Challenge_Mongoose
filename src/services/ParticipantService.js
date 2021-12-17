const mongoose = require('mongoose')
const Course = require('../models/participant')



/**
 * 
 * PARTICIPANT METHODS
 */

// create courses method
const createParticipant = async (req, res) => {
    try {
        const inputData = req.body
        const p = await Participant.create(inputData);
        console.log('Participant created successfully');
        res.json(p);
    } catch (e) {
        console.error(e.message);
    }
}

// get all participants method
const getAllParticipants = async (req, res) => {
    try {
        let all = await Participant.find();
        res.json(all);
    } catch (e) { console.error(e.message); }
}

// get one participant by id method
const getParticipantById = async (req, res) => {
    try {
        let participant = await Participant.findById(req.params.id);
        res.json(participant);
    } catch (e) { console.error(e.message); }
}

// delete one participant method
const deleteParticipant = async (req, res) => {
    try {
        let participant = await Participant.findByIdAndDelete(req.params.id);
        res.json(participant)
        console.log('Participant deleted successfully');
    } catch (e) { console.error(e.message); }
}

// update one participant method
const editParticipant = async (req, res) => {
    try {
        let inputData = req.body;
        await Participant.findByIdAndUpdate(req.params.id, inputData);
        let newDoc = await Participant.findById(req.params.id);
        res.json(newDoc);
        console.log('Participant updated successfully');
    } catch (e) { console.error(e.message); }
}


module.exports = {
    createParticipant,
    getAllParticipants,
    getParticipantById,
    deleteParticipant,
    editParticipant
}
