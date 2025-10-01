import mongoose from "mongoose";
import { Schema } from "mongoose";

const taskSchema = Schema({

  title: {
    type: String,
    required: [true, "Task title is required"],
  },

  userId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User"
  },

  description: {
    type: String,
  },

  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Task = mongoose.model("Task", taskSchema);
export default Task;
