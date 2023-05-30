import { View, Text, TextInput, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import { styles } from "./styles";
import { MagnifyingGlass } from "phosphor-react-native";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { CardMovies } from "../../components/CardMovies";
import { useNavigation } from '@react-navigation/native';

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
}

export function Home() {
    const [discoverMovies, setDiscoverMovies] = useState<Movie[]>([]);
    const [searchResultMovies, setSearchResultMovies] = useState<Movie[]>([]);
    const [noResult, setNoResult] = useState(false);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [reachedEnd, setReachedEnd] = useState(false);

    useEffect(() => {
        loadingMoreData();
    }, []);

    const loadingMoreData = async () => {
        if (!loading && !reachedEnd) {
            setLoading(true);
            const response = await api.get("/movie/popular", {
                params: {
                    page,
                },
            });

            if (response.data.results.length === 0) {
                setReachedEnd(true);
            } else {
                setDiscoverMovies([...discoverMovies, ...response.data.results]);
                setPage(page + 1);
            }
            setLoading(false);
        }
    };

    const searchMovies = async (query: string) => {
        setLoading(true);
        const response = await api.get("/search/movie", {
            params: {
                query,
            },
        });

        if (response.data.results.length === 0) {
            setNoResult(true);
        } else {
            setSearchResultMovies(response.data.results);
        }
        setLoading(false);
    };

    const handleSearch = (text: string) => {
        setSearch(text);
        if (text.length > 2) {
            searchMovies(text);
        } else {
            setSearchResultMovies([]);
        }
    };

    const movieData = search.length > 2 ? searchResultMovies : discoverMovies;

    return (
        <View style={styles.container}>
            <View style={styles.headerContent}>
                <Text style={styles.headerText}>O que você quer ver hoje?</Text>
                <View style={styles.containerInput}>

                    <TextInput placeholderTextColor="#FFF"
                        placeholder="Pesquisar" style={styles.input}
                        value={search}
                        onChangeText={handleSearch}
                    />
                    <MagnifyingGlass color="#FFF" size={25} weight="light" />
                </View>

                {noResult && (
                    <Text style={styles.noResult}>Nenhum filme encontrado por "{search}"</Text>)}
            </View>

            <View style={styles.flatList}>
                <FlatList
                    data={movieData}
                    numColumns={3}
                    renderItem={(item) =>
                        <CardMovies data={item.item} />
                    }
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={{
                        padding: 30,
                        paddingBottom: 20,
                    }}
                    onEndReached={() => loadingMoreData()
                    }
                    onEndReachedThreshold={0.5}
                />
                {loading && <ActivityIndicator size={50} color="#0296E5" />}
            </View>
        </View>
    )
}