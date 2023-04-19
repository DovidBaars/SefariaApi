import {useEffect, useState} from "react";
import {IndexData, MainBookCategory} from "../models";

const MAIN_ITEMS: MainBookCategory[] = [
    MainBookCategory.Talmud_Sotah, MainBookCategory.Mishnah_Berakhot,
    MainBookCategory.Sefer_Bereishit
]
export interface IndexDataCollection {
    id: MainBookCategory
    data: IndexData
}

const useIndexCall = () => {
    const [data, setData] = useState<IndexDataCollection[]>()
    const [loading, setLoading] = useState<boolean>(true)

    const fetchAndSetData = () => {
        setLoading(true)
        const dataObj: IndexDataCollection[] = []
        MAIN_ITEMS.forEach(async (item, index) => {
            try {
                const res = await fetch(`https://www.sefaria.org/api/index/${item}`);
                if (res.ok) {
                    dataObj.push({id: item, data: await res.json()})
                }
                console.log(`DOVID >> api/index/${item} call status: >> ${res.status}`)

                // Last item to fetch
                if (dataObj.length === MAIN_ITEMS.length) {
                    setData(dataObj)
                    setLoading(false)
                    dataObj.forEach((x) => console.log(`DOVID >> ${x.id} >> ${x.data.title}`))
                }
            } catch (e) {
                console.log(`DOVID >> ${e}`)
            }

        })


    }

    useEffect(() => {
        fetchAndSetData()
        return () => setLoading(true)
    }, []);


    return {data, loading}

}
export default useIndexCall
