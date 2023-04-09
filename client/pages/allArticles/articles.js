import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Page = () => {
    return (
        <ChakraProvider>
            <Navbar />
            <Footer />
        </ChakraProvider>
    );
};

export default Page;
