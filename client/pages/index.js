import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '../src/components/Navbar';
import FeaturedBar from '../src/components/featured-section/FeatureBar';
import FeaturedVideos from '../src/components/featured-section/FeaturedVideos';

const Page = () => {
    return (
        <ChakraProvider>
            <Navbar />
            <FeaturedBar />
            <FeaturedVideos />
        </ChakraProvider>
    );
};

export default Page;
