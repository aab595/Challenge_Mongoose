const _exec = async () => {
    const mongoose = require('mongoose')
    
    const main = require('./src/main')
    
    main.connecter();
    const result = await main.getAllCourses();
    console.log(result);
};

_exec();
