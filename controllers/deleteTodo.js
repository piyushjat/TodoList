
const Todo = require('../models/Todo');


exports.deleteTodo = async(req,res) => {
    try{
        const {id}=req.params; // get id from route url

        const todo = await Todo.findByIdAndDelete(id);
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"TODO not found with given id"
            })
        }
        return res.status(200).json({
            success:true,
            data:todo,
            message:`Deleted Todo ${id} Successfully`
        })
    }

    catch(err){
        console.error(err);
        return res.status(500).json({
            success : false ,  
            message: 'internal server error',
            error:err.message
        })

    }
}