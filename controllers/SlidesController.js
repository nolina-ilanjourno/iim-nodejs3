class SlidesController {
    async index(req, res) {
        return res.status(200).send([
            {
                id: 1,
                title: "Eric Clapton",
                image: "https://gigsberg.com/files/images/hp_slides/ericclapton2.jpg",
                buttonText: "Buy Now",
                buttonLink: "#",
            },
            {
                id: 2,
                title: "Massive Attack",
                image: "https://gigsberg.com/files/images/hp_slides/massiveattack.jpg",
                buttonText: "Buy Tickets",
                buttonLink: "#",
            },
            {
                id: 3,
                title: "50 Cents",
                image: "https://gigsberg.com/files/images/hp_slides/50cent.jpg",
                buttonText: "Buy Tickets",
                buttonLink: "#",
            },
            {
                id: 4,
                title: "Carlos Santana",
                image: "https://gigsberg.com/files/images/hp_slides/carlossantana.jpg",
                buttonText: "Buy Tickets",
                buttonLink: "#",
            },
        ]);
        
    }
}

export default new SlidesController()