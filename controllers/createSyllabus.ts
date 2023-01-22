import { createBeer } from "../services/syllabusService.ts";
import {Context} from "https://deno.land/x/oak/mod.ts";

export default async ({ request, response } : Context) => {
    if (!request.hasBody) {
        response.status = 400;
        response.body = {msg: "Invalid beer data"};
        return;
    }

    const {name, brand, is_premium} = await request.body().value;

    console.log(await request.body({type: "json"}).value)
    console.log(name)

    if (!name || ! brand) {
        response.status = 422;
        response.body = { msg: "Incorrect beer data. Name and brand are required"}
        return
    }
    const beerId = await createBeer({ name, brand, is_premium});

    response.body = {msg: "Beer created", beerId};
};