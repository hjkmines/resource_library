import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Image,
    Text,
    Flex,
    Avatar,
    Button,
    Input,
    InputGroup,
    InputLeftElement,
    Show,
    Hide,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerFooter,
    IconButton,
    Spacer,
    Link,
    NextLink,
    Divider,
    Center,
    Stack,
    useColorModeValue,
    useColorMode
} from '@chakra-ui/react';
import { FiSearch, FiUploadCloud } from 'react-icons/fi';
import { useDisclosure } from '@chakra-ui/hooks';
import { useRef } from 'react';
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    const { colorMode, toggleColorMode } = useColorMode();

    function uploadFile(btn) {
        btn.click();
    }

    return (
        <>
            {/* Desktop View */}

            <Hide below='md'>
                <Flex
                    alignItems='center'
                    p={2}
                    bgColor={useColorModeValue('#FCB22E', 'gray.700')}
                    justifyContent='space-between'
                >
                    <Image ml={4} boxSize='3em' src='/logo.svg' />
                    <Hide below='xl'>
                        <Text fontSize='2xl'>Hanawilo Resource Library</Text>
                    </Hide>
                    <Flex>
                        <InputGroup>
                            <InputLeftElement
                                children={<FiSearch />}
                                color='white'
                                fontSize={20}
                                pointerEvents='none'
                            />
                            <Input
                                placeholder='Search for resources...'
                                _placeholder={{ color: 'white' }}
                                textAlign={'center'}
                                variant='outline'
                                borderRadius={20}
                                borderWidth={2}
                                borderColor='white'
                                size='md'
                                width={{
                                    md: 'md',
                                    lg: 'xl',
                                    xl: '2xl',
                                    '2xl': '4xl',
                                }}
                            />
                        </InputGroup>
                    </Flex>
                    <Input type='file' id='upload' display='none' />
                    <Button
                        rightIcon={<FiUploadCloud />}
                        borderRadius='10'
                        color='white'
                        bgColor='whiteAlpha.500'
                        opacity={0.9}
                        variant='outline'
                        px={10}
                        onClick={() => {
                            uploadFile(upload);
                        }}
                    >
                        Upload
                    </Button>
                    <Flex alignItems='center'>
                        <IconButton
                            aria-label='Toggle dark mode'
                            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            onClick={toggleColorMode}
                            bg={useColorModeValue('white', 'gray.800')} 
                            borderRadius='full'
                            ml={2}
                        />
                    </Flex>

                    {/* Desktop Avatar */}

                    <Flex alignItems={'center'}>
                        <Menu isLazy>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}
                            >
                                <Avatar
                                    size={'md'}
                                    mr={4}
                                    src={
                                        'https://media.licdn.com/dms/image/D5603AQEiGKFLtXqACw/profile-displayphoto-shrink_200_200/0/1668567666454?e=1681948800&v=beta&t=35iR1f4ZwZwzXYx874ZHtJOErESr68w56FsBA8Xu1Uk'
                                    }
                                />
                            </MenuButton>
                            <MenuList>
                                <Link
                                    as={NextLink}
                                    href='/'
                                    _hover={{
                                        textDecoration: 'none',
                                    }}
                                >
                                    <MenuItem>Logout</MenuItem>
                                </Link>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>
                <Flex
                    bgColor='#A4BB9A'
                    p={3}
                    alignItems='center'
                    justifyContent='space-around'
                >
                    <Link
                        as={NextLink}
                        href='/'
                        fontSize='2xl'
                        color='white'
                        _hover={{
                            textDecoration: 'none',
                        }}
                    >
                        Videos
                    </Link>
                    <Divider orientation='vertical' h='9' />
                    <Link
                        as={NextLink}
                        href='/'
                        fontSize='2xl'
                        color='white'
                        _hover={{
                            textDecoration: 'none',
                        }}
                    >
                        Articles
                    </Link>
                    <Divider orientation='vertical' h='9' />
                    <Link
                        as={NextLink}
                        href='/'
                        fontSize='2xl'
                        color='white'
                        _hover={{
                            textDecoration: 'none',
                        }}
                    >
                        Tools
                    </Link>
                    <Divider orientation='vertical' h='9' />
                    <Link
                        as={NextLink}
                        href='/'
                        fontSize='2xl'
                        color='white'
                        _hover={{
                            textDecoration: 'none',
                        }}
                    >
                        Events
                    </Link>
                    <Divider orientation='vertical' h='9' />
                    <Link
                        as={NextLink}
                        href='/'
                        fontSize='2xl'
                        color='white'
                        _hover={{
                            textDecoration: 'none',
                        }}
                    >
                        Humour
                    </Link>
                </Flex>
            </Hide>

            {/* Mobile View */}

            <Show below='md'>
                <Flex p={1} bgColor='#FCB22E'>
                    <Image ml={4} boxSize='3em' src='/logo.svg' />
                    <Spacer />
                    <Avatar
                        src={
                            'https://media.licdn.com/dms/image/D5603AQEiGKFLtXqACw/profile-displayphoto-shrink_200_200/0/1668567666454?e=1681948800&v=beta&t=35iR1f4ZwZwzXYx874ZHtJOErESr68w56FsBA8Xu1Uk'
                        }
                    />
                    <Spacer />
                    <IconButton
                        colorScheme='blue'
                        onClick={onOpen}
                        aria-label='Open Menu'
                        size={'lg'}
                        icon={<HamburgerIcon />}
                    />
                    <Drawer
                        isOpen={isOpen}
                        placement='left'
                        onClose={onClose}
                        finalFocusRef={btnRef}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton
                                borderWidth={1}
                                color='white'
                                bgColor='blue.600'
                                size={'sm'}
                            />
                            <DrawerHeader
                                borderBottomWidth='1px'
                                bgColor='#FCB22E'
                            >
                                <Text fontSize='xl' fontWeight='bold'>
                                    Hanawilo Resource Library
                                </Text>
                            </DrawerHeader>
                            <DrawerBody
                                bgColor='#A4BB9A'
                                color='white'
                                fontSize='2xl'
                            >
                                <Center height='50px'>
                                    <Link
                                        as={NextLink}
                                        href='/'
                                        _hover={{
                                            textDecoration: 'none',
                                        }}
                                    >
                                        Videos
                                    </Link>
                                </Center>
                                <Divider orientation='horizontal' />
                                <Center height='50px'>
                                    <Link
                                        as={NextLink}
                                        href='/'
                                        _hover={{
                                            textDecoration: 'none',
                                        }}
                                    >
                                        Articles
                                    </Link>
                                </Center>
                                <Divider orientation='horizontal' />
                                <Center height='50px'>
                                    <Link
                                        as={NextLink}
                                        href='/'
                                        _hover={{
                                            textDecoration: 'none',
                                        }}
                                    >
                                        Tools
                                    </Link>
                                </Center>
                                <Divider orientation='horizontal' />
                                <Center height='50px'>
                                    <Link
                                        as={NextLink}
                                        href='/'
                                        _hover={{
                                            textDecoration: 'none',
                                        }}
                                    >
                                        Events
                                    </Link>
                                </Center>
                                <Divider orientation='horizontal' />
                                <Center height='50px'>
                                    <Link
                                        as={NextLink}
                                        href='/'
                                        _hover={{
                                            textDecoration: 'none',
                                        }}
                                    >
                                        Humour
                                    </Link>
                                </Center>
                                <Divider orientation='horizontal' />
                                <Center height='50px'>
                                    <Link
                                        as={NextLink}
                                        href='/'
                                        _hover={{
                                            textDecoration: 'none',
                                        }}
                                    >
                                        Logout
                                    </Link>
                                </Center>
                                <DrawerFooter
                                    marginTop={3}
                                    bgColor='#FCB22E'
                                    borderRadius={10}
                                    height={150}
                                >
                                    <Stack spacing='24px'>
                                        <Flex>
                                            <InputGroup>
                                                <InputLeftElement
                                                    children={<FiSearch />}
                                                    color='white'
                                                    fontSize={20}
                                                    pointerEvents='none'
                                                />
                                                <Input
                                                    placeholder='Search for resources...'
                                                    _placeholder={{
                                                        color: 'white',
                                                    }}
                                                    textAlign={'center'}
                                                    variant='outline'
                                                    borderRadius={20}
                                                    borderWidth={2}
                                                    borderColor='white'
                                                    size='md'
                                                />
                                            </InputGroup>
                                        </Flex>
                                        <Input
                                            type='file'
                                            id='upload'
                                            display='none'
                                        />
                                        <Button
                                            rightIcon={<FiUploadCloud />}
                                            borderRadius='10'
                                            color='white'
                                            bgColor='whiteAlpha.500'
                                            opacity={0.9}
                                            variant='outline'
                                            px={10}
                                            onClick={() => {
                                                uploadFile(upload);
                                            }}
                                        >
                                            Upload
                                        </Button>
                                    </Stack>
                                </DrawerFooter>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </Flex>
            </Show>
        </>
    );
};

export default Navbar;
