import { Container, Text, Box } from "@chakra-ui/react"

const Footer = () => {
    return ( 
        <>
            <Box backgroundColor="#252525" padding="25px 0">
                <Container as="footer" maxWidth="1140px" display='flex' justifyContent="space-between">
                    <Text>Copyright © 2023 | MooV-e</Text>
                    <Text>Developed by <a href="https://previn.me" target="_blank">Previn K Appadu</a></Text>
                </Container>
            </Box>
        </>
     );
}
 
export default Footer;