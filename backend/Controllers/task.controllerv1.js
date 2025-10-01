import Task from "../Models/task.model.js";
import User from "../Models/user.model.js";


export const createTask = async (req, res) => {

    try {

        const { title } = req.body;

        const newTask = new Task({ title });

        await newTask.save();

        res.status(200).json({
            success: true,
            message: "Task created successfully",
        });


    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }

};



export const getAllTask = async (req, res) => {


    try {

        const getAlltasks = await Task.find();

        return res.status(200).json({
            success: true,
            tasks: getAlltasks
        })

    } catch (err) {

        return res.status(500).json({ message: err.message });
    }
}




export const getTask = async (req, res) => {


    try {


        const { task_id } = req.body;


        const task = await Task.findOne({ _id: task_id });

        if (!task) {
            return res.status(404).json({ success: false, message: "task not found" });

        }

        return res.status(200).json({
            success: true,
            tasks: task
        })

    } catch (err) {

        return res.status(500).json({ message: err.message });
    }
}





export const deleteTask = async (req, res) => {
    try {


        const { task_id } = req.body;

        console.log(req.body)

        const deleteTask = await Task.findByIdAndDelete({ _id: task_id });

        if (!deleteTask) {
            return res.status(404).json({ success: false, message: "task not found" });


        }

        return res.status(200).json({
           
            deleteTask,
            message: "task deleted successfully"
        })



    }
    catch (err) {

        return res.status(500).json({ message: err.message });
    }
}










export const updateTask = async (req, res) => {
    try {
        const { title, description, status } = req.body;

        const updatedTask = await Task.findByIdAndUpdate(
            req.body.id,

            { title, description, status },
            { new: true, runValidators: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ success: false, message: "Task not found" });
        }

        res.status(200).json({
            success: true,
            message: "Task updated successfully",
            data: updatedTask,
        });


    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }


};



