import React from "react";
import {FlatList, View} from "react-native";
import useIndexCall from "../Hooks/useIndexCall";
import BookText from "./BookText";

const Main = () => {
    const {data, loading} = useIndexCall()
    return (
        <View>
            {
                !loading && (
                    <FlatList data={data} keyExtractor={({id}) => id} renderItem={BookText}/>
                )
            }
        </View>
    )
}
export default Main
