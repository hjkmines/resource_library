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
                                w={['md', 'md', 'md', 'lg', '2xl', '4xl']}
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
                <Tabs isFitted variant='enclosed unstyled' size='lg'>
                    <TabList>
                        <Tab _selected={{ color: 'white', bg: 'blue.500' }}>
                            Videos
                        </Tab>
                        <Tab _selected={{ color: 'white', bg: 'green.400' }}>
                            Articles
                        </Tab>
                        <Tab _selected={{ color: 'white', bg: 'yellow.300' }}>
                            Tools
                        </Tab>
                        <Tab _selected={{ color: 'white', bg: 'red.400' }}>
                            Events
                        </Tab>
                        <Tab _selected={{ color: 'white', bg: 'pink.400' }}>
                            Humour
                        </Tab>
                    </TabList>
                    <TabPanels p='2em'>
                        <TabPanel>
                            <p>video resources</p>
                        </TabPanel>
                        <TabPanel>
                            <p>article resources</p>
                        </TabPanel>
                        <TabPanel>
                            <p>tool resources</p>
                        </TabPanel>
                        <TabPanel>
                            <p>event resources</p>
                        </TabPanel>
                        <TabPanel>
                            <p>humour resources</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
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
                            <DrawerBody>
                                <Divider orientation='horizontal' />
                                <Center height='50px'>
                                    <Link as={NextLink} href='/' fontSize='xl'>
                                        Videos
                                    </Link>
                                </Center>
                                <Divider orientation='horizontal' />
                                <Center height='50px'>
                                    <Link as={NextLink} href='/' fontSize='xl'>
                                        Articles
                                    </Link>
                                </Center>
                                <Divider orientation='horizontal' />
                                <Center height='50px'>
                                    <Link as={NextLink} href='/' fontSize='xl'>
                                        Tools
                                    </Link>
                                </Center>
                                <Divider orientation='horizontal' />
                                <Center height='50px'>
                                    <Link as={NextLink} href='/' fontSize='xl'>
                                        Events
                                    </Link>
                                </Center>
                                <Divider orientation='horizontal' />
                                <Center height='50px'>
                                    <Link as={NextLink} href='/' fontSize='xl'>
                                        Humour
                                    </Link>
                                </Center>
                                <Divider orientation='horizontal' />
                                <DrawerFooter marginTop={100} bgColor='#FCB22E' borderRadius={10}>
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
