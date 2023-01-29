export interface CategoryTranslation {
    categoryOfListId: string;
    categoryOfListCategory: string;
    syllabusCategories: {
        syllabusCategoryId: string;
        syllabusCategory:string;
    }[];

}

export interface syllabusDetail  {
    syllabus_detail_id: number;
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

export interface SyllabusList  {
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

export const ListCategoryToSyllabusCategory: CategoryTranslation[] = [
    {
        categoryOfListId: "1",
        categoryOfListCategory: "自由選択領域",
        syllabusCategories: [
            {
                syllabusCategoryId: "1",
                syllabusCategory: '自由領域科目'

            }
        ]

    },
    {
        categoryOfListId: "2",
        categoryOfListCategory: "卒業研究領域",
        syllabusCategories: [
            {
                syllabusCategoryId: "1",
                syllabusCategory: '卒業研究領域'

            }
        ]

    },
    {
        categoryOfListId: "3",
        categoryOfListCategory: "学類専門領域",
        syllabusCategories: [
            {
                syllabusCategoryId: "1",
                syllabusCategory: '学類専門領域'

            }
        ]

    },
    {
        categoryOfListId: "4",
        categoryOfListCategory: "学類基礎領域",
        syllabusCategories: [
            {
                syllabusCategoryId: "1",
                syllabusCategory: '学類基礎領域'

            }
        ]

    },
    {
        categoryOfListId: "5",
        categoryOfListCategory: "問題探究領域",
        syllabusCategories: [
            {
                syllabusCategoryId: "1",
                syllabusCategory: '問題探究領域'

            }
        ]

    },
    {
        categoryOfListId: "6",
        categoryOfListCategory: "教養領域",
        syllabusCategories: [
            {
                syllabusCategoryId: "1",
                syllabusCategory: '教養領域'

            }
        ]

    },
    {
        categoryOfListId: "7",
        categoryOfListCategory: "接続領域",
        syllabusCategories: [
            {
                syllabusCategoryId: "1",
                syllabusCategory: '接続領域'

            }
        ]

    }

]

