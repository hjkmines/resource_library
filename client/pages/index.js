import { ChakraProvider } from '@chakra-ui/react';
import styles from '@/styles/Home.module.css';
import Navbar from '../src/components/Navbar';
import Image from 'next/image';

const Page = () => {
    return (
        <ChakraProvider>
            <Navbar />
            <div align='center'>
                <Image
                    src='/next.svg'
                    alt='Next.js Logo'
                    className={styles.thirteen}
                    width={180}
                    height={37}
                />
            </div>
        </ChakraProvider>
    );
};

export default Page;
