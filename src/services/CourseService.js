const mongoose = require('mongoose')
const Course = require('../models/course')


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
    } catch (e) { console.error(e.message); }
}

// get one course by id method
const getAllCourseById = async (id) => {
    try {
        let once = await Course.findById(id);
        return once;
    } catch (e) { console.error(e.message); }
}

// delete one course by id method
const deleteCourseById = async (id) => {
    try {
        await Course.findByIdAndDelete(id);
        console.log('Course deleted successfully');
    } catch (e) { console.error(e.message); }
}

// update one course by id method
const editCourseById = async (id) => {
    try {
        let course = await Course.findByIdAndUpdate(id)
        console.log('Course deleted successfully');
    } catch (e) { console.error(e.message); }
}


module.exports = {
    createCourse,
    getAllCourses,
    getAllCourseById,
    deleteCourseById,
    editCourseById
}
