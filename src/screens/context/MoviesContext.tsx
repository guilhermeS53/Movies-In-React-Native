import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../services/api";
import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";

type Movie = {
    id: number;
    title: string;
    poster_path: string;
    runtime: string;
    release_date: string;
    vote_average: number;
};

interface MovieContextData {
    favoriteMovies: number[];
    allFavoriteMovies: Movie[];
    addFavoriteMovie: (movieId: number) => void;
    removeFavoriteMovie: (movieId: number) => void;
}

export const MovieContext = createContext<MovieContextData>({
    favoriteMovies: [],
    allFavoriteMovies: [],
    addFavoriteMovie: () => { },
    removeFavoriteMovie: () => { },
});

type MovieProviderProps = {
    children: ReactNode;
};

export const MovieProvider = ({ children }: MovieProviderProps) => {
    const [favoriteMovies, setFavoriteMovies] = useState<number[]>([]);
    const [allFavoriteMovies, setAllFavoriteMovies] = useState<Movie[]>([]);

    useEffect(() => {
        async function loadFavoriteMovies() {
            const favoriteMovies = await AsyncStorage.getItem("@FavoriteMovies");
            if (favoriteMovies) {
                setFavoriteMovies(JSON.parse(favoriteMovies));
            }
        }
        loadFavoriteMovies();
    }, []);

    const addFavoriteMovie = useCallback(
        async (movieId: number) => {
            if (!favoriteMovies.includes(movieId)) {
                const newFavoriteMovies = [...favoriteMovies, movieId];
                setFavoriteMovies(newFavoriteMovies);
                await AsyncStorage.setItem(
                    "@FavoriteMovies",
                    JSON.stringify(newFavoriteMovies)
                );
            }
        },
        [favoriteMovies]
    );

    const removeFavoriteMovie = useCallback(
        async (movieId: number) => {
            const newFavoriteMovies = favoriteMovies.filter((id) => id !== movieId);
            setFavoriteMovies(newFavoriteMovies);
            await AsyncStorage.setItem(
                "@FavoriteMovies",
                JSON.stringify(newFavoriteMovies)
            );
        },
        [favoriteMovies]
    );

    const parsedFavoriteMovies = useMemo(() => favoriteMovies, [favoriteMovies]);

    const getAllFavoriteMovies = useCallback(async () => {
        try {
            const movies = await Promise.all(
                favoriteMovies.map(async (movieId: number) => {
                    const response = await axios.get<Movie>(`https://api.themoviedb.org/3/movie/${movieId}`, {
                        params: {
                            api_key: "a045d25ff1232597014a170c0a94b109",
                            language: "pt-BR",
                        },
                    });
                    return response.data;
                })
            );
            setAllFavoriteMovies(movies);
        } catch (error) {
            console.log(error);
        }
    }, [favoriteMovies]);

    useEffect(() => {
        getAllFavoriteMovies();
    }, [parsedFavoriteMovies, getAllFavoriteMovies]);

    const contextData: MovieContextData = {
        favoriteMovies: parsedFavoriteMovies,
        allFavoriteMovies,
        addFavoriteMovie,
        removeFavoriteMovie,
    };

    return (
        <MovieContext.Provider value={contextData}>
            {children}
        </MovieContext.Provider>
    );
};

export { Movie };