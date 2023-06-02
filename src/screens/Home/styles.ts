import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242A32',
        paddingHorizontal: 10,
    },
    headerContent: {
        paddingVertical: 25,
    },
    headerText: {
        fontSize: 25,
        lineHeight: 30,
        color: "#FFF",
        textAlign: "center",
        fontWeight: "bold",
    },
    containerInput: {
        backgroundColor: "#67686D",
        height: 36,
        borderRadius: 16,
        marginTop: 20,
        paddingHorizontal: 10,
        marginBottom: -25,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    input: {
        flex: 1,
        color: "#FFF",
        paddingHorizontal: 10,
    },
    noResult: {
        color: "#FFF",
        fontSize: 18,
        textAlign: "center",
        marginVertical: 10,
    },
    flatList: {
        flex: 1,
    },
    flatListContent: {
        alignSelf: 'center',
        paddingVertical: 30,
        paddingHorizontal: 5,
    },
});