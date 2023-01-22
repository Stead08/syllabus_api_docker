import {getBeersByName} from "../services/syllabusService.ts";
import { Context } from "https://deno.land/x/oak/mod.ts";

interface ContextWithParams extends Context {
    params: {
        name: string;
    };
}
export default async ({ params, response }:ContextWithParams) => {
    const beerName = params.name;

    if (!beerName) {
        response.status = 400;
        response.body = {msg: "Invalid beer Name "};
        return;
    }

    const foundBeer = await getBeersByName(beerName);
    if (!foundBeer) {
        response.status = 404;
        response.body = {msg: `beer with ID ${beerName} not found`};
        return
    }

    response.body = foundBeer;
};