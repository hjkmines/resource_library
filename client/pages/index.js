import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '../src/components/Navbar';
import FeaturedBar from '../src/components/featured-section/FeatureBar';
import FeaturedVideos from '../src/components/featured-section/FeaturedVideos';
import ArticlesSection from '@/components/ArticlesSection';
import Footer from '@/components/Footer';

const Page = () => {
    return (
        <ChakraProvider>
            <Navbar />
            <FeaturedBar />
            <FeaturedVideos />
            <ArticlesSection />
            <Footer />
        </ChakraProvider>
    );
};

export default Page;
