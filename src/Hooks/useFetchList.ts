import {useEffect, useState} from "react";
import {FetchListCollection, IndexDataCollection} from "../models";

interface IReturnProps {
    data: IndexDataCollection[]
    loading: boolean
}

// Fetch a list of urls and return the data
const useFetchList = (fetchCollList: FetchListCollection[]): IReturnProps => {
    const [data, setData] = useState<IndexDataCollection[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    const fetchAndSetData = () => {
        setLoading(true)
        const dataObj: IndexDataCollection[] = []
        fetchCollList.forEach(async ({url, id}, index) => {
            try {
                const res = await fetch(url);
                if (res.ok) {
                    dataObj.push({id, data: await res.json()})
                }

                if (dataObj.length === fetchCollList.length) {
                    setData(dataObj)
                    setLoading(false)
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
export default useFetchList
