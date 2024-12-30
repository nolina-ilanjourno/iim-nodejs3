
class ReviewsController {
  async index(req, res) {
    try {
      const reviews = [
        {
          name: "Vanessa W.",
          rating: 5,
          comment:
            "Great bands, easy operation of web, definitely exited to see another",
        },
        {
          name: "Delaram H.",
          rating: 5,
          comment: "Perfect",
        },
        {
          name: "Dmytro O.",
          rating: 5,
          comment: "Perfect",
        },
      ]
  
      return res.status(200).send(reviews);
    } catch (error) {
      return res.status(500).send({ error: 'An error occurred while fetching translations' });
    }
  }  
}

export default new ReviewsController();
