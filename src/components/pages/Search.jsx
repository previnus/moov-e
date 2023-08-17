import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Container, Box, SimpleGrid } from "@chakra-ui/react";
import MovieCard from "../MovieCard";

const Search = () => {

    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    const searchURL = import.meta.env.VITE_REACT_APP_SEARCH_URL;

    
    const [results, setResults] = useState([]);
    //const url = `${searchURL}?api_key=${apiKey}&language=en-US&page=1&query=${results}`;
  
    const {state} = useLocation(); // <-- unpack route state

    const passResults = async () => {
        const url = `${searchURL}?api_key=${apiKey}&language=en-US&page=1&query=${state}`;
        
        const data = await fetch(url);
        const movies = await data.json();
        setResults(movies.results);
    }

    useEffect(() => {
        passResults();
       // pass in queryString


    }, [state]);

  return (
    <Box id="home-hero" minHeight="80vh" backgroundColor="rgba(0, 0, 0, 1)" display="flex">
        <Container as="section" maxWidth={{ xl: "1140px"}} margin="2rem auto">
            <SimpleGrid spacing={4} columns={{sm: 1, md: 4}}>
                {results.map((movie) => {
                    return <MovieCard key={movie.id} movie={movie} />;
                    })}
            </SimpleGrid>
        </Container>
    </Box>
  )
}

export default Search