
class PopularArtistsController {
  async index(req, res) {
    try {
      const artists = [
        {
          name: "50 Cent",
          imageUrl: "https://gigsberg.com/files/images/hp_slides/ericclapton2.jpg",
        },
        {
          name: "Carlos Santana",
          imageUrl: "https://gigsberg.com/files/images/hp_slides/massiveattack.jpg",
        },
        {
          name: "Guns N' Roses",
          imageUrl: "https://gigsberg.com/files/images/hp_slides/50cent.jpg",
        },
        {
          name: "Sean Paul",
          imageUrl: "https://gigsberg.com/files/images/hp_slides/carlossantana.jpg",
        },
        {
          name: "50 Cent",
          imageUrl: "https://gigsberg.com/files/images/hp_slides/ericclapton2.jpg",
        },
        {
          name: "Carlos Santana",
          imageUrl: "https://gigsberg.com/files/images/hp_slides/massiveattack.jpg",
        },
        {
          name: "Guns N' Roses",
          imageUrl: "https://gigsberg.com/files/images/hp_slides/50cent.jpg",
        },
        {
          name: "Sean Paul",
          imageUrl: "https://gigsberg.com/files/images/hp_slides/carlossantana.jpg",
        }
      ]
  
      return res.status(200).send(artists);
    } catch (error) {
      return res.status(500).send({ error: 'An error occurred while fetching translations' });
    }
  }  
}

export default new PopularArtistsController();
