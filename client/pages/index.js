import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '../src/components/Navbar';
import FeaturedBar from '../src/components/featured-section/FeatureBar';
import FeaturedVideos from '../src/components/featured-section/FeaturedVideos';
import EventBar from '../src/components/event/EventBar';
import Events from '../src/components/event/[Events]';
import ArticlesSection from '@/components/[ArticlesSection]';
import TodayBar from '@/components/todays-pic/TodayBar';
import TodayPic from '@/components/todays-pic/[TodayPic]';
import Footer from '@/components/Footer';

const Page = ({ featuredVideos }) => {
    return (
        <ChakraProvider>
            <Navbar />
            <FeaturedBar />
            <FeaturedVideos videos={featuredVideos} />
            <EventBar />
            <Events />
            <ArticlesSection />
            <TodayBar />
            <TodayPic />
            <Footer />
        </ChakraProvider>
    );
};

export async function getServerSideProps() {
    const res = await fetch("http://localhost:5001/media/");
    const resources = await res.json();

    const allVideos = resources.media.filter(
        (item) => item.mediaCategory === "Video"
    );

    const featuredVideos = allVideos.slice(-4);

    return {
        props: {
            featuredVideos: featuredVideos,
        },
    };
}

export default Page;
