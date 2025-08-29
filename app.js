import express from "express";
const app = express();
export default app;
import employees from "./db/employees.js";
console.log(employees);

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

app.route("/employees").get((req, res) => {
  res.send(employees);
});

app.route("/employees/random").get((req, res) => {
  const id = Math.floor(Math.random() * 10);
  if (id > employees.length - 1) {
    return res.status(400).send("Employee not found");
  }
  res.status(200).send(employees[id]);
});

app.route("/employees/:id").get((req, res) => {
  const { id } = req.params;
  if (id > employees.length - 1) {
    return res.status(404).send("Employee not found.");
  }
  res.status(200).send(employees[id - 1]);
});
