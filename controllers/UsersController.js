import prisma from "../config/prisma.js";

class UsersController {
  async index(req, res) {
    const users = await prisma.user.findMany();
    return res.status(200).send(users);
  }

  async store(req, res) {
    const body = req.body;
    const user = await prisma.user.create({
      data: body,
    });
    return res.status(201).send(user);
  }

  show(req, res) {
    const id = req.params.id;
    const user = users.find((user) => user.id === parseInt(id));

    if (user === undefined) {
      return res.status(404).send("User not found");
    }

    return res.status(200).send(user);
  }

  update(req, res) {
    const id = req.params.id;
    const body = req.body;
    const user = users.find((u) => u.id === parseInt(id));

    if (user === undefined) {
      return res.status(404).send("User not found");
    }

    user.name = body.name;

    return res.status(200).send(user);
  }

  destroy(req, res) {
    const id = req.params.id;
    const user = users.find((u) => u.id === parseInt(id));

    if (user === undefined) {
      return res.status(404).send("User not found");
    }

    const index = users.indexOf(user);
    users.splice(index, 1);

    return res.status(204).send();
  }
}

// module.exports = new UsersController();

export default new UsersController();
