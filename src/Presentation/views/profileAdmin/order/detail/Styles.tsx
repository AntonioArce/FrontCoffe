import { StyleSheet } from "react-native";
import { MyColors } from "../../../../theme/AppTheme";

const AdminOrderDetailStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    products: {
        width: '100%',
        height: '45%'
    },
    info: {
        width: '100%',
        height: '55%',
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 30
    },
    infoRow: {
        flexDirection: 'row',
        marginTop: 25
    },
    infoText: {
        flex: 1
    },
    infoImage: {
        width: 35,
        height: 35,
        top: 10
    },
    infoTitle: {
        color: 'black',
        fontSize: 25
    },
    infoDescription: {
        color: 'gray',
        fontSize: 20,
        marginTop: 3
    },
    deliveries: {
        fontWeight: 'bold',
        marginTop: 15,
        color: MyColors.primary
    },
    totalInfo: {
        marginTop: 180,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    total: {
        fontWeight: 'bold',
        fontSize: 17
    },
    button: {
        width: '60%'
    },
    dropDown: {
        marginTop: 20
    }
});

export default AdminOrderDetailStyles;