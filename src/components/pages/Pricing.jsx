import { CheckCircleIcon, CheckIcon } from "@chakra-ui/icons";
import { Container, Box, Heading, Text, SimpleGrid, List, ListItem, ListIcon, Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Pricing = () => {
    const pricingHeroStyles = {
        backgroundImage: "https://source.unsplash.com/lCPhGxs7pww/1920x1080",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "darken",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }

    const linkStyles = {
        padding: "10px 20px",
        bg: "#CB4335",
        color: "#fff",
        fontWeight: 700,
        borderRadius: "10px",
        ":hover": {
            color: "#CB4335",
            bg: "#fff"
        }
    }

    return ( 
        <>
        <Box id="home-hero" minHeight="50vh" sx={pricingHeroStyles} display="Flex">
            <Container as="section" maxWidth={{ xl: "1140px"}}>
                <Heading as="h1" fontSize="40px" fontWeight="600" align="center">PRICING</Heading>
                <Text as="h3" fontSize="25px" align="justify"></Text>
                
            </Container>

        </Box>
        <Box backgroundColor='#000' >
            <Container as="section" maxWidth={{ xl: "1140px"}} paddingTop="50px" pb="50px">
                <SimpleGrid spacing={4} columns={{sm: 1, md: 3}}>
                    <Box width="100%" border="1px solid #fff" padding="25px" borderRadius="25px">
                        <Heading as="h2" fontSize="20px" textAlign="center" mb="15px">BRONZE</Heading>
                        <Heading as="h3" fontSize="16px" textAlign="center" mb="25px" color="#CB4335">Rs. 500 / Monthly</Heading>
                        <hr />
                        <Flex direction="column" mt="25px">
                            <Box minHeight="200px">
                                <List spacing={1} align="left" mb="25px">
                                    <ListItem>
                                        <ListIcon as={CheckIcon} fontSize="12px" />
                                        Standard Dashboard
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={CheckIcon} fontSize="12px" />
                                        Save your favorite movie
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={CheckIcon} fontSize="12px" />
                                        Rate your movie
                                    </ListItem>
                                </List> 
                            </Box>
 
                        <Link to="/contact"><Text sx={linkStyles}>Order</Text></Link>
                        </Flex>
                        
                    </Box>
                    <Box width="100%" border="1px solid #fff" padding="25px" borderRadius="25px">
                        <Heading as="h2" fontSize="20px" textAlign="center" mb="15px">SILVER</Heading>
                        <Heading as="h3" fontSize="16px" textAlign="center" mb="25px" color="#CB4335">Rs. 1000 / Monthly</Heading>
                    
                        <hr />
                        <Flex direction="column" mt="25px">
                            <Box minHeight="200px">
                                <List spacing={1} align="left" mb="25px">
                                    <ListItem>
                                        <ListIcon as={CheckIcon} fontSize="12px" />
                                        Premium Dashboard
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={CheckIcon} fontSize="12px" />
                                        Save your favorite movie
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={CheckIcon} fontSize="12px" />
                                        Buy Tickets Online
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={CheckIcon} fontSize="12px" />
                                        Rate your movie
                                    </ListItem>
                                </List> 
                            </Box>
 
                        <Link to="/contact"><Text sx={linkStyles}>Order</Text></Link>
                        </Flex>
                        
                    </Box>
                    <Box width="100%" border="1px solid #fff" padding="25px" borderRadius="25px">
                        <Heading as="h2" fontSize="20px" textAlign="center" mb="15px">GOLD</Heading>
                        <Heading as="h3" fontSize="16px" textAlign="center" mb="25px" color="#CB4335">Rs. 1500 / Monthly</Heading>
                    
                        <hr />
                        <Flex direction="column" mt="25px">
                            <Box minHeight="200px">
                                <List spacing={1} align="left" mb="25px">
                                    <ListItem>
                                        <ListIcon as={CheckIcon} fontSize="12px" />
                                        Premium Dashboard
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={CheckIcon} fontSize="12px" />
                                        Save your favorite movie
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={CheckIcon} fontSize="12px" />
                                        Rate your movie
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={CheckIcon} fontSize="12px" />
                                        Buy Premium Ticket
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={CheckIcon} fontSize="12px" />
                                        Get free goodies every month
                                    </ListItem>
                                </List> 
                            </Box>
 
                        <Link to="/contact"><Text sx={linkStyles}>Order</Text></Link>
                        </Flex>
                        
                    </Box>
                </SimpleGrid>
                    
            </Container>

        </Box>
        </>
     );
}
 
export default Pricing;