import { Container, Box, Heading, Text, Image, SimpleGrid, Tabs, Tab, TabList, TabPanels, TabPanel, TabIndicator, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import YouTube from 'react-youtube';

const Movie = () => {
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    const movieURL = import.meta.env.VITE_REACT_APP_SINGLE_MOVIE;
    const {id} = useParams();
    const url = `${movieURL}/${id}?api_key=${apiKey}&append_to_response=videos,images`;

    const [movieData, setMovieData] = useState([]);
    const [videoData, setVideoData] = useState([]);
    const [imageData, setImageData] = useState([]);
    const [genreData, setGenreData] = useState([]);


    useEffect(() => {
        fetchMovie();
    },[]);

    const fetchMovie = async () => {
        const data = await fetch(url);
        const movie = await data.json();
        console.log(movie)

        setGenreData(movie.genres);
        setVideoData(movie.videos.results);
        setImageData(movie.images.posters);
        setMovieData(movie);
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

    const youtubeOpts = {
        width: "100%",
        height: '250'
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
                    <Box mt="0">
                        <Image src={"https://image.tmdb.org/t/p/original" + movieData.poster_path} width="100%"  objectFit="cover"  />
                    </Box>
                    <Box mt="0">
                        <Tabs isFitted variant='unstyled'>
                            <Heading fontSize="30px" as="h3" mb="10px">{movieData.title}</Heading>
                            <Heading color="#CB4335" fontSize="22px" fontWeight="300" fontStyle="italic" as="h6" mb="10px">{movieData.tagline}</Heading>
                            <Text fontSize="15px" fontWeight="300"  mb="25px">
                                ( 
                                {genreData.map((genre, index, array) => {
                                    if(index !== array.length -1){
                                        return <>{genre.name}, </>;
                                    }else{
                                        return <>{genre.name}</>
                                    }
                                })}
                             )  
                            </Text>
                            <TabList>
                                <Tab _selected={{ color: '#CB4335'}}>Overview</Tab>
                                <Tab _selected={{ color: '#CB4335'}}>Datasheet</Tab>
                                <Tab _selected={{ color: '#CB4335'}}>Gallery</Tab>
                                <Tab _selected={{ color: '#CB4335'}}>Trailers</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>         
                                    <Text>{movieData.overview}</Text>
                                </TabPanel>
                                
                                <TabPanel>
                                    <TableContainer>
                                        <Table variant='simple'>
                                            <Tbody>
                                            <Tr>
                                                <Td color="#CB4335">Release Data</Td>
                                                <Td>{movieData.release_date}</Td>
                                            </Tr>
                                            <Tr>
                                                <Td color="#CB4335">Duration</Td>
                                                <Td>{movieData.runtime} Minutes</Td>
                                            </Tr>
                                            <Tr>
                                                <Td color="#CB4335">Original Title</Td>
                                                <Td>{movieData.original_title}</Td>
                                            </Tr>
                                            <Tr>
                                                <Td color="#CB4335">Original Language</Td>
                                                <Td>{movieData.original_language}</Td>
                                            </Tr>
                                            <Tr>
                                                <Td color="#CB4335">Homepage</Td>
                                                <Td><a href={movieData.homepage} target="_blank">Visit Website</a></Td>
                                            </Tr>
                                            <Tr>
                                                <Td color="#CB4335">Budget</Td>
                                                <Td>${movieData.budget}</Td>
                                            </Tr>
                                            <Tr>
                                                <Td color="#CB4335">Revenue</Td>
                                                <Td>${movieData.revenue}</Td>
                                            </Tr>
                                            <Tr>
                                                <Td color="#CB4335">Average Votes</Td>
                                                <Td>{movieData.vote_average}</Td>
                                            </Tr>
                                            <Tr>
                                                <Td color="#CB4335">Total Votes</Td>
                                                <Td>{movieData.vote_count}</Td>
                                            </Tr>
                                            </Tbody>
                                        </Table>
                                    </TableContainer>
                                </TabPanel>
                                
                                <TabPanel>
                                    <SimpleGrid spacing={4} columns={{sm: 1, md: 3}}>
                                    {imageData.map((image) => {
                                        return <Image src={"https://image.tmdb.org/t/p/w200" + image.file_path} width="100%" objectFit="cover" />;
                                        })}
                                    </SimpleGrid>
                                </TabPanel>
                                <TabPanel>
                                    <SimpleGrid spacing={4} columns={{sm: 1, md: 1}}>
                                    {videoData.map((video) => {
                                            return <YouTube opts={youtubeOpts} videoId={video.key} />
                                        })}
                                    </SimpleGrid>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>

                    </Box>

                </SimpleGrid>

            </Container>
            
        </Box>
        </>
     
     );
}
 
export default Movie;