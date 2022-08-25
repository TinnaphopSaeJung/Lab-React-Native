import React, { useEffect, useState } from "react";
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

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=b7e0517b1e3e089978e65a7026e094e9`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])
    
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
