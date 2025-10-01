import { Router } from "express";
import { createTask, deleteTask, getAllTask, getTask, updateTask } from "../../Controllers/task.controllerv1.js";
import { authorizeRoles, isLoggedIn } from "../../middleware.js";



const router = Router();



router.use(isLoggedIn);


router.route("/create").post(isLoggedIn, createTask);
router.route("/get_all_Task").get(getAllTask);
router.route("/get_task").post(getTask);

router.route("/delete_task").delete(authorizeRoles("admin"), deleteTask);

router.route("/update_task").put(authorizeRoles("admin") ,updateTask);



export default router;
