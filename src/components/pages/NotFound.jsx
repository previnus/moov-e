import { Container, Box, Heading, Text, Button } from "@chakra-ui/react";
import {Link} from "react-router-dom"

const NotFound = () => {
    const notfoundHeroStyles = {
        backgroundImage: "https://source.unsplash.com/sxiSod0tyYQ/1920x1080",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "darken",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }

    return ( 
        <Box id="home-hero" minHeight="80vh" sx={notfoundHeroStyles} display="flex" align="center">
            <Container as="section" maxWidth={{ xl: "1140px"}}>
                <Heading as="h1" fontSize="40px" fontWeight="600" align="center">404 Not Found!!</Heading>
                <Text as="h3" fontSize="25px">UHh Oh!! The page you requested was not found</Text>
                <Button margin="25px 0"><Link to="/">Return to home</Link></Button>         
            </Container>
        </Box>
     );
}
 
export default NotFound;