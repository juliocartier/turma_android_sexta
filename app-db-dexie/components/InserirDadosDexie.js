import React, { useState, useEffect } from "react";
import { View, TextInput, Button, Text, FlatList } from "react-native";
import db from "../database/database";

const InserirDadosDexie = () => {

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        carregarDados();
    }, [])

    const addUsuario = async() => {
        await db.users.add({ nome, idade: parseInt(idade)});
        setNome('');
        setIdade('');
        carregarDados();
    };

    const carregarDados = async() => {
        const todosUsuarios = await db.users.toArray();
        setUsuarios(todosUsuarios)
    }

    return (
        <View>
            <TextInput
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
                style={{ borderWidth: 1, marginBottom: 10 }}
            />

            <TextInput
                placeholder="Idade"
                value={idade}
                onChangeText={setIdade}
                style={{ borderWidth: 1, marginBottom: 10 }}
            />
            <Button title="Adicionar Usuario" onPress={addUsuario}/>

            <FlatList
                data={usuarios}
                keyExtractor={(item) => item.id.toString()}
                renderItem={ ({item}) => (
                    <Text> Nome: {item.nome}, {item.idade} anos</Text>
                )
              
            }
            />

        </View>
    )

}

export default InserirDadosDexie;