import { useNavigation, useRoute } from "@react-navigation/native";
import { BookmarkSimple, CalendarBlank, CaretLeft, Clock, DotsThreeVertical, Star } from "phosphor-react-native";
import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MovieContext } from "../../context/MoviesContext";
import api from "../../services/api";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { styles } from "./styles";

type MovieDetails = {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    runtime: string;
    release_date: string;
    vote_average: number;
};

type RouterProps = {
    movieId: number;
};

export function Details() {
    const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
    const [loading, setLoading] = useState(false);
    const { addFavoriteMovie, removeFavoriteMovie, favoriteMovies } = useContext(
        MovieContext
    );

    const route = useRoute();
    const { movieId } = route.params as RouterProps;
    const navigation = useNavigation();

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                setLoading(true);
                const response = await api.get(`/movie/${movieId}`);
                setMovieDetails(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchMovieDetails();
    }, [movieId]);

    function getYear(date: string) {
        const year = new Date(date).getFullYear();
        return year;
    }

    if (!movieDetails) {
        return null;
    }

    const isMovieFavorite = favoriteMovies.includes(movieDetails.id);

    const toggleFavoriteMovie = () => {
        if (isMovieFavorite) {
            removeFavoriteMovie(movieDetails.id);
        } else {
            addFavoriteMovie(movieDetails.id);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <CaretLeft color="#fff" size={32} weight="thin" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Detalhes do Filme</Text>
                <TouchableOpacity onPress={toggleFavoriteMovie}>
                    <BookmarkSimple
                        color="#fff"
                        size={32}
                        weight={isMovieFavorite ? "fill" : "light"}
                    />
                </TouchableOpacity>
            </View>
            {loading && <ActivityIndicator size={50} color="#0296E5" />}
            {!loading && (
                <ScrollView>
                    <Image
                        source={{
                            uri: `https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`,
                        }}
                        style={styles.detailsImage}
                    />
                    <Image
                        source={{
                            uri: `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`,
                        }}
                        style={styles.detailsPosterImage}
                    />
                    <Text style={styles.stars}>{movieDetails.title}</Text>

                    <View style={styles.description}>
                        <View style={styles.descriptionGroup}>
                            <CalendarBlank color="#92929D" size={25} weight="thin" />
                            <Text style={styles.descriptionText}>
                                {getYear(movieDetails.release_date)}
                            </Text>
                        </View>
                        <DotsThreeVertical color="#92929D" size={32} weight="duotone" />
                        <View style={styles.descriptionGroup}>
                            <Clock color="#92929D" size={25} weight="thin" />
                            <Text style={styles.descriptionText}>
                                {movieDetails.runtime} Minutos
                            </Text>
                        </View>
                        <DotsThreeVertical color="#92929D" size={32} weight="duotone" />
                        <View style={styles.descriptionGroup}>
                            <Star
                                color={
                                    movieDetails.vote_average.toFixed(2) >= "7"
                                        ? "#FF8700"
                                        : "#92929D"
                                }
                                size={25}
                                weight={
                                    movieDetails.vote_average.toFixed(2) >= "7"
                                        ? "duotone"
                                        : "thin"
                                } />
                            <Text
                                style={[
                                    movieDetails.vote_average.toFixed(2) >= "7"
                                        ? styles.descriptionText1
                                        : styles.descriptionText,
                                ]}>
                                {movieDetails.vote_average.toFixed(1)}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.about}>
                        <Text style={styles.aboutText}>
                            {movieDetails.overview === ""
                                ? "Epa! Parece que esse filme ainda não tem sinopse :("
                                : movieDetails.overview}
                        </Text>
                    </View>
                </ScrollView>
            )}
        </View>
    );
}
