import { Container, Box, SimpleGrid } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import MovieCard from "../MovieCard";

const Upcoming = () => {
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
    const url = `${baseUrl}/upcoming?api_key=${apiKey}&language=en-US&page=1`;
    const [upcoming, setUpcoming] = useState([]);

    useEffect(() => {
        fetchUpcoming();
    },[]);

    const fetchUpcoming = async () => {
        const data = await fetch(url);
        const movies = await data.json();
        console.log(movies);
        setUpcoming(movies.results);
    };

    return ( 
        <Box id="home-hero" minHeight="80vh" backgroundColor="rgba(0, 0, 0, 1)" display="flex">
            <Container as="section" maxWidth={{ xl: "1140px"}} margin="2rem auto">
                <SimpleGrid spacing={4} columns={{sm: 1, md: 4}}>
                    {upcoming.map((movie) => {
                        return <MovieCard key={movie.id} movie={movie} />;
                        })}
                </SimpleGrid>
            </Container>
        </Box>
     );
}
 
export default Upcoming;