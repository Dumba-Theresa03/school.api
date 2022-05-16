const Student = require("../models/studentSchema")

//create a student
const createStudent =async (req, res)=>{
    const newStudent =new Student(
        {
            name:req.body.name,
            class:req.body.class,
            program:req.body.program,
            age:req.body.age,
            house:req.body.house,
            image:req.body.image
        }
    )
  const savedStudent= await newStudent.save()
    res.status(200).json({
        msg:"Successful Saved",
        
        savedStudent
    })
}

//get all student
const getStudent =async(req, res)=>{
const student = await Student.find({});
    res.status(200).json(student)
}

   //delete a student
const deleteStudent =async(req, res)=>{
    const student= await Student.findById(req.params.id)
    if(student){
        student.remove()
        res.status(200).json({success:true, msg:"student removed"})
    }else{
        res.json({msg:"student not found"})
    }
  }


module.exports={createStudent, getStudent, deleteStudent}