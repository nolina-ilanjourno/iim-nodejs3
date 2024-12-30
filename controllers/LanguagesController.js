import prisma from "../config/prisma.js";

class LangugagesController {
  async index(req, res) {
    try {
      const languages = await prisma.language.findMany();
  
      if (languages.length === 0) {
        return res.status(404).send({ error: 'No languages found' });
      }
      
      return res.status(200).send(languages);
    } catch (error) {
      return res.status(500).send({ error: 'An error occurred while fetching langugages' });
    }
  }    

  async show(req, res) {
    try {
      const code = req.params.code;
      console.log('LANG ', code);
      const language = await prisma.language.findFirst({
        where: {
          code,
        },
        include: {
            translations: true
        }
      });

      if (language === null) {
        return res.status(404).send("language not found");
      }

      language.translations = Object.fromEntries(
        language.translations.map(({ key, value }) => [key, value])
      )

      return res.status(200).send(language);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
}

export default new LangugagesController();
