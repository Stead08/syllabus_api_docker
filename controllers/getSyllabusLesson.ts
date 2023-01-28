import {getSyllabusByLesson} from "../services/syllabusService.ts";
import { Context } from "https://deno.land/x/oak/mod.ts";

interface ContextWithParams extends Context {
    params: {
        lesson: string;
    };
}
export default async ({ params, response }:ContextWithParams) => {
    const SyllabusLesson: string = params.lesson;

    if (!SyllabusLesson) {
        response.status = 400;
        response.body = {msg: "Invalid Syllabus Name "};
        return;
    }

    const foundSyllabusList = await getSyllabusByLesson(SyllabusLesson);
    if (!foundSyllabusList) {
        response.status = 404;
        response.body = {msg: `syllabus with Lesson ${SyllabusLesson} not found`};
        return
    }

    response.body = foundSyllabusList;
};
