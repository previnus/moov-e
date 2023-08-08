import { HamburgerIcon, StarIcon } from "@chakra-ui/icons";
import { Box, Container, Flex, Spacer, Text, Image, Button } from "@chakra-ui/react";
import {NavLink, Link} from "react-router-dom"
import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import { useDisclosure } from "@chakra-ui/react";
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from '@chakra-ui/react'

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
                
                <Drawer isOpen={isOpen} placement='right' onClose={onClose} size="full">
                <DrawerOverlay />
                <DrawerContent backgroundColor="#232323">
                <DrawerCloseButton fontSize="20px" margin="20px 10px 0 0"/>

                <DrawerBody>
                        <Box sx={navStyles}><NavLink to="/" onClick={onClose}>Home</NavLink></Box>
                        <Box sx={navStyles}><NavLink to="/trending" onClick={onClose}>Trending</NavLink></Box>
                        <Box sx={navStyles}><NavLink to="/whatsnew" onClick={onClose}>What's New</NavLink></Box>
                        <Box sx={navStyles}><NavLink to="/pricing" onClick={onClose}>Pricing</NavLink></Box>
                        <Box sx={navStyles}><NavLink to="/contact" onClick={onClose}>Contact</NavLink></Box>
                </DrawerBody>

                </DrawerContent>
            </Drawer>
            </Flex> 
        </Container>
        </>
     );
}
 
export default Header;