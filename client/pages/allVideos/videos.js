import { ChakraProvider } from '@chakra-ui/react';
import Videos from '@/components/[Videos]';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Page = ({ allVideos }) => {
    return (
        <ChakraProvider>
            <Navbar />
            <Videos allVideos={allVideos} />
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

    return {
        props: {
            allVideos: allVideos,
        },
    };
}

export default Page;
