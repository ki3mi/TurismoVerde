import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, ImageBackground, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";


const LocationScreen = () => {
    const navigation = useNavigation();

    const paises = [
        { name: "Perú", precio: 120, imglink:"https://www.peru.travel/contenido/acercadeperu/imagen/es/1/0.0/principal/machu%20picchu.jpg" },
        { name: "Mexico", precio: 100, imglink:"https://elcomercio.pe/resizer/ZWOVmzl0_-TfYS79fw5YEbzbgxc=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/CZGEWMPOLNCVNK2I3A6RNW63PQ.jpg" },
        { name: "Colombia", precio: 110, imglink: "https://www.semana.com/resizer/JAPQOHfS7Qtfsq0dtu5z0hW0Y3k=/1280x0/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/BKALMBZ44JFANIN2VMGAD5XKI4.jpg" },
        { name: "Argentina", precio: 130, imglink: "https://e.rpp-noticias.io/xlarge/2023/08/18/481648_1464895.webp" },
        { name: "Uruguay", precio: 140, imglink: "https://humanidades.com/wp-content/uploads/2018/07/uruguay-1-e1573265526917.jpg" }
    ];
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => alert(item.name)}>
            <Text style={styles.header}>{item.name}</Text>
            <Text style={styles.text}>Precio: S/.{item.precio}</Text>
            <Image style={styles.image} source={{uri: item.imglink}}/>
        </TouchableOpacity>
    );

    return (
        <View>
            <ScrollView>
                <Text
                    style={{
                        fontSize: 30,
                        textAlign: "center",
                        marginTop: "20%"
                    }}
                >
                    Lugares
                </Text>

                {/* Listar aquí */}
                <ScrollView>
                    <FlatList
                    data={paises}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    />
                </ScrollView>
                

                <TouchableOpacity
                    onPress={() => navigation.navigate("Precios")}
                    style={styles.bottom}
                >
                    <Text
                        style={{
                            color: "white",
                            textAlign: "center",
                            fontSize: 15
                        }}
                    >
                        Ver más paises
                    </Text>
                </TouchableOpacity>

            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        borderWidth: 1,
        borderColor: 'gray',
        marginVertical: 5,
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 5,
    },
    header: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
    },
    bottom: {
        backgroundColor: "blue",
        padding: 10,
        marginVertical: "5%",
        width: "50%",
        alignSelf: "center",
        borderRadius: 10
    },
    image: {
        width: "100%",
        objectFit: "cover",
        height: 100
    }
});

export default LocationScreen;