import { ChakraProvider } from '@chakra-ui/react';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Navbar from '../src/components/Navbar';
import ArticlesSection from '@/components/ArticlesSection';

const Page = () => {
    return (
        <ChakraProvider>
            <Navbar />
            <ArticlesSection />
            {/* <div align='center'>
                <Image
                    src='/next.svg'
                    alt='Next.js Logo'
                    className={styles.thirteen}
                    width={180}
                    height={37}
                />
            </div> */}
        </ChakraProvider>
    );
};

export default Page;
