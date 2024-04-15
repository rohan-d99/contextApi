import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { homeProducts } from "../constants/products";
import Card from "./Card";
import { useThemeContext } from "../context/ThemeContext";

const Products = () => {
    const { theme } = useThemeContext();
    const isWhiteTheme = theme === "light";

    return (
        <Box px={24} pt="110px" pb="80px" bg={isWhiteTheme ? "white" : "#212529"}>
            <Flex direction="column" gap={2} mb={6}>
                <Heading color={isWhiteTheme ? "gray.900" : "white"} size="3xl">Home Essentials</Heading>
                <Text fontSize="xl" color={isWhiteTheme ? "gray.700" : "gray.200"}>Explore quality products that transform houses into homes</Text>
            </Flex>
            <Flex mb={20} gap={4}>
                <Button colorScheme="green">Explore Products</Button>
                <Button variant="outline" colorScheme="green">How it works?</Button>
            </Flex>
            <Flex gap={12} wrap="wrap" w="100%">
                {homeProducts.map((product, index) => (
                    <Card {...product} key={`${product.name}-${index}`} />
                ))}
            </Flex>
        </Box>
    );
};

export default Products;