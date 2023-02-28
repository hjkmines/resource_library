import { ChakraProvider, Box } from '@chakra-ui/react';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Navbar from '../src/components/Navbar';

const Page = () => {
    return (
        <ChakraProvider>
            <Navbar />
        </ChakraProvider>
    );
};

export default Page;
