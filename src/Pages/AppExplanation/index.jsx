import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native-gesture-handler";
import DefaultButtom from "../../components/common/defaultButton";

export default function AppExplanation(){
    function handleSetShowHome(){
        console.log("outra pagin")
    }
    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={{alignItens: "center"}}>
                    <Text style={styles.title}>
                        Antes, deixa {"\n"} eu te explicar...
                    </Text>
                    <Text style={styles.descriptionCta}>
                        Pronto(a) para subir na vida ?
                    </Text>

                    <Text style={styles.description}>
                        Na proxima tela você vai poder escolher {"\n"} 
                        seus 4 hábitos de forma individual.
                    </Text>

                    <DefaultButtom 
                        buttonText={"Continuar"}
                        handlePres={handleSetShowHome}
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
        backgroundColor: "rgba(21,21,21,0.98)"
    },
    title:{
        fontSize:30,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginVertical:40,
    },
    descriptionCta:{
        color:"white",
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 20,
        marginBottom: 10,
    },
    description:{
        color: "white",
    },
    button:{
        alignItems:"center",
        justifyContent: "center",
        borderWidth:1,
        borderColor: "#FFFFFF",
        borderRadius:10,
        marginBottom:20,
    },
    buttonText:{
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 20,
    }
})