import { Pressable, Image } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

interface Movie {
    id: number;
    poster_path: string;
}

interface Props {
    data: Movie;
    onPress?: () => void;
}

export function CardMovies({ data, ...rest }: Props) {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate("Details", { movieId: data.id });
    };

    return (
        <Pressable {...rest} style={styles.cardMovies} onPress={handlePress}>
            <Image
                source={{
                    uri: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
                }}
                style={styles.cardImage}
            />
        </Pressable>
    );
}