import { StyleSheet } from "react-native";

const AdminCategoryUpdateStyle = StyleSheet.create({
    container: {
        flex: 1,
        /*         backgroundColor: 'black', */
    },
    form: {
        width: '100%',
        height: '65%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30,
    },
    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '5%',
        alignItems: 'center',
    },
    logoImage: {
        width: '140%',
        height: '300%',
    },
    logoText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 22,
        marginTop: 10,
        fontWeight: 'bold',
    },
    boton: {
        top: 30
    }
})

export default AdminCategoryUpdateStyle