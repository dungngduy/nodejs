const Course = require('../models/cources');
class SiteController{
    // get -> /news
    // get console.log(req.query)
    // post console.log(req.body)
    index(req, res, next) {
        // try {
        //     const cources = await course.find({}).exec();
        //     res.json(cources);
        // }catch(err){
        //     res.status(404).json({ error: 'Error!' });
        // }
        Course.find({})
            .lean()
            .then(cources => {
                res.render('home', {cources})
            })
            .catch(next);
    }

    search(req, res){
        res.render('search');
    }
}
module.exports = new SiteController;