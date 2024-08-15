import mongoose from "mongoose";
import express, { Router } from "express";
// import { Individual } from "./models/person.js";

let conn = await mongoose.connect("mongodb://localhost:27017/hotel");

const app = express();
const port = 8080;

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

import { personRoutes } from './routes/personRoutes.js'

//use the router

app.use('/persons', personRoutes);


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
