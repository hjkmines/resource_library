import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
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
} from '@chakra-ui/react';
import { FiSearch, FiUploadCloud } from 'react-icons/fi';
import { useDisclosure } from '@chakra-ui/hooks';
import { useState, useRef } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    function uploadFile(btn) {
        btn.click();
    }

    return (
        <>
            <Hide below='md'>
                <Flex
                    alignItems='center'
                    p={1}
                    bgColor='#FCB22E'
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
                    <Avatar mr={4} />
                </Flex>
                <Flex
                    bgColor='#A4BB9A'
                    height={50}
                    alignItems='center'
                    justifyContent='space-around'
                >
                    <Link as={NextLink} href='/' fontSize='2xl' color='white'>
                        Videos
                    </Link>
                    <Divider orientation='vertical' h='7'  />
                    <Link as={NextLink} href='/' fontSize='2xl' color='white'>
                        Articles
                    </Link>
                    <Divider orientation='vertical' h='7' />
                    <Link as={NextLink} href='/' fontSize='2xl' color='white'>
                        Tools
                    </Link>
                    <Divider orientation='vertical' h='7' />
                    <Link as={NextLink} href='/' fontSize='2xl' color='white'>
                        Events
                    </Link>
                    <Divider orientation='vertical' h='7' />
                    <Link as={NextLink} href='/' fontSize='2xl' color='white'>
                        Humour
                    </Link>
                </Flex>
            </Hide>
            <Show below='md'>
                <Flex p={1} bgColor='#FCB22E'>
                    <Image ml={4} boxSize='3em' src='/logo.svg' />
                    <Spacer />
                    <Avatar mr={4} />
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
                                <Divider orientation='horizontal' />
                                <Center height='50px'>
                                    <Link as={NextLink} href='/'>
                                        Videos
                                    </Link>
                                </Center>
                                <Divider orientation='horizontal' />
                                <Center height='50px'>
                                    <Link as={NextLink} href='/'>
                                        Articles
                                    </Link>
                                </Center>
                                <Divider orientation='horizontal' />
                                <Center height='50px'>
                                    <Link as={NextLink} href='/'>
                                        Tools
                                    </Link>
                                </Center>
                                <Divider orientation='horizontal' />
                                <Center height='50px'>
                                    <Link as={NextLink} href='/'>
                                        Events
                                    </Link>
                                </Center>
                                <Divider orientation='horizontal' />
                                <Center height='50px'>
                                    <Link as={NextLink} href='/'>
                                        Humour
                                    </Link>
                                </Center>
                                <Divider orientation='horizontal' />
                                <DrawerFooter
                                    marginTop={5}
                                    bgColor='#FCB22E'
                                    borderRadius={10}
                                    height={200}
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
