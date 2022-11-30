import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function CreateHabit({habitAre, borderColor}){
    function handleCreate(){
        console.log(`Botão da area licado ${habitAre}`)
    }

    return(
        <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.button, {borderColor: borderColor}]}
            onPress={handleCreate}
        >
            <Text style={styles.habitTitle}>
                Adiionar meta {habitAre === "Mente" ? "da" : "do"} {habitAre}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        width: 315,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 2,
        borderStyle: "dotted",
        borderColor: "white",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    habitTitle:{
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    }
})