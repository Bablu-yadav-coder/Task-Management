import Task from "../Models/task.model.js";
import User from "../Models/user.model.js";
import { logMessage } from "../logger.js";


export const createTask = async (req, res) => {


    try {

        const { title, description, userId } = req.body;

        // const userId = req.user._id;


        const newTask = new Task({ title, description, userId });


        await newTask.save();

        logMessage(`New task created:............`);


        return res.status(200).json({
            success: true,
            message: "Task created successfully",
            data: newTask,
        });


    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }

};



export const getAllTask = async (req, res) => {

   

    try {

        const getAlltasks = await Task.find();

       logMessage('Task Fetched from : DB')


   

        return res.status(200).json({
            success: true,
            tasks: getAlltasks,
            message: "All tasks fetched from DB"
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
            tasks: task,

        })

    } catch (err) {

        return res.status(500).json({ message: err.message });
    }
}







export const deleteTask = async (req, res) => {
    try {


        const { task_id } = req.body;

        const deleteTask = await Task.findByIdAndDelete({ _id: task_id });

        if (!deleteTask) {
            return res.status(404).json({ success: false, message: "task not found" });


        }

        logMessage(`Task deleted: ${deleteTask.title}`);

        return res.status(200).json({ success: true, deleteTask, message: "task deleted successfully" })



    }
    catch (err) {

        return res.status(500).json({ message: err.message });
    }
}




export const deleteTaskByAuther = async (req, res) => {
    try {


        const { task_id, userId } = req.body;


        const deleteTask = await Task.findOneAndDelete({ $and: [{ _id: task_id }, { userId: userId }] });

        if (!deleteTask) {
            return res.status(404).json({ success: false, message: "task not found" });


        }
        

        return res.status(200).json({ success: true, deleteTask, message: "task deleted successfully" })



    }
    catch (err) {

        return res.status(500).json({ message: err.message });
    }
}







export const updateTask = async (req, res) => {
    try {
        const { title,userId,  description, id } = req.body;


        const task = await Task.findOne({ _id: id })
        console.log(task)

        console.log(userId)
        console.log(task.userId)


        if (!task) {
            return res.status(404).json({ success: false, message: "Task not found" });
        }


        let updatedTask;


        if (userId.toString() === task.userId.toString()) {

            updatedTask = await Task.findOneAndUpdate(
                { _id: req.body.id },

                { title, description },
                { new: true, runValidators: true }
            );


            logMessage(`Task updated: ${updatedTask.title}`);


        } else {
            return res.status(404).json({ success: false, message: "unauthorized" });

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



