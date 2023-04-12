import {
    Box,
    Flex,
    Text,
    Heading,
} from '@chakra-ui/react';
import TitleDivider from '../TitleDivider';

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
            <Flex align='center' justify='space-around' m={5}>
                <TitleDivider />
                <Text
                    style={{ letterSpacing: 5, wordWrap: 'break-word' }}
                    fontSize={['sm', 'md', 'lg', 'xl']}
                    color='gray.400'
                >
                    Featured Videos
                </Text>
                <TitleDivider />
            </Flex>
        </>
    );
};

export default FeaturedBar;
