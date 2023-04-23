import React from "react";
import {StyleSheet, View} from "react-native";
import BookText from "./BookText";
import colors from "../colors";
import {MAIN_ITEMS} from "../constants";
import SectionLengthRenderItem from "./SectionLengthRenderItem";

const Main = () => {
    return (
        <View style={styles.container}>
           <BookText books={MAIN_ITEMS} renderItem={SectionLengthRenderItem}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.alternative,
        height: '100%',
    },
})

export default Main
