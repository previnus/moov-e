import { Container, Text, Heading, Box, SimpleGrid, Image } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from "react";
import MovieCard from "../MovieCard";

const Home = () => {

    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
    const urlTopRated = `${baseUrl}/top_rated?api_key=${apiKey}&language=en-US&page=1`;
    const urlNowPlaying = `${baseUrl}/now_playing?api_key=${apiKey}&language=en-US&page=1`;
    const [topRated, setTopRated] = useState([]);
    const [nowPlaying, setNowPlaying] = useState([]);

    useEffect(() => {
        fetchTopRated();
        fetchNowPlaying();
    },[]);

    const fetchTopRated = async () => {
        const data = await fetch(urlTopRated);
        const movies = await data.json();
        setTopRated(movies.results);
    };

    const fetchNowPlaying = async () => {
        const data = await fetch(urlNowPlaying);
        const movies = await data.json();
        setNowPlaying(movies.results);
    };

    return ( 
        <Box backgroundColor="#000000">

            <Carousel showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true} interval={4000}>
                {nowPlaying.map((movie) => {
                            return <Box height="85vh" key={movie.id}><Image height="100%" objectFit="cover" key={movie.id} src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path} fallbackSrc='https://via.placeholder.com/150'/></Box>;
                            })}
            </Carousel>
            <Box id="home-hero" padding="2rem">

                <Container as="section" maxWidth={{ xl: "1140px"}}>
                    <Heading as="h1" fontSize="30px" fontWeight="600" textAlign={{sm: 'center', lg: 'left'}} mb="1rem" color="#CB4335">NOW PLAYING</Heading>
                    <SimpleGrid spacing={4} columns={{sm: 1, md: 4}}>
                        {nowPlaying.map((movie) => {
                            return <MovieCard key={movie.id} movie={movie} />;
                            })}
                    </SimpleGrid>
                </Container>
                <Container as="section" maxWidth={{ xl: "1140px"}} mt="2rem">
                    <Heading as="h1" fontSize="30px" fontWeight="600" textAlign={{sm: 'center', lg: 'left'}} mb="1rem" color="#CB4335">TOP RATED</Heading>
                    <SimpleGrid spacing={4} columns={{sm: 1, md: 4}}>
                        {topRated.map((movie) => {
                            return <MovieCard key={movie.id} movie={movie} />;
                            })}
                    </SimpleGrid>
                </Container>

            </Box>

        </Box>

     );
}
 
export default Home;