import { Box, Button, Flex, Heading, Link } from '@chakra-ui/react';
import { useThemeContext } from '../context/ThemeContext';
import { Moon, Sun } from '@phosphor-icons/react';

const Navbar = () => {
    const { theme, handleToggleTheme } = useThemeContext();
    const isWhiteTheme = theme === "light";
    
    return (
        <Box width="100%" bg={isWhiteTheme ? "gray.100" : "#343a40"} px={12} py={6}>
            <Flex justifyContent="space-between" align="center">
                <Flex gap={4} align="center">
                    <Heading size="lg" marginRight={3} color={isWhiteTheme ? "black" : "white"}>Apex</Heading>
                    <Link color={isWhiteTheme ? "black" : "white"} mt={1} href='#'>Essentials</Link>
                    <Link color={isWhiteTheme ? "black" : "white"} mt={1} href='#'>Other</Link>
                </Flex>
                <Button borderRadius={100} onClick={handleToggleTheme} colorScheme={isWhiteTheme ? "teal" : "blackAlpha"}>
                    {
                        isWhiteTheme
                            ? <Moon size={22} weight="bold" color='white' />
                            : <Sun size={22} weight="bold" color='white' />
                    }
                </Button>
            </Flex>
        </Box>
    );
};

export default Navbar;