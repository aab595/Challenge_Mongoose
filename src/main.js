const mongoose = require('mongoose')
const Course = require('./models/course')
const Participant = require('./models/participant')
const util = require('util')


const connecter = async () => {
    try {
        mongoose.connect('mongodb://127.0.0.1/bootcamp');
        console.log('Connected to the database')
    } catch (e) {
        console.error(e);
    }
}


/**
 * 
 * COURSE METHODS
 */

// create courses method
const createCourse = async (course) => {
    try {
        const c = await Course.create(course);
        console.log('Course created successfully');
        console.log(c);
    } catch (e) {
        console.error(e.message);
    }
};

// get all courses method
const getAllCourses = async () => {
    try {
        let all = await Course.find();
        return all;
    } catch (e) {
        console.error(e.message);
    }
}

// get one course by id method
const getAllCourseById = async (id) => {
    try {
        let once = await Course.findById(id);
        console.log(once);
    } catch (e) {
        console.error(e.message);
    }
}

// get one course by id method
const deleteCourseById = async (id) => {
    try {
        await Course.findByIdAndDelete(id);
        console.log('Course deleted successfully');
    } catch (e) {
        console.error(e.message);
    }
}


/**
 * 
 * PARTICIPANT METHODS
 */

// create participants method
const createParticipant = async (participant) => {
    try {
        const p = await Participant.create(participant);
        console.log('Participant created successfully');
        console.log(p);
    } catch (e) {
        console.error(e.message);
    }
};


// create instances of Course
// const c1 = {
//     label: "Bootstrap",
//     description: "Le framework Bootstrap",
//     volume: 30,
// };


// create instances of Participant
// const p1 = {
//     firstname: "Mamadou",
//     lastname: "DIALLO",
//     email: "mmd@gmail.com",
//     address: {
//         city: "DAKAR",
//         street: "PIKINE"
//     },
//     courses: [
//         "61b9f46edeea1bb406d67a3c",
//         "61b9f46edeea1bb406d67a3d"
//     ]
// };


// enable connection
// connecter();


// insert data in courses collection
// createCourse(c1);

// insert data in pqrticipants collection
// createParticipant(p1);

/**
 * FISRT CHALLENGE
 */

// get all participants
const participants = Participant.find();

// processing
const participantByCourses = () => participants.exec(async (err, queries) => {
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
    console.log(util.inspect(arrayOutput, false, null, true /* enable colors */))
});

// participantByCourses();

module.exports = {
    connecter: connecter,
    createCourse: createCourse,
    createParticipant: createParticipant,
    participantByCourses: participantByCourses,
    getAllCourses: getAllCourses
}

/**
 * TODO
 * 
 * For Participant modal
 * GET /participants
 * GET /participants/:id
 * POST /participants
 * DELETE /participants/:id
 * PATCH /participants/:id
 * 
 * For Course modal
 * GET /courses
 * GET /courses/:id
 * POST /courses
 * DELETE /courses/:id
 * PATCH /courses/:id
 * 
 * GET /participants/courses
 */
