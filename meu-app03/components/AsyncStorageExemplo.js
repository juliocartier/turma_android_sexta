import React, { useState } from 'react';
import { View, Button, Text, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function AsyncStorageExemplo (){

    const [valor, setValor] = useState('');
    const [storageValue, setStorageValue] = useState('');
    const [contador, setContador] = useState(0);
    const [contadorDec, setContadorDec] = useState(0);

    const storageData = async() => {
        setContador(contador + 1);
        console.log(contador);
        try {
            await AsyncStorage.setItem("NovoDado_"+contador, valor);
        } catch (erro) {
            console.error("Falha ao salvar o dado");
        }
    };

    const recuperarDado = async () => {
        try {
            setContadorDec(contador - 1);
            console.log(contadorDec);
            const dado = await AsyncStorage.getItem('NovoDado_'+contadorDec);
            if (dado != null){
                setStorageValue(dado);
            }
        } catch (erro) {
            console.error("Erro ao recuperar o dado");
        }
    }

    return (
        <View>
            <TextInput
                placeholder='Entre com um valor'
                value={valor}
                onChangeText={setValor}
                style={{borderWidth: 1, marginBottom: 10}}
            />
            <Button title='Salvar Dado' onPress={storageData}/>
            <Button title='Recuperar Dado' onPress={recuperarDado}/>
            <Text>Dado Recuperado: {storageValue} </Text>
        </View>
    );
}

export default AsyncStorageExemplo;