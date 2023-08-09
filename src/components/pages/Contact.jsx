import { Container, Box, Heading, Text } from "@chakra-ui/react";

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
        <Box id="home-hero" minHeight="80vh" sx={contactHeroStyles} display="flex">
            <Container as="section" maxWidth={{ xl: "1140px"}}>
                <Heading as="h1" fontSize="40px" fontWeight="600" align="center">CONTACT</Heading>
                <Text as="h3" fontSize="25px" align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet minima ut, aspernatur voluptatem perferendis odio non quaerat animi provident tempora reprehenderit consequuntur, laborum asperiores veritatis numquam? Consectetur ducimus rerum nobis.</Text>
            </Container>
        </Box>
     );
}
 
export default Contact;