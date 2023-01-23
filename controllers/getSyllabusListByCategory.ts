import {getSyllabusListByCategory} from "../services/syllabusService.ts";
import { Context } from "https://deno.land/x/oak/mod.ts";

interface ContextWithParams extends Context {
    params: {
        category: string;
    };
}
export default async ({ params, response }:ContextWithParams) => {
    const SyllabusCategory = params.category;

    if (!SyllabusCategory) {
        response.status = 400;
        response.body = {msg: "Invalid Syllabus Category "};
        return;
    }

    const foundSyllabusList = await getSyllabusListByCategory(SyllabusCategory);
    if (!foundSyllabusList) {
        response.status = 404;
        response.body = {msg: `syllabus with Category ${SyllabusCategory} not found`};
        return;
    }

    response.body = foundSyllabusList;
};