const express = require("express");

const app = express();

// init body-parser to make express accept JSON request
const bodyParser = require("body-parser");

const port = 4001;

app.use(bodyParser.json());

// create the homepage route
app.get("/", (req, res) => {
  res.send("Hello Express!!!");
});
// End create the homepage route

// data dummy todos
let todos = [
  {
    id: 1,
    title: "Belajar Node JS",
    isDone: false,
  },
  {
    id: 2,
    title: "Belajar Express",
    isDone: false,
  },
  {
    id: 3,
    title: "Belajar React JS",
    isDone: false,
  },
];
// data dumyy todos

// get data todos route
app.get("/todos", (req, res) => {
  res.send({
    response: "Response Success",
    status: "Get data Success",
    data: todos,
  });
});
// End get data todos route

// get data todoById route
app.get("/todo/:id", (req, res) => {
  const id = req.params.id;
  const todoById = todos.find((todo) => todo.id == id);

  if (!todoById) {
    return res.send({
      response: "Response Failed",
      status: `Data todo with ID ${id} NOT FOUND!`,
      data: null,
    });
  }

  res.send({
    response: "Response Success",
    status: "Get data Success",
    data: todoById,
  });
});
// end get data todoById route

// add data todos route
app.post("/addtodo", (req, res) => {
  const dataAdded = req.body;
  todos = [...todos, dataAdded];

  res.send({
    response: "Response Success",
    status: "Add data Success",
    dataAdded: dataAdded,
    dataAfterAdd: todos,
  });
});
// End add data todos route

// update data todo with patch route
app.patch("/updatetodo/:id", (req, res) => {
  const { id } = req.params; // This is like ==> const id = req.params.id

  todos = todos.map((todo) => (todo.id == id ? req.body : todo));

  res.send({
    response: "Response Success",
    status: "Update data Success",
    id: id,
    dataUpdated: req.body,
    dataAfterUpdate: todos,
  });
});
// End update data todo with patch route

// update data todo with put route
app.put("/updatetodo-put/:id", (req, res) => {
  const { id } = req.params; // This is like ==> const id = req.params.id

  todos = todos.map((todo) => (todo.id == id ? req.body : todo));

  res.send({
    response: "Response Success",
    status: "Update data Success",
    id: id,
    dataUpdated: req.body,
    dataAfterUpdate: todos,
  });
});
// End update data todo with put route

// delete data todo route
app.delete("/deletetodo/:id", (req, res) => {
  const { id } = req.params; // This is like ==> const id = req.params.id

  todos = todos.filter((todo) => todo.id != id);

  res.send({
    response: "Response Success",
    status: "Delete data Success",
    idDataDelete: id,
    dataAfterDelete: todos,
  });
});
// End delete data todo route

app.listen(port, () => console.log(`Listening on port ${port}!!!`));
