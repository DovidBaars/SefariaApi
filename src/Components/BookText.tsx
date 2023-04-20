import {FlatList, ListRenderItemInfo, StyleSheet, Text, View} from "react-native";
import React from "react";
import useIndexCall, {IndexDataCollection} from "../Hooks/useIndexCall";
import colors from "../colors";
import Separator from "./Separator";

const BookText = () => {
    const {data, loading} = useIndexCall()
    const line = ({item: {id, data}}: ListRenderItemInfo<IndexDataCollection>) => {
        const text = `${id} - ${data?.schema?.sectionNames[0]}s : ${data?.schema?.lengths[0]}`
        return <Text style={styles.lineContainer}>{text}</Text>
    }

   return !loading ? (
         <FlatList
             ItemSeparatorComponent={Separator}
             style={styles.container}
             data={data}
             keyExtractor={({id}) => id}
             renderItem={line}
         />
    ) : null
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    lineContainer: {
        backgroundColor: colors.header,
        padding: 10,
        color: colors.text,
        fontSize: 20,
    },
})

export default BookText
