import {ListRenderItemInfo, Text, View} from "react-native";
import React from "react";
import {IndexDataCollection} from "../Hooks/useIndexCall";

const BookText = ({item: {id, data}}: ListRenderItemInfo<IndexDataCollection>) => {
    const text = `${id} - ${data?.schema?.sectionNames[0]}s : ${data?.schema?.lengths[0]}`
    return (
        <View style={{backgroundColor: 'red'}}>
            <Text>{text}</Text>
        </View>
    )
}

export default BookText
