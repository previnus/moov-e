import { Card, CardBody, Image, Heading, CardHeader, Button, Box, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const MovieCard = ({movie}) => {
  const linkStyles = {
    color: "#000000",
    fontWeight: 600,
    ":hover" : {
      color: "#CB4335"
    },
  }

  const imageStyles = {
    ":hover" : {
      color: "#CB4335"
    },
  }

  return (
    <Card> 
        <CardHeader padding="0">
        <Image
            src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} 
            alt={movie.path}
            height="150px"
            borderRadius="5px 5px 0 0"
            sx= {imageStyles}
            fallbackSrc='https://via.placeholder.com/150'
          />
        </CardHeader>

        <CardBody textAlign="center">
          <Box minHeight="75px" maxWidth="200px">
            <Heading color="black" size='md'>{movie.title}</Heading>
          </Box>
          <Box>
            <Link to="/"><Text  sx={linkStyles}>View Movie</Text></Link>
          </Box>
            
        </CardBody>
    </Card>
  )
}

export default MovieCard