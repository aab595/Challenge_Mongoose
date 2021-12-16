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
    // console.log(util.inspect(arrayOutput, false, null, true /* enable colors */))
    return arrayOutput;
});

// participantByCourses();

module.exports = {
    connecter,
    createCourse,
    createParticipant,
    participantByCourses,
    getAllCourses,
    getAllParticipants
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
