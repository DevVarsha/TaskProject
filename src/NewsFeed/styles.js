import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        paddingVertical: 10,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    headerText: {
        fontSize: 20,
        fontWeight: '600',
    },
    containerImg: {
        flex: 1,
        margin: 8
    },
    bgImg: {
        height: 200,
        width: '100%',
        justifyContent: 'flex-end'
    },
    text: {
        paddingBottom: 8,
        paddingLeft: 16,
        color: '#fff',
        fontSize: 18
    },
    activity: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    input: {
        marginLeft: 10,
        borderWidth: 1,
        width: '100%',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20
    },
    feild: {
        flexDirection: 'row',
        paddingTop: 10,
        alignItems: 'center'
    },
    imgbgcolor: {
        flexDirection: 'column',
        backgroundColor: '#dfdfdf',
        borderRadius: 18
    }
})
export default styles;