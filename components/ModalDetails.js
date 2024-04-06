import { View, Modal, Text, Image, Pressable, StyleSheet } from "react-native"

const ModalDetail = ({ selectedItem, closeModal, message }) => {

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={!!selectedItem}
                onRequestClose={closeModal}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {selectedItem && (
                            <>
                                <Text style={styles.modalText}>{selectedItem.title}</Text>
                                <Image style={styles.modalImage} source={{ uri: selectedItem.img }} />
                                <Text style={styles.modalDetail}>{selectedItem.description}</Text>
                                <Text style={styles.modalText}>S/. {selectedItem.price}</Text>
                                <View style={styles.buttonContainer}>
                                    <Pressable
                                        style={StyleSheet.compose(styles.button, styles.buttonPay)}
                                        onPress={() => alert(`El moto del ${message} es: S/. ${selectedItem.price}`)}
                                    >
                                        <Text style={styles.textStyle}>Comprar</Text>
                                    </Pressable>
                                    <Pressable
                                        style={StyleSheet.compose(styles.button, styles.buttonClose)}
                                        onPress={closeModal}
                                    >
                                        <Text style={styles.textStyle}>Cerrar</Text>
                                    </Pressable>
                                </View>
                            </>
                        )}
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        paddingVertical: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        width: "100%",
        maxHeight: 40
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginHorizontal: 4,
    },
    buttonClose: {
        backgroundColor: '#F194FF',
    },
    buttonPay: {
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
        marginHorizontal:20,
        fontSize: 20,
        fontWeight: 'normal',
        textAlign: 'justify'
    },
    modalImage: {
        width: 300,
        height: 200,
        objectFit: "cover",
        borderRadius:20
    }
})

export default ModalDetail