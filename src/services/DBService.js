const mongoose = require('mongoose')


const connecter = async () => {
    try {
        mongoose.connect('mongodb://localhost:27017/bootcamp');
        console.log('Connected to the database')
    } catch (e) { console.error(e); }
}


module.exports = { connecter };
