import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import PaginaDois from "./Pagina_Dois";

function PerfilScreen() {
    return (
        <View style={styles.container}>
            <Text>Perfil Screen</Text>
            <Text>Seja bem-vindo</Text>
            <PaginaDois />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default PerfilScreen;