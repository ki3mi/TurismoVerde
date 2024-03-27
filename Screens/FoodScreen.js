import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, Image, Modal, Pressable } from "react-native";
import ModalDetail from "../components/ModalDetails";

const FoodScreen = () => {

    const Content = {title: "Platos", message: "plato"}
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

    const openModal = (item) => {
        setSelectedItem(item)
    }

    const closeModal = () => {
        setSelectedItem(null)
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => openModal(item)}>
            <Text style={styles.text}>{item.name}</Text>
            <Image style={styles.image} source={{ uri: item.img }} />
        </TouchableOpacity>
    );

    return (
        <View style={styles.body}>
                <Text style={styles.header}>{Content.title}</Text>

                {/* Lista */}
                <FlatList
                    data={comida}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />

            {/* Modal para mostrar detalles */}
            <ModalDetail selectedItem={selectedItem} closeModal={closeModal} message={Content.message}/>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        paddingTop:40,
        paddingBottom:60
    },
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
});

export default FoodScreen;
