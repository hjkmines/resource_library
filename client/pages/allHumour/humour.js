import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Banner from '@/components/humour-section/Banner';
import HumourBar from '@/components/humour-section/HumourBar';
import Memes from '@/components/humour-section/Memes';

const Page = () => {
	return (
		<ChakraProvider>
			<Navbar />
			<HumourBar />
			<Banner />
			<Memes />
			<Footer />
		</ChakraProvider>
	);
};

export default Page;
