import { Button, Container, Text } from "@chakra-ui/react";
import {Link} from "react-router-dom"

const NotFound = () => {
    return ( 
        <>
        <Container as="section" textAlign="center" maxWidth="1140px;">
            <Text as="h1">404 Not Found!!</Text>
            <Text as="h3">UHh Oh!! This page was not found</Text>
            <Button><Link to="/">Click to return</Link></Button>
        </Container>
        </>
     );
}
 
export default NotFound;