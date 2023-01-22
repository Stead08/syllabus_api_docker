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
    create(syllabus: syllabusDetail) {
        return client.queryArray
            `INSERT INTO public."SyllabusDetails" ("科目名", "講義名", "クラス", "担当教員", "学年", "開講学期", "開講時期", "曜日_時限", "科目種別", "科目区分", "単位区分", "単位数", "準備事項", "備考", "特殊プログラム", "授業方法", "講義情報", registration_date) VALUES (${syllabus.科目名}, ${syllabus.講義名}, ${syllabus.クラス}, ${syllabus.担当教員}, ${syllabus.学年}, ${syllabus.開講学期}, ${syllabus.開講時期}, ${syllabus.曜日_時限}, ${syllabus.科目種別}, ${syllabus.科目区分}, ${syllabus.単位区分}, ${syllabus.単位数}, ${syllabus.準備事項}, ${syllabus.備考}, ${syllabus.特殊プログラム},${syllabus.授業方法} , ${syllabus.講義情報}, ${syllabus.registration_date});`;
    }

    selectByCategory(category: string) {
        return client.queryArray`SELECT * FROM beers ORDER BY id`;
    }

    selectById(id: string) {
        return client.queryArray`SELECT * FROM beers WHERE id = ${id}`;
    }

    selectByName(name: string) {
        return client.queryArray`SELECT * FROM beers WHERE name=${name}`
    }

    update(id: string, syllabusDetail: syllabusDetail) {
        const latestBeer = this.selectById(id);

        return client.queryArray`UPDATE beers SET name = ${beer.name !== undefined ? beer.name : latestBeer.name}, brand = ${beer.brand !== undefined ? beer.brand : latestBeer.brand}, is_premium = ${beer.is_premium !== undefined ? beer.is_premium : latestBeer.is_premium} WHERE id = ${id}`;
    }

    delete(id: string) {
        return client.queryArray`DELETE FROM beers WHERE id = ${id}`;
    }
}

export default new SyllabusRepo();