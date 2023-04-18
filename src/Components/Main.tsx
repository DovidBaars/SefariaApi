import React from "react";
import {FlatList, ListRenderItemInfo, Text, View} from "react-native";
import useIndexCall, {IndexData} from "../Hooks/useIndexCall";
import {MainBookCategory} from "../models";

const Main = () => {
    const {data, loading} = useIndexCall()
    const mainListRender = ({item: {id, data}}: ListRenderItemInfo<IndexData>) => {
        let beef = `${id} `
        switch (id) {
            case MainBookCategory.Bereishit:
                beef = beef.concat(`- ${data?.schema?.sectionNames[0]}s : ${data?.schema?.lengths[0]}`)
                break
        }
        return (
                <View style={{backgroundColor: 'red'}}
                      children={<Text children={beef}/>}/>
            )

    }

    return <View>
        {loading ? null :  <FlatList data={data} keyExtractor={({id}) => id} renderItem={mainListRender}/>}
    </View>
}
export default Main
