import prisma from "../config/prisma.js";

class CompaniesController {
  async index(req, res) {
    const companies = await prisma.company.findMany();
    return res.status(200).send(companies);
  }

  async store(req, res) {
    try {
      const body = req.body;

      const existingCompany = await prisma.company.findFirst({
        where: {
          name: body.name,
        },
      });

      if (existingCompany === null) {
        const company = await prisma.company.create({
          data: {
            name: body.name,
            address: body.address
          },
        });
        return res.status(201).send(company);
      }

      return res.status(409).send("Company already exists");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  async show(req, res) {
    try {
      const id = req.params.id;
      const company = await prisma.company.findFirst({
        where: {
          id: parseInt(id),
        },
      });

      if (company === null) {
        return res.status(404).send("Company not found");
      }

      return res.status(200).send(company);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const data = req.body;
      let company = await prisma.company.findFirst({
        where: {
          id: parseInt(id),
        },
      });

      if (company === null) {
        return res.status(404).send("Company not found");
      }

      company = await prisma.company.update({
        where: {
          id: parseInt(id),
        },
        data,
      });

      return res.status(200).send(user);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  async destroy(req, res) {
    try {
      const id = req.params.id;
      let company = await prisma.company.findFirst({
        where: {
          id: parseInt(id),
        },
      });

      if (company === null) {
        return res.status(404).send("Company not found");
      }

      await prisma.company.delete({
        where: {
          id: parseInt(id),
        },
      });

      return res.status(204).send();
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}

export default new CompaniesController();
