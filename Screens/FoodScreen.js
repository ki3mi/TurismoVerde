import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, Image, Modal, Pressable } from "react-native";

const FoodScreen = () => {

    const comida = [
        {
            id: 1,
            name: "Ceviche",
            precio: 30,
            img: "https://cdn0.recetasgratis.net/es/posts/7/4/1/ceviche_peruano_18147_600_square.jpg",
            detalle: "Plato tradicional peruano a base de pescado crudo marinado en limón, cebolla, ají y otros condimentos."
        },
        {
            id: 2,
            name: "Caucau",
            precio: 25,
            img: "https://peru.info/archivos/publicacion/96-imagen-15972012020.jpg",
            detalle: "Guiso típico de la gastronomía peruana que incluye papas, carne (generalmente mondongo), ají amarillo y otras especias."
        },
        {
            id: 3,
            name: "Anticucho",
            precio: 35,
            img: "https://www.comedera.com/wp-content/uploads/2022/03/Anticucho-shutterstock_185287433.jpg",
            detalle: "Brochetas de carne de res marinadas en una salsa de ají panca y especias, cocinadas a la parrilla."
        },
        {
            id: 4,
            name: "Pachamanca",
            precio: 35,
            img: "https://cdn0.recetasgratis.net/es/posts/0/1/7/pachamanca_a_la_olla_75710_orig.jpg",
            detalle: "Plato típico de la sierra peruana que consiste en cocinar carnes, papas y otros alimentos bajo tierra, utilizando piedras calientes."
        },
        {
            id: 5,
            name: "Lomo saltado",
            precio: 35,
            img: "https://i.ytimg.com/vi/sWXRJbGi6yQ/maxresdefault.jpg",
            detalle: "Plato emblemático de la gastronomía peruana que combina carne de res salteada con cebolla, tomate, ají amarillo y otros ingredientes, servido con arroz y papas fritas."
        }
    ];
    
    const [selectedItem, setSelectedItem] = useState(null); // Estado para almacenar el elemento seleccionado

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => setSelectedItem(item)}>
            <Text style={styles.text}>{item.name}</Text>
            <Image style={styles.image} source={{ uri: item.img }} />
        </TouchableOpacity>
    );

    return (
        <View>
                <Text style={styles.header}>Platos</Text>

                {/* Listar aquí */}
                <FlatList
                    data={comida}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />

            {/* Modal para mostrar detalles */}
            <Modal
                animationType="slide"
                transparent={false}
                visible={!!selectedItem}
                onRequestClose={() => setSelectedItem(null)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {selectedItem && (
                            <>
                                <Text style={styles.modalText}>{selectedItem.name}</Text>
                                <Image style={styles.modalImage} source={{ uri: selectedItem.img }} />
                                <Text style={styles.modalDetail}>{selectedItem.detalle}</Text>
                                <Text style={styles.modalText}>Precio: S/. {selectedItem.precio}</Text>
                                <Pressable
                                    style={[styles.button2, styles.buttonClose]}
                                    onPress={() => alert(`El monto del plato es: S/. ${selectedItem.precio}`)}
                                >
                                    <Text style={styles.textStyle}>Comprar</Text>
                                </Pressable>

                                <Pressable
                                    style={[styles.button2, styles.buttonClose]}
                                    onPress={() => setSelectedItem(null)}
                                >
                                    <Text style={styles.textStyle}>Cerrar</Text>
                                </Pressable>
                            </>
                        )}
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        marginVertical: 5,
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "white"
    },
    header: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 10
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        color: "black"
    },
    image: {
        width: "100%",
        height: 200,
        resizeMode: "cover"
    },
    modalImage: {
        width: 200,
        height: 200,
        objectFit: "cover"
    },
    button2: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginVertical: 10,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    modalDetail: {
        marginVertical: 15,
        fontSize: 20,
        fontWeight: 'normal',
        textAlign: 'justify'
    }
});

export default FoodScreen;
