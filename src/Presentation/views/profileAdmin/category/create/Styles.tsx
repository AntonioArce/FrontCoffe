import { StyleSheet } from "react-native";

const CategoryStyle = StyleSheet.create({
    container: {
        flex: 1,
        /*         backgroundColor: 'black', */
    },
    form: {
        width: '100%',
        height: '68%',
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
        width: '60%',
        height: '200%',
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

export default CategoryStyle