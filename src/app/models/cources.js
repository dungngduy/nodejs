const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const courses = new Schema({
    name: {type: String, require: true},
    description: {type: String, maxLength: 600},
    image: {type: String, maxLength: 255},
    videoId: {type: String, require: true},
    slug: {type: String, slug: 'name', unique:true},
}, {
    timestamps: true,
});

mongoose.plugin(slug);
courses.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt : true,
});

module.exports = mongoose.model('Course', courses);