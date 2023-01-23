import { Router } from "https://deno.land/x/oak/mod.ts";
import getSyllabusList from "./controllers/getSyllabusLesson.ts"
import getSyllabusListByCategory from "./controllers/getSyllabusListByCategory.ts";
import getSyllabusDetail from "./controllers/getSyllabusDetails.ts"

const router = new Router();

router
    .get("/search/lesson/:lesson", getSyllabusList)
    .get("/syllabus/:detailId", getSyllabusDetail)
    .get("/search/:category/", getSyllabusListByCategory)

export default router;
