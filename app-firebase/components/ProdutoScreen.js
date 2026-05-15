import React, { useState, useEffect } from "react";
import { View, TextInput, Button, FlatList, Text } from "react-native";
import { collection, doc, addDoc, getDocs, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../database/firebase";

function ProdutoScreen(){
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [produtos, setProdutos] = useState([]);
    const [editarId, setEditarId] = useState(null);

    useEffect(() => {
        listarProdutos()
    }, [])

    const salvarProduto = async () => {
        if (editarId){
            await updateDoc(doc(db, 'produtos', editarId), {nome, preco: Number(preco)});
            setEditarId(null);
        } else {
            await addDoc(collection(db, "produtos"),{nome, preco: Number(preco)})
        }
        setNome('');
        setPreco('');
        listarProdutos();
    }

    const listarProdutos = async () => {
        const dadosProdutos = await getDocs(collection(db, 'produtos'));
        const lista_de_produtos = dadosProdutos.docs.map(doc => ({ id: doc.id, ...doc.data()}));
        setProdutos(lista_de_produtos);
    }

    const editarProduto = (produto) => {
        setNome(produto.nome);
        setPreco(produto.preco.toString());
        setEditarId(produto.id);
    }

    const deletarProduto = async (id) => {
        await deleteDoc(doc(db, 'produtos', id));
        listarProdutos();
    }

    return (
        <View style={{ padding: 20 }}>
            <TextInput placeholder="Nome do Produto"
                value={nome}
                onChangeText={setNome}
                style={{ borderBottomWidth: 1 }}
            />

            <TextInput placeholder="Preco"
                value={preco}
                onChangeText={setPreco}
                style={{ borderBottomWidth: 1, marginBottom: 10 }}
            />

            <Button
                title={editarId ? "Atualizar Produto" : "Salvar Produto"}
                onPress={salvarProduto}
            />

            <Text>Lista de Produtos</Text>
            <FlatList
                data={produtos}
                keyExtractor={(item) => item.id}
                renderItem={ ({ item }) => (
                    <View style={{ marginVertical: 10}}>
                        <Text> {item.nome} - R${item.preco} </Text>
                        <Button title="Editar" onPress={() => editarProduto(item)}/>
                        <Button title="Deletar" onPress={() => deletarProduto(item.id)} color="red"/>
                    </View>
                )}
            />

        </View>
    );
 }

export default ProdutoScreen;