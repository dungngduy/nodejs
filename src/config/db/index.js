const mongoose = require('mongoose');
async function connect(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/f8_nodejs')
        .then(() => console.log('Connected!'));
    } catch (error) {
        console.log('Error connected!');
    }
}
module.exports = {connect};