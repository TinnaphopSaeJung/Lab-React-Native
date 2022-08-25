import React from "react";
import { View, Text } from "react-native-web";
import { StyleSheet } from "react-native";

export default function Forecast(props){
    return (
        <View style={styles.backdrop}>
            <Text style={styles.textMain_temp}>{props.main}</Text>
            <Text> </Text>
            <Text style={styles.textChallenge}>{props.description}</Text>
            <Text> </Text>
            <Text style={styles.textMain_temp}>{props.temp} °C</Text>

        </View>
        
    )
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    textChallenge: {
        fontSize: 15,
        fontWeight: "normal",
        color: '#ffff'
    },
    textMain_temp: {
        fontSize: 30,
        fontWeight: "normal",
        color: '#ffff'
    },

})