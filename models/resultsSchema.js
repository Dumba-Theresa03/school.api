const mongoose = require("mongoose")

const resultsSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    program:{
        type:String,
        required:true
    },
    marks:{
        type:Number,
        required:true
    },
    subjects:{
        type:String,
        required:true
    },
    grade:{
        type:String,
        required:true
    }


}  
)

const Results = mongoose.model("results", resultsSchema);
module.exports = Results;  