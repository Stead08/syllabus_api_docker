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
export const createBeer = async (beerData: { is_premium: boolean; name: string; brand: string }) => {
    const newBeer = {
        name: String(beerData.name),
        brand: String(beerData.brand),
        is_premium: "is_premium" in beerData ? Boolean(beerData.is_premium) : false,
        registration_date: new Date(),
    };

    const queryResponse = await beerRepo.create(newBeer);

    return generateObjectFromQueryResult(queryResponse)[0].id;
};

export const updateBeer = async (beerId: string, beerData: Beer) => {
    const beer = await getBeer(beerId);

    if (Object.keys(beer).length === 0 && beer.constructor === Object) {
        throw new Error("Beer not found");
    }

    const updatedBeer = {
        name: beerData.name !== undefined ? String(beerData.name) : beer.name,
        brand: beerData.brand !== undefined ? String(beerData.brand) : beer.brand,
        is_premium: beerData.is_premium !== undefined
            ? Boolean(beerData.is_premium)
            : beer.is_premium,
    };

    beerRepo.update(beerId, updatedBeer);
};

export const deleteBeer = async (beerId: string) => {
    beerRepo.delete(beerId);
};