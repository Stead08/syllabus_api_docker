import { Router } from "https://deno.land/x/oak/mod.ts";
import getBeers from "./controllers/getBeers.ts";
import getBeerDetails from "./controllers/getBeerDetails.ts"
import getBeerList from "./controllers/getBeerList.ts"
import createBeer from "./controllers/createBeer.ts";
import updateBeer from "./controllers/updateBeer.ts"
import deleteBeer from "./controllers/deleteBeer.ts";

const router = new Router();

router
    .get("/beers", getBeers)
    .get("/beers/id/:id", getBeerDetails)
    .get("/beers/name/:name", getBeerList)
    .post("/beers", createBeer)
    .put("/beers/id/:id", updateBeer)
    .delete("/beers/id/:id", deleteBeer);

export default router;
