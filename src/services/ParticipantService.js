const mongoose = require('mongoose')
const Participant = require('../models/participant')
const Course = require('../models/course')


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
    } catch (e) { console.error(e.message); }
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

// get participants by courses method
const participantByCourses = (req, res) => Participant.find().exec(async (err, queries) => {
    if (err) { throw err; }

    const courses = await Course.find();
    const arrayOutput = [];
    queries.map((query) => {
        let name = query.firstname + ' ' + query.lastname;
        let course = query.courses;
        let labelText = [];
        let countVolume = 0;
        course.forEach(id => {
            courses.map((course) => {
                if (course._id.equals(id)) {
                    countVolume += course.volume;
                    let courseContent = {label: course.label, volume: course.volume};
                    labelText.push(courseContent);
                }
            })
        });
        const output = {name: name, totalHours: countVolume, courses: labelText};
        arrayOutput.push(output);
    });
    // console.log(util.inspect(arrayOutput, false, null, true /* enable colors */))
    res.json(arrayOutput);
});


module.exports = {
    createParticipant,
    getAllParticipants,
    getParticipantById,
    deleteParticipant,
    editParticipant,
    participantByCourses
}
