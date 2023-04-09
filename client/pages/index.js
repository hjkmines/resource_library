import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '../src/components/Navbar';
import FeaturedBar from '../src/components/featured-section/FeatureBar';
import FeaturedVideos from '../src/components/featured-section/FeaturedVideos';
import EventBar from '../src/components/event/EventBar';
import Events from '../src/components/event/[Events]';
import ArticlesSection from '@/components/[ArticlesSection]';
import TodayBar from '@/components/todays-pic/TodayBar';
import TodayPic from '@/components/todays-pic/TodayPic';
import Footer from '@/components/Footer';

const Page = () => {
    return (
        <ChakraProvider>
            <Navbar />
            <FeaturedBar />
            <FeaturedVideos />
            <EventBar />
            <Events />
            <ArticlesSection />
            <TodayBar />
            <TodayPic />
            <Footer />
        </ChakraProvider>
    );
};

export default Page;
