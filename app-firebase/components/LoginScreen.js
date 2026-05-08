import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { autenticacao } from "../database/firebase";

function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const loginUsuario = () => {
        signInWithEmailAndPassword(autenticacao, email, senha)
        .then(() => {
            navigation.navigate("Home");
        }).catch(erro => {
            console.error("Erro na pagina de login " + erro.message);
        })
    }

    const recuperarSenha = () => {
        sendPasswordResetEmail(autenticacao, email)
        .then(() => {
            console.log("Email enviado")
        }).catch(erro => {
            console.error("Falha ao enviar email de recuperacao" + erro.message);
        })
    }

    return(
        <View style={{ padding: 10}}>
            <Text>Login</Text>
            <TextInput placeholder="E-mail" onChangeText={setEmail} value={email}/>
            <TextInput placeholder="Senha"
            secureTextEntry 
            onChangeText={setSenha} 
            value={senha}/>
            <Button title="Login" onPress={loginUsuario}/>
            <Button title="Redefinir Senha" onPress={recuperarSenha}/>
            <Button title="Cadastra-se" onPress={() => navigation.navigate("Registrar")}/>
        </View>
    )

}

export default LoginScreen;