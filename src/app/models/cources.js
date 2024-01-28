const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const courses = new Schema({
    _id: {type: Number},
    name: {type: String, require: true},
    description: {type: String, maxLength: 600},
    image: {type: String, maxLength: 255},
    videoId: {type: String, require: true},
    slug: {type: String, slug: 'name', unique:true},
}, {
    _id: false,
    timestamps: true,
});

courses.query.sortable = function(req){
    if(req.query.hasOwnProperty('_sort')) {
        const isValidType = ['asc', 'desc'].includes(req.query.type);
        return this.sort({
            [req.query.column]: isValidType ? req.query.type : 'desc',
        });
    }else{
        return this;
    }
}

mongoose.plugin(slug);
courses.plugin(AutoIncrement);
courses.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt : true,
});

module.exports = mongoose.model('Course', courses);