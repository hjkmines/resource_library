import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '../src/components/Navbar';
import FeaturedBar from '../src/components/featured-section/FeatureBar';
import FeaturedVideos from '../src/components/featured-section/FeaturedVideos';
import EventBar from '../src/components/event/EventBar';
import Events from '../src/components/event/Events';
import Footer from '../src/components/Footer';
import ArticlesSection from '@/components/ArticlesSection';



const Page = () => {
    return (
        <ChakraProvider>
            <Navbar />
            <FeaturedBar />
            <FeaturedVideos />
            <EventBar />
            <Events />
            <ArticlesSection />
            <Footer />
        </ChakraProvider>
    );
};

export default Page;
