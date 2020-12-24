import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#1F1C2C", "#928DAB"],
        title: "Thunderstorm",
        subtitle: "You'd better stay at home."
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#4CA1AF", "#C4E0E5"],
        title: "Drizzle",
        subtitle: "Take your umbrella."
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#314755", "#bdc3c7"],
        title: "It's raining.",
        subtitle: "Take your umbrella."
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#BE93C5", "#7BC6CC"],
        title: "It's snowing.",
        subtitle: "It could be slippery outside.\nBe careful."
    },
    Atmosphere: {
        iconName: "weather-cloudy-alert",
        gradient: ["#3E5151", "#DECBA4"],
        title: "Atmosphere",
        subtitle: ""
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#f7797d", "#FBD786", "#22c1c3"],
        title: "Clear",
        subtitle: "How about going out for a walk?"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#636FA4", "#E8CBC0"],
        title: "Cloudy",
        subtitle: ""
    },
    Mist: {
        iconName: "weather-cloudy-alert",
        gradient: ["#3E5151", "#DECBA4"],
        title: "Mist",
        subtitle: "Drive carefully."
    },
    Smoke: {
        iconName: "weather-cloudy-alert",
        gradient: ["#3E5151", "#DECBA4"],
        title: "Smoke",
        subtitle: ""
    },
    Haze: {
        iconName: "weather-cloudy-alert",
        gradient: ["#3E5151", "#DECBA4"],
        title: "Haze",
        subtitle: "Drive carefully."
    },
    Dust: {
        iconName: "weather-cloudy-alert",
        gradient: ["#3E5151", "#DECBA4"],
        title: "Dust",
        subtitle: "Refrain from outdoor activity."
    },
    Fog: {
        iconName: "weather-cloudy-alert",
        gradient: ["#3E5151", "#DECBA4"],
        title: "Fog",
        subtitle: "Drive carefully."
    },
    Sand: {
        iconName: "weather-cloudy-alert",
        gradient: ["#3E5151", "#DECBA4"],
        title: "Sand",
        subtitle: ""
    },
    Ash: {
        iconName: "weather-cloudy-alert",
        gradient: ["#3E5151", "#DECBA4"],
        title: "Ash",
        subtitle: ""
    },
    Squall: {
        iconName: "weather-windy",
        gradient: ["#3E5151", "#DECBA4"],
        title: "Squall",
        subtitle: ""
    },
    Tornado: {
        iconName: "weather-tornado",
        gradient: ["#274046", "#E6DADA"],
        title: "Tornado",
        subtitle: "Be careful and stay at home."
    },
};

export default function Weather({ temp, condition }) {
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
            <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
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
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
        textAlign: "left"
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24,
        textAlign: "left"
    },
    textContainer: {
        paddingHorizontal: 40,
        alignItems: "flex-start",
        justifyContent: "center",
        flex: 1
    }
});