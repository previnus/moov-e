import { HamburgerIcon, StarIcon } from "@chakra-ui/icons";
import { Box, Container, Flex, Spacer, Text, Image, Button } from "@chakra-ui/react";
import {NavLink, Link} from "react-router-dom"
import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import { useDisclosure } from "@chakra-ui/react";

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

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
                    <HamburgerIcon fontSize="30px" onClick={onOpen}/>
                </Flex>
                <Modal isOpen={isOpen} size="full" onClose={onClose} motionPreset='slideInBottom'>
                    <ModalOverlay />
                    <ModalContent backgroundColor="#232323">
                    <ModalCloseButton fontSize="20px" />
                    <ModalBody>
                        <Box sx={navStyles}><NavLink to="/">Home</NavLink></Box>
                        <Box sx={navStyles}><NavLink to="/trending">Trending</NavLink></Box>
                        <Box sx={navStyles}><NavLink to="/whatsnew">What's New</NavLink></Box>
                        <Box sx={navStyles}><NavLink to="/pricing">Pricing</NavLink></Box>
                        <Box sx={navStyles}><NavLink to="/contact">Contact</NavLink></Box>
                    </ModalBody>
                    </ModalContent>
                </Modal>
            </Flex> 
        </Container>
        </>
     );
}
 
export default Header;