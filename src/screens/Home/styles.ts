import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242A32',
        padding: 30,
    },
    headerText: {
        marginTop: 30,
        fontSize: 25,
        lineHeight: 40,
        color: "#FFF",
    },
    containerInput: {
        backgroundColor: "#67686D",
        height: 42,
        borderRadius: 18,
        marginTop: 25,
        padding: 10,
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    input: {
        color: "#FFF",
        width: "80%",
        paddingLeft: 16,
    }
});