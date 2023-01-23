import { Router } from "https://deno.land/x/oak/mod.ts";
import getSyllabusList from "./controllers/getSyllabusLesson.ts"
import createBeer from "./controllers/createSyllabus.ts";
import updateBeer from "./controllers/updateSyllabus.ts";
import getSyllabusListByCategory from "./controllers/getSyllabusListByCategory.ts";
import getSyllabusDetail from "./controllers/getSyllabusDetails.ts"

const router = new Router();

router
    .get("/search/lesson/:lesson", getSyllabusList)
    .get("/search/category/:category", getSyllabusListByCategory)
    .get("/syllabus/:detailId", getSyllabusDetail)
    .post("/beers", createBeer)
    .put("/beers/id/:id", updateBeer)

export default router;
