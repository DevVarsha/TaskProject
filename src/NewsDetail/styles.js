import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#1fb18a',
        flexDirection: 'row',
        paddingVertical: 20,
        alignItems: 'center',
        paddingHorizontal: 12
    },
    headerText: {
        fontSize: 20,
        fontWeight: '600',
    },
    img: {
        width: '100%',
        height: 200
    },
    box: {
        paddingHorizontal: 12
    },
    title: {
        color: '#83878a',
        fontSize: 20,
        fontWeight: '600',
        marginTop: 25
    },
    author: {
        fontSize: 16,
        fontWeight: '500',
        color: '#83878a',
        marginTop: 25
    }
})

export default styles;