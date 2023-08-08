import { HamburgerIcon, StarIcon } from "@chakra-ui/icons";
import { Box, Container, Flex, Spacer, Text, Image } from "@chakra-ui/react";
import {NavLink, Link} from "react-router-dom"


const Header = () => {
    const navStyles = {
        padding: "20px",
        textTransform: "uppercase",
        fontWeight: "600",
        ":hover": {
            color: "#CB4335"
        },
    }

    return ( 
        <>
        <Container as="header" maxWidth="1140px" marginBottom="25px">
           <Flex alignItems="center">
                <Box margin="15px 0">
                        <Link to="/">
                            <Image maxWidth={{base: "150px", md:"250px"}} src="/assets/imgs/logo.png" />
                        </Link>
                </Box>
                <Spacer />
                <Flex display={{base: "none", md:"flex"}}>
                    <Box sx={navStyles}><NavLink to="/">Home</NavLink></Box>
                    <Box sx={navStyles}><NavLink to="/trending">Trending</NavLink></Box>
                    <Box sx={navStyles}><NavLink to="/whatsnew">What's New</NavLink></Box>
                    <Box sx={navStyles}><NavLink to="/pricing">Pricing</NavLink></Box>
                    <Box sx={navStyles}><NavLink to="/contact">Contact</NavLink></Box>
                </Flex>
                <Flex display={{base: "flex", md:"none"}}>
                    <HamburgerIcon fontSize="30px"/>
                </Flex>
            </Flex> 
        </Container>
        </>
     );
}
 
export default Header;