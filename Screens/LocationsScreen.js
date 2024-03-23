import react from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";


const LocationScreen = () => {
    const navigation = useNavigation();

    const paises = [
        { name: "Perú", precio: 120 },
        { name: "Mexico", precio: 100 },
        { name: "Colombia", precio: 110 },
        { name: "Argentina", precio: 130 },
        { name: "Uruguay", precio: 140 }
    ];

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.header}>{item.name}</Text>
            <Text style={styles.text}>Precio: S/.{item.precio}</Text>
        </View>
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
                <FlatList
                    data={paises}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />

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
    }
});

export default LocationScreen;