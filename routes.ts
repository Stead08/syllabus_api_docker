import { Router } from "https://deno.land/x/oak/mod.ts";
import getBeers from "./controllers/getSyllabusListByCategory.ts";
import getBeerDetails from "./controllers/getSyllabusDetails.ts"
import getBeerList from "./controllers/getSyllabusName.ts"
import createBeer from "./controllers/createSyllabus.ts";
import updateBeer from "./controllers/updateSyllabus.ts"
import deleteBeer from "./controllers/deleteSyllabus.ts";

const router = new Router();

router
    .get("/beers", getBeers)
    .get("/beers/id/:id", getBeerDetails)
    .get("/beers/name/:name", getBeerList)
    .post("/beers", createBeer)
    .put("/beers/id/:id", updateBeer)
    .delete("/beers/id/:id", deleteBeer);

export default router;
