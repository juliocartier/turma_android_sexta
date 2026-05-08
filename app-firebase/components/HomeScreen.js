import React from "react";
import { View, Text, Button } from "react-native";
import { autenticacao } from "../database/firebase";
import { signOut } from "firebase/auth";

function HomeScreen({ navigation }){
    const logout = () => {
        signOut(autenticacao)
        .then(() => navigation.navigate("Login"))
    }

    return(
        <View style={{ padding: 20}}>
            <Text>Bem vindo ao nosso app!! ¬¬</Text>
            <Button title="Sair" onPress={logout}/>
        </View>
    )
}

export default HomeScreen;