export enum MainBookCategory {
Chumash = 'Chumash',
Tanach = 'Tanach',
Mishnayot = 'Mishnayot',
Sefer_Bereishit = 'Bereishit',
Mishnah_Berakhot = 'Mishnah Berakhot',
Talmud_Sotah = 'Talmud Sotah',
}

export interface IndexData {
    title: string
    categories: string[]
    schema: {
        nodeType: string
        sectionNames: string[]
        depth: number
        lengths: number[]
    }
}

