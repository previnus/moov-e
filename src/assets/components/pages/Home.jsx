import { Button, Container, Text } from "@chakra-ui/react";
import {Link} from "react-router-dom"

const Home = () => {
    return ( 
        <>
        <Container as="section" textAlign="center" maxWidth="1140px;">
            <Text as="h1">This the HOME Page</Text>
            <Text as="h3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet minima ut, aspernatur voluptatem perferendis odio non quaerat animi provident tempora reprehenderit consequuntur, laborum asperiores veritatis numquam? Consectetur ducimus rerum nobis.</Text>
        </Container>
        </>
     );
}
 
export default Home;