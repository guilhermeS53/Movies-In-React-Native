import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242A32',
        overflow: "scroll",
    },
    headerContent: {
        padding: 25,
    },
    headerText: {
        marginTop: 5,
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
        marginBottom: 0,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    input: {
        flex: 1,
        color: "#FFF",
        width: "50%",
        paddingLeft: 10,
    },
    noResult: {
        color: "#FFF",
        fontSize: 18,
        textAlign: "center",
        marginVertical: 10,
    },
    flatList: {
        alignItems: "center",
        justifyContent: "center",
    }
});