import {MainBookCategory} from "./models";

export const MAIN_ITEMS: MainBookCategory[] = [
    MainBookCategory.Talmud_Sotah, MainBookCategory.Mishnah_Berakhot,
    MainBookCategory.Sefer_Bereishit
]

export const BASE_URL: string = 'https://www.sefaria.org/api/'
export const INDEX_URL: string = `${BASE_URL}index/`
