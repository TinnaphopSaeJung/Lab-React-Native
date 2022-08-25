import React, { useState } from "react";
import { Text } from "react-native-web";
import Forecast from "./Forecast";
import { ImageBackground } from "react-native-web";
import { StyleSheet } from "react-native";

export default function Weather(props){
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })
    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <Text style={styles.textChallenge}>Zip Code is  {props.zipCode}.</Text>
            <Text> </Text>
            <Forecast {...forecastInfo}/>
        </ImageBackground>
       
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
    }
    
})
