import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242A32',
        overflow: "scroll",
    },
    headerContent: {
        padding: 20,
    },
    headerText: {
        marginTop: 30,
        fontSize: 25,
        lineHeight: 40,
        color: "#FFF",
        textAlign: "center",
    },
    containerInput: {
        backgroundColor: "#67686D",
        height: 35,
        borderRadius: 18,
        marginTop: 20,
        paddingHorizontal: 10,
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    input: {
        flex: 1,
        color: "#FFF",
        width: "60%",
        paddingLeft: 16,
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