const mongoose = require('mongoose');
const config = require('config');


mongoose.connect(config.get('mongoUrl'), { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log('Failed to Establish Connection with MongoDB with Error: ' + err)
        process.exit()
    }
    else {
        console.log('Successfully Established Connection with MongoDB', config.get('mongoUrl') )
    }
});