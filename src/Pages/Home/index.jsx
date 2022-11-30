import React, {useEffect, useState} from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import LifeStatus from "../../components/common/lifeStatus";
import StatusBar from "../../components/Home/StatusBar";
import CreateHabit from "../../components/Home/CreateHabit";
import EditHabit from "../../components/Home/EditHabit";

export default function Home(){
    const navigation = useNavigation();
    const [mindHabit, setMindHabit] = useState();
    const [moneyHabit, setMoneyHabit] = useState();
    const [bodyHabit, setBodyHabit] = useState();
    const [funHabit, setFunHabit] = useState();

    function handleNavExplanation(){
        navigation.navigate("AppExplanation");
    }
    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={{alignItems:"center"}}>
                    <Text style={styles.dailyChecks}>
                        ❤️ 20 dias - ✔️ 80 checks
                    </Text>
                    
                    <LifeStatus />
                    <StatusBar />

                    {mindHabit ? (
                        <EditHabit
                            habit={mindHabit?.habitName}
                            frequency={`${mindHabit?.habitTime} - ${mindHabit?.habitFrequency}`}
                            habitArea={mindHabit?.habitAre}
                            checkColor="#98b7f3"
                        />
                    ) : (
                        <CreateHabit habitAre="Mente" borderColor="#90b7f3" />
                    )}

                    {moneyHabit ? (
                        <EditHabit
                            habit={moneyHabit?.habitName}
                            frequency={`${moneyHabit?.habitTime} - ${moneyHabit?.habitFrequency}`}
                            habitArea={moneyHabit?.habitAre}
                            checkColor="#85bb65"
                        />
                    ) : (
                        <CreateHabit habitAre="Financeiro" borderColor="#85bb65" />
                    )}

                    {bodyHabit ? (
                        <EditHabit
                            habit={moneyHabit?.habitName}
                            frequency={`${bodyHabit?.habitTime} - ${bodyHabit?.habitFrequency}`}
                            habitArea={bodyHabit?.habitAre}
                            checkColor="#ff0044"
                        />
                    ) : (
                        <CreateHabit habitAre="Corpo" borderColor="#ff0044" />
                    )}
                    
                    {funHabit ? (
                        <EditHabit
                            habit={moneyHabit?.habitName}
                            frequency={`${funHabit?.habitTime} - ${funHabit?.habitFrequency}`}
                            habitArea={funHabit?.habitAre}
                            checkColor="#fe7f23"
                        />
                    ) : (
                        <CreateHabit habitAre="Humor" borderColor="#fe7f23" />
                    )}

                </View>
                <Text
                    style={styles.explanationText}
                    onPress={()=>{
                        handleNavExplanation();
                    }}
                >
                    Ver explicação novamente
                </Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "rgba(21,21,21,0.98)"
    },
    dailyChecks:{
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        margin: 40
    },
    explanationText:{
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 15,
        paddingBottom: 25,
    }
})