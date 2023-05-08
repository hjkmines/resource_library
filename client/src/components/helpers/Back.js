import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Flex, Heading, Spacer, Link } from '@chakra-ui/react';

const BackButton = () => {
    return (
        <>
            <Flex mt={5}>
                <Spacer />
                <Link href='/'>
                    <Heading as='h2' size='lg' mr='100'>
                        Back
                        <ArrowForwardIcon boxSize={8} ml='5' />
                    </Heading>
                </Link>
            </Flex>
        </>
    );
};

export default BackButton;
