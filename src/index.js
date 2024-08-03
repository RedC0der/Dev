import dotenv from "dotenv"
import connectDB from "./db/index.js"
import {app} from './app.js'
dotenv.config({
    path: './.env'
})



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})




// import dotenv from "dotenv"; // Import dotenv to manage environment variables
// import connectDB from "./db/index.js"; // Import the function to connect to MongoDB
// import { app } from './app.js'; // Import the Express app

// dotenv.config({ path: './.env' }); // Configure dotenv to load variables from .env file

// connectDB()
//     .then(() => {
//         // If the DB connection is successful, start the server
//         app.listen(process.env.PORT || 8000, () => {
//             console.log(`⚙️ Server is running at port: ${process.env.PORT || 8000}`);
//         });
//     })
//     .catch((err) => {
//         // If the DB connection fails, log the error
//         console.log("MONGO db connection failed !!! ", err);
//     });
