import client from "../db/database.ts";




class SyllabusRepo {
    selectByCategory = (category: string) => {
        if(client)
        return client.queryArray`SELECT * FROM "SyllabusList" WHERE 科目区分 = ${category}`
    }

    selectBySyllabusDetailId = (detailId: string) => {
        if(client)
        return client.queryArray`SELECT * FROM "SyllabusDetails" WHERE  syllabus_detail_id = ${parseInt(detailId)}`
    }

    selectByLesson = (lesson: string) => {
        if(client)
        return client.queryArray`SELECT * FROM "SyllabusList" WHERE 講義名 = ${lesson}`
    }

}

export default new SyllabusRepo();