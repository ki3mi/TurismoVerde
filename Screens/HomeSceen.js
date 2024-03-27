import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView } from "react-native";

const HomeScreen = () => {
    const Content = {
        title: 'Turismos Verde',
        img: 'https://e0.pxfuel.com/wallpapers/312/1022/desktop-wallpaper-anime-scenery-anime-tree.jpg',
        mision: '"Nuestra misión en Turismo Verde es promover y facilitar experiencias turísticas sostenibles y auténticas en el hermoso y diverso entorno natural del Perú. Nos comprometemos a ofrecer servicios turísticos de alta calidad que respeten y valoren la riqueza cultural, histórica y medioambiental de nuestro país, al tiempo que contribuimos al desarrollo económico y social de las comunidades locales."',
        misionImg: 'https://viajes.nationalgeographic.com.es/medio/2018/03/01/machu-picchu_5ff969ae_1280x720.jpg',
        vision: '"Nos visualizamos como líderes en el turismo sostenible en el Perú, siendo reconocidos a nivel nacional e internacional por nuestra excelencia en la prestación de servicios turísticos que resaltan la belleza natural y cultural del país, al tiempo que promovemos prácticas responsables que protegen y conservan el medio ambiente para las generaciones futuras."',
        visionImg: 'https://elperuano.pe/fotografia/thumbnail/2023/07/25/000258222M.jpg',
        contactInfo: {
            address: "Dirección: Av. Ejemplo 123, Huancayo, Perú",
            phone: "Teléfono: +51 123 456 789",
            email: "Email: info@turismosverde.com"
        }
    }
    const Linea = () => {
        return (
            <View style={styles.line}></View>
        )
    }
    return (
        <View style={styles.body}>
            <ImageBackground source={{ uri: Content.img }} style={styles.portada}>
                <View style={styles.bg}>
                    <Text style={styles.title}>{Content.title}</Text>
                </View>
            </ImageBackground>
            {/* Line */}
            <Linea />
            <ScrollView style={styles.bloque}>
                <View style={styles.content}>
                    <Text style={styles.subTitle}>Misión</Text>
                    <Text style={styles.description}>{Content.mision}</Text>
                    <Image source={{ uri: Content.misionImg }} style={styles.portada} />
                </View>
                <View style={styles.content}>
                    <Text style={styles.subTitle}>Visión</Text>
                    <Text style={styles.description}>{Content.vision}</Text>
                    <Image source={{ uri: Content.visionImg }} style={styles.portada} />
                </View>
                <View style={styles.contactSection}>
                    <Linea />
                    <Text style={styles.subTitle}>Contacto</Text>
                    <Text style={styles.contactText}>{Content.contactInfo.address}</Text>
                    <Text style={styles.contactText}>{Content.contactInfo.phone}</Text>
                    <Text style={styles.contactText}>{Content.contactInfo.email}</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center'
    },
    bloque: {
        paddingHorizontal: 20
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        margin: '20%',
        color: 'white',
        fontWeight: 'bold'
    },
    subTitle: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 4,
        color: 'black',
        fontWeight: 'bold'
    },
    portada: {
        width: 'auto',
        height: 200,
        justifyContent: 'center'
    },
    bg: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: 200,
        flex: 1
    },
    line: {
        height: 2,
        width: '80%',
        backgroundColor: 'black',
        borderRadius: 20,
        marginVertical: 10
    },
    content: {
        marginVertical: 10
    },
    description: {
        textAlign: 'justify'
    },
    contactSection: {
        marginVertical: 20,
        alignItems: 'center'
    },
    contactText: {
        textAlign: 'center'
    }
})

export default HomeScreen;
