import { StyleSheet } from "react-native"

const ClientShoppingBagStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    totalToPay: {
        flexDirection: 'row',
        height: 70,
        backgroundColor: '#f2f2f2',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 30
    },
    totalInfo: {
        alignItems: 'center'
    },
    totalText: {
        fontWeight: 'bold',
        fontSize: 17
    },
    buttonAdd: {
        width: '50%'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
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
    button: {
        borderRadius: 20,
        padding: 20,
        elevation: 2,
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
        fontSize: 20,
        textAlign: 'center',
    },
});

export default ClientShoppingBagStyles;