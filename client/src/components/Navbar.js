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
} from '@chakra-ui/react';
import { FiSearch, FiUploadCloud } from 'react-icons/fi';
import { useDisclosure } from '@chakra-ui/hooks';
import { useState } from 'react';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [placement, setPlacement] = useState('right');

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
                <Button colorScheme='blue' onClick={onOpen}>
                    Menu
                </Button>
                <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerHeader borderBottomWidth='1px'>
                            Basic Drawer
                        </DrawerHeader>
                        <DrawerBody>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Show>
        </>
    );
};

export default Navbar;
