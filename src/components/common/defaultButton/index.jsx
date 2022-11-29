import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function DefaultButtom({
    buttonText,
    handlePres,
    width,
    height,
}){
    return (
        <TouchableOpacity style={[styles.button, {width:width, height: height}]}
            activeOpacity={0.7} onPress={handlePres}
        >
            <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        alignItems:"center",
        justifyContent: "center",
        borderWidth:1,
        borderColor: "#FFFFFF",
        borderRadius:10,
        marginBottom:20,
    },
    buttonText:{
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    }
})