import { Container, Text, Box } from "@chakra-ui/react";

const Footer = () => {
    return ( 
        <>
            <Box backgroundColor="#252525">
                <Container as="footer" maxWidth="1140px" padding="25px 0">
                        <Text align="center">Copyright © 2023 | MooV-e</Text>
                </Container>
            </Box>
        </>
     );
}
 
export default Footer;