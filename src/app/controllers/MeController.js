const Course = require('../models/cources');
class MeController{
    // [GET] /me/stored/courses
    storedCourses(req, res, next){
        let courseQuery = Course.find({});

        if(req.query.hasOwnProperty('_sort')) {
            courseQuery = courseQuery.sort({
                [req.query.column]: req.query.type
            });
        }

        Promise.all([courseQuery.lean(), Course.countDocumentsWithDeleted({deleted:true})])
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