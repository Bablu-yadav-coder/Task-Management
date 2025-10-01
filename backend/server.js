import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors"
import mongoose, { modelNames } from "mongoose";
import userRoute from "./routes/user.routes.js"
import taskRouteV1 from "./routes/v1/task.routes.js"
import taskRouteV2 from "./routes/v2/task.routes.js"
import { logMessage } from "./logger.js";


const app = express();
const port = 8000;



async function main() {

    await mongoose.connect(process.env.ATLAS_URL)

}
main().then(() => {
    console.log("DB Conneted successfully");
})
    .catch(err => {
        console.log(err);
    })



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extends: true }));


app.use((req, res, next) => {

//   logMessage(`${req.method} ${req.url} - ${req.ip}`);
  next();
});


app.use(userRoute);
app.use("/api/v1", taskRouteV1);
app.use("/api/v2",taskRouteV2);



app.get("/home", (req, res) => {
    res.send("This is home page")
})




app.use((err, req, res, next) => {
    let { status=500, message = "Something went wrong!..."} = err;
    res.status(status).json({message : message});
})




app.listen(port, () => {

    
  logMessage(`🚀 Server started on port ${port}`);
    console.log("app is listening on port 8000");
})



