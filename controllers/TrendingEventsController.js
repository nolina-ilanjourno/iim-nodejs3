
class TrendingEventsController {
  async index(req, res) {
    try {
        console.log('ok')
      const events = [
        {
          title: "Morad",
          date: "03 January 25 (Friday) · 20:00",
          location: "Palau Sant Jordi",
          city: "Barcelona, Spain",
          image:
            "https://gigsberg.com/files/images/performers/morad_1687769663.jpg",
          link: "/fr/concert-tickets/rap-hip-hop-reggae/morad-tickets/show-114246",
        },
        {
          title: "Sugababes",
          date: "03 January 25 (Friday) · 20:00",
          location: "Festival Hall Melbourne",
          city: "Melbourne, Australia",
          image:
            "https://gigsberg.com/files/images/performers/sugababes_1729604949.jpg",
          link: "/fr/concert-tickets/rock-pop/sugababes-tickets/show-155276",
        },
        {
          title: "World Darts Championship: Final",
          date: "03 January 25 (Friday) · 20:00",
          location: "Alexandra Palace West Hall",
          city: "London, United Kingdom",
          image:
            "https://gigsberg.com/files/images/performers/world_darts_championship_1698929186.jpg",
          link: "/fr/sport-tickets/darts/world-darts-championship/show-137488",
        },
        {
          title: "Disney On Ice presents Road Trip Adventures",
          date: "05 January 25 (Sunday) · 10:30",
          location: "O2 Arena",
          city: "London, United Kingdom",
          image: "https://gigsberg.com/files/images/performers/disney_on_ice_worlds_of_enchantment.jpg",
          link: "/fr/concert-tickets/k-pop/p1harmony-tickets/show-154974",
        },
        {
          title: "Max Pezzali",
          date: "03 January 25 (Friday) · 21:00",
          location: "Mediolanum Forum",
          city: "Milan, Italy",
          image:
            "https://gigsberg.com/files/images/performers/max_pezzali_1687855555.jpg",
          link: "/fr/concert-tickets/pop/max-pezzali-tickets/show-143637",
        },
        {
          title: "Afterlife",
          date: "04 January 25 (Saturday) · 12:00",
          location: "Zamna Tulum",
          city: "Tulum, Mexico",
          image:
            "https://gigsberg.com/files/images/performers/afterlife_1709196354.jpg",
          link: "/fr/concert-tickets/electronic/afterlife-tickets/show-139197",
        },
        {
          title: "Saadiyat Nights - Ebi",
          date: "04 January 25 (Saturday) · 18:00",
          location: "Saadiyat Island",
          city: "Abu Dhabi, United Arab Emirates",
          image: "https://gigsberg.com/files/images/performers/Ebi.jpg",
          link: "/fr/concert-tickets/pop/ebi-tickets/show-162608",
        },
        {
          title: "Crazyland Booming Sexy",
          date: "04 January 25 (Saturday) · 20:00",
          location: "North Sea Venue",
          city: "Zaandam, Netherlands",
          image:
            "https://gigsberg.com/files/images/subtypes/pexels-picjumbocom-196652.jpg",
          link: "/fr/concert-tickets/other-concerts/crazyland-tickets/show-152420",
        },
      ]
  
      return res.status(200).send(events);
    } catch (error) {
      return res.status(500).send({ error: 'An error occurred while fetching translations' });
    }
  }  
}

export default new TrendingEventsController();
