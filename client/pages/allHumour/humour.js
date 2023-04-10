import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Humour from '@/components/Humour';

const Page = () => {
	return (
		<ChakraProvider>
			<Navbar />
			<Humour />
			<Footer />
		</ChakraProvider>
	);
};

export default Page;
