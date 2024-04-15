import { Button, ButtonGroup, CardBody, CardFooter, Card as ChakraCard, Heading, Image, Stack, Text,  } from '@chakra-ui/react';
import { HomeProduct } from '../constants/products';
import { useThemeContext } from '../context/ThemeContext';


const Card = ({name, description, imageUrl, price}: HomeProduct) => {
    const { theme } = useThemeContext();
    const isWhiteTheme = theme === "light";

    return (
        <ChakraCard maxW='sm' bg={isWhiteTheme ? "white" : "#343a40"}>
            <CardBody>
                <Image
                    boxSize="100%"
                    height="240px"
                    objectFit='cover'
                    src={imageUrl}
                    alt={name}
                    borderRadius='lg'
                />
                <Stack mt='4' spacing='3'>
                    <Heading color={isWhiteTheme ? "black" : "gray.200"} size='md' >{name}</Heading>
                    <Text color={isWhiteTheme ? "black" : "gray.400"} noOfLines={3}>
                        {description}
                    </Text>
                    <Text color={isWhiteTheme ? "blue.600" : "blue.200"} fontSize='2xl'>
                        ₹{price}
                    </Text>
                </Stack>
            </CardBody>
            <CardFooter pt={0}>
                <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme={isWhiteTheme ? 'blue' : "teal"}>
                    Buy now
                </Button>
                <Button variant='ghost' colorScheme={isWhiteTheme ? 'blue' : "whiteAlpha"}>
                    Add to cart
                </Button>
                </ButtonGroup>
            </CardFooter>
        </ChakraCard>
    );
};

export default Card;