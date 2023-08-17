import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Container, Flex, Spacer, Image} from "@chakra-ui/react";
import { NavLink, Link } from "react-router-dom"
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import { useDisclosure } from "@chakra-ui/react"
import SearchBar from "../SearchBar";

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const navStyles = {
        padding: "20px",
        textTransform: "uppercase",
        fontWeight: "600",
        color: "white",
        ":hover": {
            color: "#CB4335"
        },
    }

    const navBar = {
        overflow: "hidden",
        position: 'sticky',
        zIndex: 999,
        top: 0,
        width: '100%',
    }

    return ( 
        <>
        <Box background="#252525" borderBottom="1px solid #111111" sx={navBar}>
            <Container as="header" maxWidth="1140px" >
            <Flex alignItems="center">
                    <Box margin="15px 0">
                            <Link to="/">
                                <Image maxWidth={{base: "175px", md:"250px"}} src="/assets/imgs/logo.png" />
                            </Link>
                    </Box>
                    <Spacer />
                    <Flex display={{base: "none", md:"flex"}}>
                        <Box sx={navStyles}><NavLink to="/">Home</NavLink></Box>
                        <Box sx={navStyles}><NavLink to="/trending">Trending</NavLink></Box>
                        <Box sx={navStyles}><NavLink to="/upcoming">Upcoming</NavLink></Box>
                        <Box sx={navStyles}><NavLink to="/pricing">Pricing</NavLink></Box>
                        <Box sx={navStyles}><NavLink to="/contact">Contact</NavLink></Box>
                        
                    </Flex>
                    <Spacer />
                    <Flex display={{base: "none", md:"flex"}}>
                    <SearchBar />
                    </Flex>
                    
                    <Flex display={{base: "flex", md:"none"}}>
                        <HamburgerIcon fontSize="30px" onClick={onOpen}/>
                    </Flex>
                    
                    <Modal isOpen={isOpen} size="full" onClose={onClose} motionPreset='slideInBottom'>
                        <ModalOverlay />
                        <ModalContent backgroundColor="#232323">
                        <ModalCloseButton fontSize="20px" />
                        <ModalBody>
                            <Box sx={navStyles}><NavLink to="/" onClick={onClose}>Home</NavLink></Box>
                            <Box sx={navStyles} ><NavLink to="/trending" onClick={onClose}>Trending</NavLink></Box>
                            <Box sx={navStyles}><NavLink to="/upcoming" onClick={onClose}>Upcoming</NavLink></Box>
                            <Box sx={navStyles}><NavLink to="/pricing" onClick={onClose}>Pricing</NavLink></Box>
                            <Box sx={navStyles}><NavLink to="/contact" onClick={onClose}>Contact</NavLink></Box>
                        </ModalBody>
                        </ModalContent>
                    </Modal>
                </Flex> 
                <Box display={{base: "flex", md:"none"}} margin="15px 0"><SearchBar /></Box>
            </Container>
        </Box>
        
        </>
     );
}
 
export default Header;