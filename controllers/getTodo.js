const Todo =

exports.getTodo=(async(req,res)=>{

    

})


























const Todo = require("../models/Todo");

exports.getTodo = async (req,res) => {
    try{
            const altodo = await Todo.find({})


           return res.status(200).json({
            success:true,
            data:altodo,
            message:"TODOS fetched Successfully",
           })

    }

    catch(err){
        console.error(err)

        return res.status(500).json({
            success:true,
            message:'Internal server error',
            error:err.message,
        })
    }
}

exports.getTodobyId = async (req,res) =>{
try{
    const id = req.params.id;
    const todoid=await Todo.findById({_id:id});

    if(!todoid)
    {
        return res.status(404).json({
            success:false,
            message:`No data found with given id`,
        })
    }

    return res.status(200).json({
        success:true,
        data:todoid,
        message:`TODO ${id} is fetched Successfully`,
    })
}
catch(err){
        console.error(err);
        return res.status(500).json({
            success:false,
            message:"Internal server error",
            error:err.message,
        })
}
}