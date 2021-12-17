const mongoose = require('mongoose')
const express = require('express')


const dbService = require('./src/services/DBService')
const courseService = require('./src/services/CourseService')
const participantService = require('./src/services/ParticipantService')


app = express();
app.use(express.json())
app.use(express.urlencoded({extended : false}))


dbService.connecter();


/**
 * COURSE ROUTES
 */

app.get('/courses', courseService.getAllCourses);
app.get('/course/:id', courseService.getCourseById);
app.post('/courses', courseService.createCourse);
app.delete('/course/:id', courseService.deleteCourse);
app.patch('/course/:id', courseService.editCourse);


/**
 * PARTICIPANT ROUTES
 */

app.get('/participants', participantService.getAllParticipants);
app.get('/participant/:id', participantService.getParticipantById);
app.get('/participants/courses', participantService.participantByCourses);
app.post('/participants', participantService.createParticipant);
app.delete('/participant/:id', participantService.deleteParticipant);
app.patch('/participant/:id', participantService.editParticipant);

/**
 * RUN SERVER
 */

app.listen(3030, () =>  console.log('Server listening on port 3030'))