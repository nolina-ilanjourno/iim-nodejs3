
class PopularCitiesController {
  async index(req, res) {
    try {
      const cities = [
        {
          name: "London",
          imageUrl: "https://gigsberg.com/files/images/cities/London_1626685159.jpg",
        },
        {
          name: "Barcelona",
          imageUrl: "https://gigsberg.com/files/images/cities/barca.jpg",
        },
        {
          name: "Paris",
          imageUrl: "https://gigsberg.com/files/images/cities/paris.jpg",
        },
        {
          name: "Amsterdam",
          imageUrl: "https://gigsberg.com/files/images/cities/amster.jpg",
        },
      ]
  
      return res.status(200).send(cities);
    } catch (error) {
      return res.status(500).send({ error: 'An error occurred while fetching translations' });
    }
  }  
}

export default new PopularCitiesController();
