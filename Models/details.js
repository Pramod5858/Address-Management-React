const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const detailsSchema = new Schema({
    name: {
        type : String,
        required:true
    },
    address: {
        type : String,
        required:true
    },
    city: {
        type : String,
        required:true
    },
    state: {
        type : String,
        required:true
    },
    userId: {
        type : String,
        required:true
    },
    pin: {
        type : String,
        required:true
    }
}
)
module.exports = mongoose.model('detailsSample', detailsSchema, 'details');