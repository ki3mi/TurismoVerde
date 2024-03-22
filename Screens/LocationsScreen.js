import react from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";


const LocationSceen = () => {
    const navigation = useNavigation()

    return (
        <View>
            <Text
                style={{ 
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%"
                 }}
            >
                Lugares
            </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Precios")}
                style={{ 
                    backgroundColor: "blue",
                    padding: 10,
                    marginTop: "20%",
                    width: "50%",
                    alignSelf: "center",
                    borderRadius: 10
                 }}
            >
                <Text
                    style={{ 
                        color: "white",
                        textAlign: "center",
                        fontSize: 15
                     }}
                >
                    Ver precios
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default LocationSceen;