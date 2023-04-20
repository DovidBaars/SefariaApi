import React from "react";
import {StatusBar, StyleSheet, Text, View} from "react-native";

import colors from "../colors";

const Header = () => {
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle={'dark-content'} backgroundColor={colors.header}
            />
            <Text style={styles.headerText}>SefariaAPI</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: colors.header,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    headerText: {
        color: colors.text,
        fontSize: 30,
        fontWeight: '300',
        fontFamily: 'monospace',
    }
})

export default Header
