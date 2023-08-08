import { Box, Container, Flex, Spacer } from "@chakra-ui/react";
import {NavLink, Link} from "react-router-dom"

const Header = () => {
    return ( 
        <>
        <Container as="header" maxWidth="1140px">
           <Flex >
                <h2><Link to="/">Logo</Link></h2>
                <Spacer />
                <Flex>
                    <Box padding="20px"><NavLink to="/">Home</NavLink></Box>
                    <Box padding="20px"><NavLink to="/trending">Trending</NavLink></Box>
                    <Box padding="20px"><NavLink to="/whatsnew">What's New</NavLink></Box>
                    <Box padding="20px"><NavLink to="/pricing">Pricing</NavLink></Box>
                    <Box padding="20px"><NavLink to="/contact">Contact</NavLink></Box>
                </Flex>
            </Flex> 
        </Container>
        </>
     );
}
 
export default Header;