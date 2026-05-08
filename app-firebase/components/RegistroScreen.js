import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { sendEmailVerification } from "firebase/auth";
import { autenticacao } from "../database/firebase";

function RegistroScreen ({ navigation }){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const registrarUsuario = () => {
        createUserWithEmailAndPassword(autenticacao, email, senha)
        .then(() => {
            sendEmailVerification(autenticacao.currentUser);
            console.log("Usuario criado com sucesso!!")
        })
        .catch(erro => {
            console.error("Erro", erro.message);
        })
    }

    return (
        <View style={{ padding: 20 }}>
            <Text>Cadastro de Usuario</Text>
            <TextInput placeholder="Email" onChangeText={setEmail} value={email}/>
            <TextInput placeholder="Senha" secureTextEntry onChangeText={setSenha} value={senha}/>
            <Button title="Cadastrar Usuario" onPress={registrarUsuario}/>
        </View>
    )

}

export default RegistroScreen;