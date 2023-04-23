import {ListRenderItemInfo, StyleSheet, Text} from "react-native";
import {IndexDataCollection} from "../models";
import React from "react";
import colors from "../colors";

const SectionLengthRenderItem = ({item: {id, data}}: ListRenderItemInfo<IndexDataCollection>) => {
    const text = `${id} - ${data?.schema?.sectionNames[0]}s : ${data?.schema?.lengths[0]}`
    return <Text style={styles.lineContainer}>{text}</Text>
}

const styles = StyleSheet.create({
    lineContainer: {
        backgroundColor: colors.header,
        padding: 10,
        color: colors.text,
        fontSize: 20,
    },
})

export default SectionLengthRenderItem
