import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#1F1C2C", "#928DAB"]
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#4CA1AF", "#C4E0E5"]
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#314755", "#26a0da"]
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#BE93C5", "#7BC6CC"]
    },
    Atmosphere: {
        iconName: "weather-cloudy-alert",
        gradient: ["#3E5151", "#DECBA4"]
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF4E50", "#F9D423"]
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#636FA4", "#E8CBC0"]
    },
    Mist: {
        iconName: "weather-cloudy-alert",
        gradient: ["#3E5151", "#DECBA4"]
    },
    Smoke: {
        iconName: "weather-cloudy-alert",
        gradient: ["#3E5151", "#DECBA4"]
    },
    Haze: {
        iconName: "weather-cloudy-alert",
        gradient: ["#3E5151", "#DECBA4"]
    },
    Dust: {
        iconName: "weather-cloudy-alert",
        gradient: ["#3E5151", "#DECBA4"]
    },
    Fog: {
        iconName: "weather-cloudy-alert",
        gradient: ["#3E5151", "#DECBA4"]
    },
    Sand: {
        iconName: "weather-cloudy-alert",
        gradient: ["#3E5151", "#DECBA4"]
    },
    Ash: {
        iconName: "weather-cloudy-alert",
        gradient: ["#3E5151", "#DECBA4"]
    },
    Squall: {
        iconName: "weather-pouring",
        gradient: ["#3E5151", "#DECBA4"]
    },
    Tornado: {
        iconName: "weather-tornado",
        gradient: ["#274046", "#E6DADA"]
    },
};

export default function Weather({ temp, condition }) {
    console.log(condition);
    
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />

            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    size={100}
                    name={weatherOptions[condition].iconName}
                    color="white"
                />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.halfContainer} />
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});