const { response } = require('express');
const express = require('express');

const Details = require('../Models/details');

/*Add New Details i.e. Name & Address*/
exports.postDetails = async (req, resp) => {
    let details1 = new Details(req.body);
    let result = await details1.save();
    resp.send(result);
}

/*Getting all details of Name and Address */
exports.getDetails = async (req, resp) => {
    let shwdetails = await Details.find();
    if (shwdetails.length > 0) {
        resp.send(shwdetails)
    } else {
        resp.send({ result: "No Details found " })
    }
}


/*Here we are Deleting  */
exports.deleteDetails = async (req, resp) => {
    let result = await Details.deleteOne({ _id: req.params.id })
    resp.send(result);
}


/*Here we are rename details */
exports.putDetails = async (req, resp) => {
    let result = await Details.updateOne({
        _id: req.params.id
    },
        {
            $set: req.body
        })
    resp.send(result);
}

exports.searchDetails = async (req, resp) => {
    let result = await Details.find({
        "$or": [
            { name: { $regex: req.params.key } }
        ]
    });
    resp.send(result)
}

exports.updateDetails = async (req, resp) => {
    let result = await Details.findOne({ _id: req.params.id })
    if (result) {
        resp.send(result);
    } else {
        resp.send({ result: "No result Found. " })
    }
}







