import express from "express";
import { Router } from "express";
import { Individual } from "./models/person.js";



//post route to add a person

Router.post("/", async (req, res) => {
    try {
      const data = req.body;
  
      const newPerson = new Individual(data);
  
      const response = await newPerson.save();
      console.log("data saved");
      res.status(200).send(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    }
  });


  // post route to get a specified person
  Router.get("/:workType", async (req, res) => {
    try {
      const workType = req.params.workType;
      if (
        workType === "chef" ||
        workType === "manager" ||
        workType === "waiter"
      ) {
        const response = await Individual.find({ work: workType });
        console.log(response);
        res.status(200).json(response);
      } else {
        res.status(200).json({ error: "Invalid workType" });
      }
    } catch (err) {
      res.status(200).json({ error: "Internal server error" });
    }
  });

  module.exports = Router;