const Results =require("../models/resultsSchema")



//create a results
const createResults =async (req, res)=>{
    const newResults =new Results(
        {
            name:req.body.name,
            program:req.body.program,
            subjects:req.body.subjects,
            marks:req.body.marks,
            grade:req.body.grade,

        }
    )
  const savedResults = await newResults.save()
    res.status(200).json({
        msg:"Successful Saved",
        
        savedResults
    })
}

 //delete a results
 const deleteResults =async(req, res)=>{
    const results= await Results.findById(req.params.id)
    if(results){
        results.remove()
        res.status(200).json({success:true, msg:"results removed"})
    }else{
        res.json({msg:"results not found"})
    }
  }


module.exports = {createResults, deleteResults}