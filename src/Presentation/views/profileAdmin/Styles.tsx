import { StyleSheet } from "react-native";

const AdminInfoStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    info: {
        alignItems: "flex-start",
        width: '80%',
        height: '25%'
    },
    body: {
        flexDirection: 'row',
        margin: 15
    },
    images: {
        width: 35,
        height: 35,
    },
    text: {
        fontSize: 14,
        fontStyle: "italic",
        color: '#000',
        textAlign: 'center'
    }
})

export default AdminInfoStyle