import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import Articles from '@/components/[Articles]';
import Footer from '@/components/Footer';

const Page = () => {
    return (
        <ChakraProvider>
            <Navbar />
            <Articles />
            <Footer />
        </ChakraProvider>
    );
};

export default Page;
