import prisma from "../config/prisma.js";

class WebsitesController {
  async index(req, res) {
    try {
      const websites = await prisma.website.findMany({
        where: {
          company_id: parseInt(req.params.companyId, 10),
        },
      });
  
      if (websites.length === 0) {
        return res.status(404).send({ error: 'No websites found for this company' });
      }
  
      return res.status(200).send(websites);
    } catch (error) {
      return res.status(500).send({ error: 'An error occurred while fetching websites' });
    }
  }  

  async store(req, res) {
    try {  
      const data = req.body;

      const existingCompany = await prisma.company.findUnique({
        where: {
          id: parseInt(req.params.companyId, 10),
        },
      });
  
      if (!existingCompany) {
        return res.status(404).send({ error: "Company not found" });
      }
  
      const website = await prisma.website.create({
        data: {
          logo: data.logo,
          domain: data.domain,
          primary_color: data.primary_color,
          secondary_color: data.secondary_color,
          published: data.published,
          description: data.description,
          company: {
            connect: { id: parseInt(req.params.companyId, 10) },
          },
        },
      });
  
      return res.status(201).send(website);
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }
  
  
  async show(req, res) {
    try {
      const id = parseInt(req.params.id, 10);
  
      const website = await prisma.website.findUnique({
        where: {
          id,
        },
      });
  
      if (!website) {
        return res.status(404).send({ error: "Website not found" });
      }
  
      return res.status(200).send(website);
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }  
  
  async update(req, res) {
    try {
      const id = parseInt(req.params.id, 10);
      const data = req.body;
  
      const website = await prisma.website.findUnique({
        where: {
          id,
        },
      });
  
      if (!website) {
        return res.status(404).send({ error: "Website not found" });
      }
  
      const updatedWebsite = await prisma.website.update({
        where: {
          id,
        },
        data,
      });
  
      return res.status(200).send(updatedWebsite);
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }  
  
  async destroy(req, res) {
    try {
      const id = parseInt(req.params.id, 10);
  
      const website = await prisma.website.findUnique({
        where: {
          id,
        },
      });
  
      if (!website) {
        return res.status(404).send({ error: "Website not found" });
      }
  
      await prisma.website.delete({
        where: {
          id,
        },
      });
  
      return res.status(204).send();
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }  
  
}

export default new WebsitesController();
