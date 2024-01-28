class NewController{
    // get -> /news
    index(req, res){
        res.render('news');
    }

    // Ví dụ về chi tiết
    // show(req, res){
    //     res.send('New Detail');
    // }
}
module.exports = new NewController;