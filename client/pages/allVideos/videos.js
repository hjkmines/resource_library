import { ChakraProvider } from '@chakra-ui/react';
import Videos from '@/components/[Videos]';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Page = () => {
    return (
        <ChakraProvider>
            <Navbar />
            <Videos />
            <Footer />
        </ChakraProvider>
    );
};

export default Page;
