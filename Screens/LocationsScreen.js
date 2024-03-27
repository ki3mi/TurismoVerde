import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, Image, Modal, Pressable } from "react-native";
import ModalDetail from "../components/ModalDetails";


const LocationScreen = () => {
    const Content = {title: "Paises", message: "viaje"}
    const paises = [
        {
            id: 1,
            name: "Perú",
            precio: 1200,
            img: "https://www.peru.travel/contenido/acercadeperu/imagen/es/1/0.0/principal/machu%20picchu.jpg",
            detalle: "texto de ejemplo largo para una descripción detallada y relleno"
        },
        {
            id: 2,
            name: "Mexico",
            precio: 1000,
            img: "https://elcomercio.pe/resizer/ZWOVmzl0_-TfYS79fw5YEbzbgxc=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/CZGEWMPOLNCVNK2I3A6RNW63PQ.jpg",
            detalle: "texto de ejemplo largo para una descripción detallada y relleno"
        },
        {
            id: 3,
            name: "Colombia",
            precio: 1100,
            img: "https://www.semana.com/resizer/JAPQOHfS7Qtfsq0dtu5z0hW0Y3k=/1280x0/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/BKALMBZ44JFANIN2VMGAD5XKI4.jpg",
            detalle: "texto de ejemplo largo para una descripción detallada y relleno"
        },
        {
            id: 4,
            name: "Argentina",
            precio: 1300,
            img: "https://e.rpp-noticias.io/xlarge/2023/08/18/481648_1464895.webp",
            detalle: "texto de ejemplo largo para una descripción detallada y relleno"
        },
        {
            id: 5,
            name: "Uruguay",
            precio: 1400,
            img: "https://humanidades.com/wp-content/uploads/2018/07/uruguay-1-e1573265526917.jpg",
            detalle: "texto de ejemplo largo para una descripción detallada y relleno"
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
                    data={paises}
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

export default LocationScreen;