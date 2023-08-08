import { Button, Container, Image, Text } from "@chakra-ui/react";
import {Link} from "react-router-dom"

const Home = () => {
    return ( 
        <>
        <Container as="section" maxWidth={{ xl: "1140px"}}>
            <Text as="h1" fontSize="40px" fontWeight="600" align="center">HOME</Text>
            <Image src="https://source.unsplash.com/U6Q6zVDgmSs/300x250" />
            <Text as="h3" fontSize="25px" align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet minima ut, aspernatur voluptatem perferendis odio non quaerat animi provident tempora reprehenderit consequuntur, laborum asperiores veritatis numquam? Consectetur ducimus rerum nobis.</Text>
        </Container>
        </>
     );
}
 
export default Home;