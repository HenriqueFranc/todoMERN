const mongoose = require('mongoose')

const todoItem = new mongoose.Schema({
        task: { type : String, required : true},
        hasDone: { type: Boolean, default: false, required: true}

})

const modelItem = new mongoose.model('todoitem', todoItem)

module.exports = modelItem