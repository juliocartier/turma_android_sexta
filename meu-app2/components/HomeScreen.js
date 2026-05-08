import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import Pagina from "./Pagina";

function HomeScreen ({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Tela Principal</Text>
            <Pagina />
            <Button
                title="Ir para a tela de Perfil"
                onPress={() => navigation.navigate("Perfil_Teste")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default HomeScreen;