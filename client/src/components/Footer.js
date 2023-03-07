import {
    Box,
    Stack,
    HStack,
    VStack,
    Link,
    Divider,
    Image,
    Text,
    Button,
    Center,
    LinkProps
} from '@chakra-ui/react';
import { FiLinkedin, FiTwitter, FiYoutube } from 'react-icons/fi';

const Footer = () => {
    return (
        <Box p={{ base: 5, md: 8 }} maxW="5xl" marginInline="auto">
            <Stack
                spacing={{ base: 8, md: 0 }}
                justifyContent="space-between"
                direction={{ base: 'column', md: 'row' }}
            >
                <Box maxW="600px">
                    <Link href="#" isExternal>
                        <Image w="200px" src='/logo.svg' alt="Hanawilo" />
                    </Link>
                </Box>
                <HStack
                    spacing={24}
                    d={{ base: 'none', sm: 'flex' }}
                    justifyContent={{ sm: 'space-between', md: 'normal' }}
                >
                    <VStack spacing={4} alignItems="flex-start">
                        <Text fontSize="md" fontWeight="bold">
                            About
                        </Text>
                        <VStack spacing={2} alignItems="flex-start" color="gray.500">
                            <CustomLink>Contrinute</CustomLink>
                            <CustomLink>Media assets</CustomLink>
                            <CustomLink>Changelog</CustomLink>
                            <CustomLink>Releases</CustomLink>
                        </VStack>
                    </VStack>
                    <VStack spacing={4} alignItems="flex-start">
                        <Text fontSize="md" fontWeight="bold">
                            Community
                        </Text>
                        <VStack spacing={2} alignItems="flex-start" color="gray.500">
                            <CustomLink>Discord</CustomLink>
                            <CustomLink>Twitter</CustomLink>
                            <CustomLink>Github</CustomLink>
                            <CustomLink>Github discussions</CustomLink>
                        </VStack>
                    </VStack>
                </HStack>
            </Stack>

            <Divider my={3} />
            <Center>
                <Stack spacing={3} direction={{ base: 'column', md: 'row' }}>
                    <Button
                        leftIcon={<FiLinkedin />}
                        as={Link}
                        href="#"
                        rounded="md"
                        colorScheme="yellow">
                    </Button>
                    <Button
                        leftIcon={<FiYoutube />}
                        as={Link}
                        href="#"
                        rounded="md"
                        colorScheme="red">
                    </Button>
                    <Button
                        leftIcon={<FiTwitter />}
                        as={Link}
                        href="#"
                        rounded="md"
                        color="white"
                        bg="blue.400"
                        _hover={{ bg: 'blue.600' }}
                    >
                    </Button>
                </Stack>
            </Center>
        </Box>
    );
};

const CustomLink = ({ children, ...props }, LinkProps) => {
    return (
        <Link href="#" fontSize="sm" _hover={{ textDecoration: 'underline' }} {...props}>
            {children}
        </Link>
    );
};

export default Footer;