const { response } = require('express');
const express = require('express');

const Jwt = require('jsonwebtoken');
const jstKey = 'e-comm';
const Users = require('../Models/users');

exports.getRegisters = async (req, resp) => {
    let user = new Users(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password
    Jwt.sign({ result }, jstKey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
            resp.send({ result: "somthing went wrong, please try in some time" })
        }
        resp.send({result,  auth: token })
    })

    // const { name, email, password  } = req.body;

    // const userObj = new User({
    //     name,
    //     email,
    //     password      
    // });

    // userObj.save()
    //     .then(response => {
    //         res.status(200).json({
    //             message: "User Details123 Successfully saved",
    //             sighnup: response
    //         })
    //     })
    //     .catch(err => {
    //         res.status(500).json({ error: err })
    //     })
}


exports.getLogin = async (req, resp) => {
    console.log(req.body);
    if (req.body.password && req.body.email) {

        let user = await Users.findOne(req.body).select("-password");
        if (user) {
            Jwt.sign({ user }, jstKey, { expiresIn: "2h" }, (err, token) => {
                if (err) {
                    resp.send({ result: "somthing went wrong, please try in some time" })
                }
                resp.send({user,  auth: token })
            })

        } else {
            resp.send({ result: "No users found"});
        }
    }
    else {
        resp.send({result: "No users found"});
    }
}


// exports.userLogin = (req, res) => {
//     const { email, password } = req.body;

//     Users.find({
//         email,
//         password
//     })
//         .then(response => {
//             if (response.length > 0) {
//                 res.status(200).json({
//                     message: "User is validated",
//                     isAuthenticated: true,
//                     users: response

//                 })

//             }
//             else {
//                 res.status(200).json({
//                     message: "User not validated",

//                     isAuthenticated: false,
//                     users: response
//                 })
//             }
//         })
//         .catch(err => {
//             res.status(500).json({
//                 error: err
//             })
//         })
// }