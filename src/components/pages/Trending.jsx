import { Container, Box, SimpleGrid } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import MovieCard from "../MovieCard";

const Trending = () => {
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
    const url = `${baseUrl}/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        fetchTrending();
    },[]);

    const fetchTrending = async () => {
        const data = await fetch(url);
        const movies = await data.json();
        console.log(movies);
        setTrending(movies.results);
    };

 


    const trendingHeroStyles = {
        backgroundImage: "https://source.unsplash.com/HsXgRlIr4Ls/1920x1080",
        backgroundColor: "rgba(0, 0, 0, 1)",
        backgroundBlendMode: "darken",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }

    return ( 
        <Box id="home-hero" minHeight="80vh" sx={trendingHeroStyles} display="flex">
            <Container as="section" maxWidth={{ xl: "1140px"}} margin="2rem auto">
                <SimpleGrid spacing={4} templateColumns='repeat(4, minmax(200px, 1fr))'>
                    {trending.map((movie) => {
                        return <MovieCard key={movie.id} movie={movie} />;
                        })}
                </SimpleGrid>
            </Container>
        </Box>
     );
}
 
export default Trending;