import React from "react";
import { Text, StyleSheet } from "react-native";

function AppPagina () {
    return (
        <Text style={styles.corTexto}>Olá Pessoal</Text>
    )
}

const styles = StyleSheet.create({
    corTexto: {
        color: '#ff8400',
        fontSize: 20,
    }
})

export default AppPagina;