const Course = require('../models/cources');
class MeController{
    // [GET] /me/stored/courses
    storedCourses(req, res, next){
        Promise.all([Course.find({}).lean().sortable(req), Course.countDocumentsWithDeleted({deleted:true})])
            .then(([courses, deleteCourse]) => {
                res.render('me/stored-courses', {
                    deleteCourse,
                    courses, 
                });
            })
            .catch(next);
    }

    // [GET] /me/trash/courses
    trashCourses(req, res, next){
        Course.findWithDeleted({deleted:true})
            .lean()
            .then(courses => {
                res.render('me/trash-courses', {courses});
            })
            .catch(next);
    }
}
module.exports = new MeController;