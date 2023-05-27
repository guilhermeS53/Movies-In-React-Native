import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";
import { MagnifyingGlass } from "phosphor-react-native";

export function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>O que você quer ver hoje?</Text>
            <View style={styles.containerInput}>
                <TextInput placeholderTextColor="#FFF"
                placeholder="Pesquisar" style={styles.input} />
                <MagnifyingGlass color="#FFF" size={25} weight="light" />
            </View>
        </View>
    )
}