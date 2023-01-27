export interface CategoryTranslation {
    categoryOfListId: string;
    categoryOfListCategory: string;
    syllabusCategories: {
        syllabusCategoryId: string;
        syllabusCategory:string;
    }

}

export const ListCategoryToSyllabusCategory = [
    {
        categoryOfListId: "1",
        categoryOfListCategory: "自由選択領域",
        syllabusCategories: [
            {
                syllabusCategoryId: "1",
                syllabusCategory: '自由領域科目'

            }
        ]

    }
]