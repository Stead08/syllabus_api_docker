import client from "../db/database.ts";

export type syllabusDetail = {
    syllabus_detail_id: number;
    科目名: string;
    講義名: string;
    クラス: string;
    担当教員: string;
    学年: string;
    開講学期: string;
    開講時期: string;
    曜日_時限: string;
    科目種別: string;
    科目区分: string;
    単位区分: string;
    単位数: number;
    準備事項: string;
    備考: string;
    特殊プログラム: string;
    授業方法: string;
    講義情報: string;
    registration_date: Date;
};

export type SyllabusList =  {
    Syllabus_List_id: number;
    Syllabus_Detail_id: number;
    年度: number;
    カテゴリ: string;
    科目コード: string;
    ナンバリング: string;
    講義名: string;
    担当教員: string;
    学年: string;
    開講時期: string;
    曜日1: string;
    時限1: string;
    曜日2: string;
    時限2: string;
    科目区分: string;
    単位区分: string;

}

class SyllabusRepo {
    selectByCategory(category: string) {
        return client.queryArray`SELECT * FROM "SyllabusList" WHERE カテゴリ = ${category}`;
    }

    selectBySyllabusDetailId(detailId: string) {
        return client.queryArray`SELECT * FROM "SyllabusDetails" WHERE  syllabus_detail_id = 3699`;
    }

    selectByLesson(lesson: string) {
        return client.queryArray`SELECT * FROM "SyllabusList" WHERE 講義名 = ${lesson}`;
    }

}

export default new SyllabusRepo();