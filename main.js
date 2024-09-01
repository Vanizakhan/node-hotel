import mongoose from "mongoose";
import express, { Router } from "express";
// import { Individual } from "./models/person.js";
// import { personRoutes }from './routes/personRoutes.js'
import personRoutes from './routes/personRoutes.js'
// import {} from 'dotenv/config'
import dotenv from 'dotenv'
dotenv.config()



// let mongoURL="mongodb://localhost:27017/hotel";
// let conn = await mongoose.connect(mongoURL);


// let  mongoUrl= "mongodb+srv://vanizakhan523:Comtrak2025@cluster0.l05sg.mongodb.net/"
let  mongoUrl= process.env.MONGODB_URL
let conn = await mongoose.connect(mongoUrl);


const app = express();
// const port = 5500;

import bodyParser from "body-parser";
app.use(bodyParser.json());

// app.get('/', (req, res)=>{
//     const todo = new Todo({ title: "my 3rd todo", desc: "Desc of this 2nd todo", isDone: "false"})
//     todo.save();
//    res.send("Welcome to the todo app")
// })

// app.post("/persons", async (req, res) => {
//   try {
//     const data = req.body;

//     const newPerson = new Individual(data);

//     const response = await newPerson.save();
//     console.log("data saved");
//     res.status(200).send(response);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// app.get("/persons/:workType", async (req, res) => {
//   try {
//     const workType = req.params.workType;
//     if (
//       workType === "chef" ||
//       workType === "manager" ||
//       workType === "waiter"
//     ) {
//       const response = await Individual.find({ work: workType });
//       console.log(response);
//       res.status(200).json(response);
//     } else {
//       res.status(200).json({ error: "Invalid workType" });
//     }
//   } catch (err) {
//     res.status(200).json({ error: "Internal server error" });
//   }
// });

// import the router file


app.use('/persons', personRoutes);

const PORT = process.env.PORT || 5500

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});