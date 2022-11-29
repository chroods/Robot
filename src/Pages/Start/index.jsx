import React from "react";
import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import DefaultButtom from "../../components/common/defaultButton";
import LifeStatus from "../../components/common/lifeStatus";
import { useNavigation } from "@react-navigation/native";

export default function Start(){
    const handleNavAppExplation = ()=>{
        console.log("Testando o Click")
    }
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{alignItems: "center"}}>
                    <Image source={require("../../assets/icons/logo3.png")}
                    style={styles.logo} />
                    <LifeStatus />
                    <Text style={styles.descrition}>
                        Vamos Transforma sua vida {"\n"} em jogo, buscando sempre o melhor jogo
                    </Text>
                    <DefaultButtom  
                        buttonText={"Continuar"}
                        handlePres={handleNavAppExplation}
                        width={250}
                        height={50}
                    />
                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "rgba(21,21,21,0.98)",
    },

    logo:{
        width: 300,
        height: 60,
        marginTop: 60,
        marginBottom: 20,
    },

    descrition:{
        color: "#ffffff",
        fontSize: 20,
        textAlign: "center",
        marginVertical: 60,
    }
})