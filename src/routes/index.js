const newRouter = require('./news');
const loginRouter = require('./user');
const meRouter = require('./me');
const courseRouter = require('./courses');
const siteRouter = require('./site');
function route(app){
    app.use('/user', loginRouter);
    app.use('/news', newRouter);
    app.use('/me', meRouter);
    app.use('/search', siteRouter);
    app.use('/courses', courseRouter);
    app.use('/', siteRouter);
}

module.exports = route;