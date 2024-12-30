import prisma from "../config/prisma.js";

class TranslationsController {
  async index(req, res) {
    try {
      const translations = await prisma.translation.findMany({
        include: {
            language: true,
        },
      });
  
      if (translations.length === 0) {
        return res.status(404).send({ error: 'No translations found' });
      }
  
      return res.status(200).send(translations);
    } catch (error) {
      return res.status(500).send({ error: 'An error occurred while fetching translations' });
    }
  }  

  async store(req, res) {
    try {
      const { key, value } = req.body; // Suppose que le champ `text` est envoyé dans la requête

      // Récupérer toutes les langues
      const languages = await prisma.language.findMany();
  
      if (languages.length === 0) {
        return res.status(404).send({ error: 'No languages found' });
      }
  
      // Créer une traduction pour chaque langue
      const translations = await Promise.all(
        languages.map(({id}) =>
          prisma.translation.create({
            data: {
              key,
              value,
              language: {
                connect: { id },
              },
            },
          })
        )
      );
  
      return res.status(201).send(translations);
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  } 
}

export default new TranslationsController();
