import syllabusRepo from "../repositories/syllabusRepo.ts";
import { QueryArrayResult } from "https://deno.land/x/postgres/query/query.ts";

type GenericObject = {[key: string]: any};

const generateObjectFromQueryResult = (queryResult: QueryArrayResult) => {
    const result: GenericObject[] = [];

    queryResult.rows.map((syllabus) => {
        const obj: GenericObject = {};

        queryResult.rowDescription?.columns.map((el, i) => {
            obj[el.name] = syllabus[i];
        });
        result.push(obj);
    });

    return result;
};


export const getSyllabusListByCategory = async(category: string) => {
    const syllabusList = await syllabusRepo.selectByCategory(category);
    if (typeof syllabusList === "object")
    return generateObjectFromQueryResult(syllabusList)
};
export const getSyllabusByLesson = async(lesson: string) => {
    const syllabusList = await syllabusRepo.selectByLesson(lesson);
    if (typeof syllabusList === "object")
    return generateObjectFromQueryResult(syllabusList)

};
export const getSyllabusDetailById = async(detailId: string) => {
    const syllabusDetail = await syllabusRepo.selectBySyllabusDetailId(detailId);
    if (typeof syllabusDetail === "object")
    return generateObjectFromQueryResult(syllabusDetail)
};
