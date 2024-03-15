const User = require('../models/user');
// const jwt = require('jsonwebtoken');

class UserController{
    registerForm(req, res, next){
        res.render('login/register');
    }

    register(req, res, next){
        const user = new User(req.body);
        user.save()
            .then(() => res.redirect('/'))
            .catch(next);
    }

    loginForm(req, res, next){
        res.render('login/signin');
    }

    login(req, res, next){
        const username = req.body.username;
        const password = req.body.password;

        User.findOne({
            username: username,
            password: password
        })
        .then((data) => {
            if(data){
                res.redirect('/');
            }else{
                res.redirect('/user/login');
            }
            // xử lý login bằng jwt
            // if(data){
            //     const token = jwt.sign({_id: data._id}, 'mk');
            //     return res.json({
            //         message: 'Success',
            //         token: token
            //     })
            // }else{
            //     res.json('Loi');
            // }
        })
        .catch(next)
    }
}

module.exports = new UserController;