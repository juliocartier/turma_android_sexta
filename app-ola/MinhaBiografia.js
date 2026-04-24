import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

function MinhaBiografia() {

    return (
        <View style={styles.textoCentralizado}>
            <Text style={styles.tamanhoFonte16}>Me chamo Julio Cartier</Text>
            <Text>Sou Desenvolvedor/Professor</Text>
            <Text>Tenho conhecimento em algumas linguagens</Text>
            <Button title="Clique" onPress={ () => alert("Clicou no Botao")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    textoCentralizado: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tamanhoFonte16: {
        fontSize: 16,
        color: "#004e31"
    }
})

export default MinhaBiografia;