import {
    Box,
    Flex,
    Text,
    Heading,
    Divider,
    Show,
    Hide,
} from '@chakra-ui/react';

const FeaturedBar = () => {
    return (
        <>
            <Box align='center' marginTop={20}>
                <Heading
                    fontSize={['2xl', '3xl', '4xl', '4xl']}
                    as='b'
                    style={{ letterSpacing: 25, textTransform: 'uppercase' }}
                    alignItems='center'
                    ml={7}
                >
                    Latest
                </Heading>
            </Box>
            <Show below='md'>
                <Box align='center'>
                    <Divider
                        marginTop={5}
                        orientation='horizontal'
                        w='2xs'
                        borderWidth={1}
                        borderColor='black'
                    />
                </Box>
            </Show>
            <Flex align='center' justify='space-around' mt={5}>
                <Hide below='md'>
                    <Divider
                        orientation='horizontal'
                        w={['null', 'null', '2xs', 'sm', 'md', '40em']}
                        justifyContent='baseline'
                        borderWidth={1}
                        borderColor='black'
                    />
                </Hide>
                <Text
                    style={{ letterSpacing: 5, wordWrap: 'break-word' }}
                    fontSize={['sm', 'md', 'lg', 'xl']}
                    color='gray.400'
                >
                    Featured Videos
                </Text>
                <Hide below='md'>
                    <Divider
                        orientation='horizontal'
                        w={['null', 'null', '2xs', 'sm', 'md', '40em']}
                        justifyContent='baseline'
                        borderWidth={1}
                        borderColor='black'
                    />
                </Hide>
            </Flex>
        </>
    );
};

export default FeaturedBar;
