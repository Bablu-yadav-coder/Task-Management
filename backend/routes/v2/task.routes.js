import { Router } from "express";
import { createTask, deleteTask, deleteTaskByAuther, getAllTask, getTask, updateTask } from "../../Controllers/task.controllerv2.js";
import { authorizeRoles, isLoggedIn } from "../../middleware.js";



const router = Router();



// router.use();



router.route("/create").post(isLoggedIn, (req,res, next) => {
            console.log("crated..............");

            next();
} , createTask);


router.route("/get_all_Task").get(getAllTask);
router.route("/get_task").post(getTask);

router.route("/delete_your_task").delete(deleteTaskByAuther);
router.route("/update_your_task").put(updateTask);


router.route("/delete_task").delete(isLoggedIn, authorizeRoles("admin"), deleteTask);

router.route("/update_task").put(isLoggedIn, authorizeRoles("admin"), updateTask);




export default router;
