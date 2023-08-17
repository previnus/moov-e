import { Container, Box, Heading, Text, Image, Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";



const Movie = () => {
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    const movieURL = import.meta.env.VITE_REACT_APP_SINGLE_MOVIE;
    const {id} = useParams();
    const url = `${movieURL}/${id}?api_key=${apiKey}`;

    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        const movie = fetchMovie();
    },[]);

    const fetchMovie = async () => {
        const data = await fetch(url);
        const movie = await data.json();
        
        setMovieData({
            'title' : movie.title,
            'backdrop_path' : movie.backdrop_path,
            'homepage' : movie.homepage,
            'overview' : movie.overview,
            'release_date' : movie.release_date,
        });
    };


    const movieHeroStyles = {
        backgroundImage: "https://image.tmdb.org/t/p/original" + movieData.backdrop_path,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "darken",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }



    return ( 
        <>
        <Box id="home-hero" minHeight="60vh" sx={movieHeroStyles} display="flex">
            <Container as="section" maxWidth={{ xl: "1140px"}}>
                <Heading as="h1" fontSize="40px" fontWeight="600" align="center">{movieData.title}</Heading>
            </Container>
        </Box>
        <Box backgroundColor="#000000">
            <Container as="section" maxWidth={{ xl: "1140px"}}>
                <Flex>
                <Image src={"https://image.tmdb.org/t/p/w500" + movieData.backdrop_path} />
                <Box padding="20px">
                    <Heading as="h3">{movieData.title}</Heading>
                    <Text>{movieData.overview}</Text>
                    <Text>Release Date: {movieData.release_date}</Text>
                </Box>

                </Flex>

            </Container>
            
        </Box>
        </>
     );
}
 
export default Movie;