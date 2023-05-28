import { View, Text, TextInput, FlatList } from "react-native";
import { styles } from "./styles";
import { MagnifyingGlass } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { api } from "./services/api";
import { CardMovies } from "./components/CardMovies";

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
}

export function Home() {
    const [discoverMovies, setDiscoverMovies] = useState<Movie[]>([]);

    useEffect(() => {
        loadingMoreData();
    }, []);

    const loadingMoreData = async () => {
        const response = await api.get("/movie/popular");
        setDiscoverMovies(response.data.results);
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContent}>
                <Text style={styles.headerText}>O que você quer ver hoje?</Text>
                <View style={styles.containerInput}>

                    <TextInput placeholderTextColor="#FFF"
                        placeholder="Pesquisar" style={styles.input} />
                    <MagnifyingGlass color="#FFF" size={25} weight="light" />
                </View>
            </View>

            <View>
                <FlatList
                    data={discoverMovies}
                    numColumns={3}
                    renderItem={(item) =>
                        <CardMovies data={item.item} />
                    }
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        padding: 30,
                        paddingBottom: 20,
                    }}
                />
            </View>
        </View>
    )
}