import { Container, Box, Heading, Text, Image, SimpleGrid } from "@chakra-ui/react";
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
        //backgroundColor: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0))';
        backgroundBlendMode: "darken",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }



    return ( 
        <>
        <Box id="home-hero" minHeight="60vh" sx={movieHeroStyles} display="flex">
            <Container as="section" maxWidth={{ xl: "1140px"}}>
                <Heading as="h1" fontSize="45px" fontWeight="800" align="center" color="#CB4335" textTransform="uppercase">{movieData.title}</Heading>
            </Container>
        </Box>
        <Box backgroundColor="#000000" padding="50px 0">
            <Container as="section" maxWidth={{ xl: "1140px"}}>
                <SimpleGrid spacing={4} columns={{sm: 1, md: 2}}>
                <Image src={"https://image.tmdb.org/t/p/w500" + movieData.backdrop_path} width="100%"/>
                <Box>
                    <Heading as="h3">{movieData.title}</Heading>
                    <Text mt="25px">{movieData.overview}</Text>
                    <Text mt="25px">Release Date: {movieData.release_date}</Text>
                </Box>

                </SimpleGrid>

            </Container>
            
        </Box>
        </>
     );
}
 
export default Movie;