const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const users = [
  {
    id: 1,
    name: "Alice",
  },
  {
    id: 2,
    name: "Bob",
  },
  {
    id: 3,
    name: "Charlie",
  },
];

app.get("/users", (req, res) => {
  return res.status(200).send(users);
});

app.post("/users", (req, res) => {
  const body = req.body;
  users.push(body);
  return res.status(201).send(users);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((u) => u.id === parseInt(id));

  if (user === undefined) {
    return res.status(404).send("User not found");
  }

  return res.status(200).send(user);
});

app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const user = users.find((u) => u.id === parseInt(id));

  if (user === undefined) {
    return res.status(404).send("User not found");
  }

  user.name = body.name;

  return res.status(200).send(user);
});

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((u) => u.id === parseInt(id));

  if (user === undefined) {
    return res.status(404).send("User not found");
  }

  const index = users.indexOf(user);
  users.splice(index, 1);

  return res.status(204).send();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// /users en GET = liste d'utilisateurS
// /users en POST = ajouter un utilisateur (body accessible) => .push
// /users/:id en GET = afficher un utilisateur // .find
// /users/:id en PUT = modifier un utilisateur (body accessible) // .find et =
// /users/:id en DELETE = supprimer un utilisateur // .find et .splice
