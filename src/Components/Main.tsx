import React from "react";
import {StyleSheet, View} from "react-native";
import BookText from "./BookText";
import colors from "../colors";

const Main = () => {
    return (
        <View style={styles.container}>
           <BookText/>
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
