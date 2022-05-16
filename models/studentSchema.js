const mongoose = require("mongoose")

const studentSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    class:{
        type:String,
        required:true
    },
    program:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true
    },
    house:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }


}  
)

const Student = mongoose.model("Student", studentSchema);
module.exports =Student; 