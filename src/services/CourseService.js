const mongoose = require('mongoose')
const Course = require('../models/course')



/**
 * 
 * COURSE METHODS
 */

// create courses method
const createCourse = async (req, res) => {
    try {
        const inputData = req.body
        const c = await Course.create(inputData);
        console.log('Course created successfully');
        res.json(c);
    } catch (e) {
        console.error(e.message);
    }
}

// get all courses method
const getAllCourses = async (req, res) => {
    try {
        let all = await Course.find();
        res.json(all);
    } catch (e) { console.error(e.message); }
}

// get one course method
const getCourseById = async (req, res) => {
    try {
        let course = await Course.findById(req.params.id);
        res.json(course);
    } catch (e) { console.error(e.message); }
}

// delete one course method
const deleteCourse = async (req, res) => {
    try {
        let course = await Course.findByIdAndDelete(req.params.id);
        res.json(course)
        console.log('Course deleted successfully');
    } catch (e) { console.error(e.message); }
}

// update one course method
const editCourse = async (req, res) => {
    try {
        let inputData = req.body;
        await Course.findByIdAndUpdate(req.params.id, inputData);
        let newDoc = await Course.findById(req.params.id);
        res.json(newDoc);
        console.log('Course updated successfully');
    } catch (e) { console.error(e.message); }
}


module.exports = {
    createCourse,
    getAllCourses,
    getCourseById,
    deleteCourse,
    editCourse
}
