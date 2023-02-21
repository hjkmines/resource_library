import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '../src/components/Navbar';
import FeaturedVideos from '../src/components/featured-section/FeaturedVideos';

const Page = () => {
    return (
        <ChakraProvider>
            <Navbar />
            <FeaturedVideos />
        </ChakraProvider>
    );
};

export default Page;
