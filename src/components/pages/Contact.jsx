import { Container, Box, Heading, Text, Code } from "@chakra-ui/react";

const Contact = () => {

    const contactHeroStyles = {
        backgroundImage: "https://source.unsplash.com/mHusyBu4bxM/1920x1080",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "darken",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }

    return ( 
        <>
        <Box id="home-hero" minHeight="50vh" sx={contactHeroStyles} display="Flex">
            <Container as="section" maxWidth={{ xl: "1140px"}}>
                <Heading as="h1" fontSize="40px" fontWeight="600" align="center">CONTACT</Heading>
                <Text as="h3" fontSize="25px" align="justify"></Text>
                
            </Container>

        </Box>
        <Box backgroundColor='#000'>
            <iframe
                    title="Form Name"
                    src="jotform-embed.htm"
                    style={{
                        width: '100%',
                        height: '600px',
                        overflow: 'hidden',
                        color: "#fff"
                    }}
                />
        </Box>
        </>
     );
}
 
export default Contact;


