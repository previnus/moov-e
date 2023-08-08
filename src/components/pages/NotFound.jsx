import { Button, Container, Text, Image } from "@chakra-ui/react";
import {Link} from "react-router-dom"

const NotFound = () => {
    return ( 
        <>
            <Container as="section" maxWidth={{ xl: "1140px"}} align="center">
                <Text as="h1" fontSize="40px" fontWeight="600">404 Not Found!!</Text>
                <Image src="https://source.unsplash.com/sxiSod0tyYQ/300x250" />
                <Text as="h3" fontSize="25px">UHh Oh!! This page was not found</Text>
                <Button margin="25px 0"><Link to="/">Click to return to homepage</Link></Button>
            </Container>
        </>
     );
}
 
export default NotFound;