const Todo = require ("../models/Todo");

exports.updateTodo = async (req,res) =>{
    try{
        const {id} = req.params;
        const {title,description} = req.body;

        const utodo =await Todo.findByIdAndUpdate({_id:id},{ title, description, updatedAt: Date.now()});

        if(!utodo){
            return res.status(404).json({
                success:false,
                data:utodo,
                message:"No data found"
            })
        }

        return res.status(400).json({
            success:true,
            data:utodo,
            message:"Updated Successfully"
        })
    }

    catch(err){
        console.error(err);

        return res.status(500).json({
            success:false,
            message:"Internal Server Error",
            error:err.message,
        })
    }
}