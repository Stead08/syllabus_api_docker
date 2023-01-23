import {getSyllabusDetailById} from "../services/syllabusService.ts";
import { Context } from "https://deno.land/x/oak/mod.ts";

interface ContextWithParams extends Context {
    params: {
        detailId: string;
    };
}
export default async ({ params, response }:ContextWithParams) => {
    const detailId = params.detailId;

    if (!detailId) {
        response.status = 400;
        response.body = {msg: "Invalid Detail id "};
        return;
    }

    const foundBeer = await getSyllabusDetailById(detailId);
    if (!foundBeer) {
        response.status = 404;
        response.body = {msg: `beer with ID ${detailId} not found`};
        return
    }

    response.body = foundBeer;
};