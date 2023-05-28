import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: "#0296E5",
    },
    headerText: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
    },
    detailsImage: {
        width: "100%",
        height: 200,
    },
    detailsPosterImage: {
        width: 120,
        height: 180,
        alignSelf: "center",
        marginTop: 16,
    },
    stars: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 16,
        alignSelf: "center",
    },
    description: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginVertical: 16,
    },
    descriptionGroup: {
        flexDirection: "row",
        alignItems: "center",
    },
    descriptionText: {
        marginLeft: 8,
        color: "#92929D",
        fontSize: 16,
    },
    descriptionText1: {
        marginLeft: 8,
        fontSize: 16,
        fontWeight: "bold",
    },
    about: {
        paddingHorizontal: 16,
        paddingBottom: 32,
    },
    aboutText: {
        fontSize: 16,
        color: "#92929D",
        lineHeight: 24,
    },
});