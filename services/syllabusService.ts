import syllabusRepo from "../repositories/syllabusRepo.ts";
import { QueryResult } from "https://deno.land/x/postgres@v0.14.0/query/query.ts";

type GenericObject = { [key: string]: any };


const generateObjectFromQueryResult = (queryResult: QueryResult) => {
    const result: GenericObject[] = [];

    queryResult.rows.map((syllabus: string[]) => {
        let obj: GenericObject = {};

        queryResult.rowDescription.columns.map((el, i) => {
            obj[el.name] = syllabus[i];
        });
        result.push(obj);
    });

    return result;
};

export const getBeer = async () => {
    return null
}

export const getSyllabusListByCategory = async(category: string) => {
    const syllabusList: QueryResult = await syllabusRepo.selectByCategory(category);
    console.log(syllabusList)
    return generateObjectFromQueryResult(syllabusList)
};
export const getSyllabusByLesson = async(lesson: string) => {
    const syllabusList:QueryResult = await syllabusRepo.selectByLesson(lesson);
    return generateObjectFromQueryResult(syllabusList)

};
export const getSyllabusDetailById = async(detailId: string) => {
    const syllabusDetail: QueryResult = await syllabusRepo.selectBySyllabusDetailId(detailId);
    console.log(syllabusDetail)
    return generateObjectFromQueryResult(syllabusDetail)
};
