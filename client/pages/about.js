import { ChakraProvider } from '@chakra-ui/react';
import styles from '@/styles/Home.module.css';
import Navbar from '../src/components/Navbar';
import Image from 'next/image';


const Page = () => {
    return (
        <ChakraProvider>
            <Navbar />
            <main>
                {/* <Routes></Routes> */}
                <h1>Our Hanawilo Resource Library Project</h1>
                <div className={styles.center}>
                    <Image
                        src='/logo.svg'
                        alt='Hanawilo Logo'
                        className={styles.vercelLogo}
                        width={100}
                        height={24}
                    />
                </div>
                <div className={styles.center}>
                    <div className={styles.thirteen}>
                        <Image
                            src='/next.svg'
                            alt='Next.js Logo'
                            className={styles.logo}
                            width={180}
                            height={37}
                            />
                    </div>
                </div>
            </main>
        </ChakraProvider>
    );
}

export default Page;