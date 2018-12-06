const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.userRegister = (req, res, next) => {
    User
        .find({
            email: req.body.email
        })
        .exec()
        .then(user => {
            if (user.length > 0) {
                return res.status(400).json({
                    message: 'Email already exists!'
                });
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        const user = new User({
                            email: req.body.email,
                            name: req.body.name,
                            password: hash
                        });
                        user
                            .save()
                            .then(result => {
                                res.status(201).json({
                                    message: 'User Created'
                                });
                            })
                            .catch(err => {
                                res.status(500).json({
                                    error: err
                                });
                            });
                    }
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}

exports.userLogin = (req, res, next) => {
    User
        .find({
            email: req.body.email
        })
        .exec()
        .then(user => {
            if (user.length === 0) {
                return res.status(401).json({
                    message: 'Authorization failed'
                });
            } else {
                bcrypt.compare(req.body.password, user[0].password, function (err, result) {
                    if (err) {
                        return res.status(401).json({
                            error:err
                        });
                    } else if(result === false) {
                        return res.status(401).json({
                            message: 'Authorization failed'
                        });
                    } else if(result===true) {
                        const token = jwt.sign({
                                email: user[0].email,
                                name: user[0].name
                            },
                            process.env.JWT_KEY,
                            {
                                expiresIn: '2h'
                            });
                            res.status(200).json({
                                message:'Authorization Success',
                                token
                            });
                    } 
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}