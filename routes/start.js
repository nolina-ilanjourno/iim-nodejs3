import express from "express";
import AuthentificationController from "../controllers/AuthentificationController.js";
import CompaniesController from "../controllers/CompaniesController.js";
import SlidesController from "../controllers/SlidesController.js";
import TranslationsController from "../controllers/TranslationsController.js";
import UsersController from "../controllers/UsersController.js";
import WebsitesController from "../controllers/WebsitesController.js";
import AuthentificationMiddleware from "../middlewares/AuthentificationMiddleware.js";
import LanguagesController from "../controllers/LanguagesController.js";
import TrendingEventsController from "../controllers/TrendingEventsController.js";
import ReviewsController from "../controllers/ReviewsController.js";
import PopularArtistController from "../controllers/PopularArtistController.js";
import PopularCitiesController from "../controllers/PopularCitiesController.js";

const router = express.Router();

router.get("/users", UsersController.index);
router.post("/users", UsersController.store); 
router.get("/users/:id", UsersController.show); 
router.put("/users/:id", UsersController.update);
router.delete("/users/:id", UsersController.destroy);
router.get(
  "/getMyProfile",
  AuthentificationMiddleware.authentification,
  UsersController.getMyProfile
);

router.get("/companies", CompaniesController.index);
router.post("/companies", CompaniesController.store); 
router.get("/companies/:id", CompaniesController.show); 
router.put("/companies/:id", CompaniesController.update);
router.delete("/companies/:id", CompaniesController.destroy);

router.get('/languages', LanguagesController.index);
router.get('/languages/:code', LanguagesController.show);

router.get('/translations', TranslationsController.index);
router.post('/translations', TranslationsController.store);

router.get('/trending-events', TrendingEventsController.index);
router.get('/reviews', ReviewsController.index);
router.get('/popular-artists', PopularArtistController.index);
router.get('/popular-cities', PopularCitiesController.index);

router.get("/companies/:companyId/websites", WebsitesController.index);
router.post("/companies/:companyId/websites", WebsitesController.store); 
router.get("/companies/:companyId/websites/:id", WebsitesController.show); 
router.put("/companies/:companyId/websites/:id", WebsitesController.update);
router.delete("/companies/:companyId/websites/:id", WebsitesController.destroy);

router.get('/slides', SlidesController.index)

router.post("/login", AuthentificationController.login);

export default router;
