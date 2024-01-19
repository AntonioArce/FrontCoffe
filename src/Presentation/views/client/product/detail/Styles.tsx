import { StyleSheet } from "react-native"

const ClientProductDetailStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    productImage: {
        width: '100%',
        height: '60%'
    },
    productDetail: {
        position: 'absolute',
        width: '100%',
        height: '55%',
        backgroundColor: 'white',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderColor: 'black'
    },
    productInfo: {
        padding: 30,
        flex: 1
    },
    divider: {
        height: 1,
        backgroundColor: '#f2f2f2',
        marginTop: 15
    },
    name: {
        fontWeight: 'bold',
        fontSize: 25
    },
    descriptionTitle: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 18
    },
    descriptionContent: {
        fontSize: 18,
        marginTop: 5
    },
    productActions: {
        flexDirection: 'row',
        height: 70,
        backgroundColor: '#f2f2f2',
        paddingHorizontal: 30
    },
    actionLess: {
        backgroundColor: '#3a3a3a',
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignSelf: 'center',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10
    },
    actionAdd: {
        backgroundColor: '#3a3a3a',
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignSelf: 'center',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10
    },
    actionText: {
        color: 'white',
        fontSize: 20
    },
    quantity: {
        backgroundColor: '#3a3a3a',
        paddingVertical: 5,
        paddingHorizontal: 15,
        alignSelf: 'center',
    },
    buttonAdd: {
        flex: 1,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    back: {
        position: 'absolute',
        top: 45,
        left: 20,
    },
    backImage: {
        height: 35,
        width: 35
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
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
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 15,
        padding: 10,
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
        textAlign: 'center',
    },
});

export default ClientProductDetailStyles;