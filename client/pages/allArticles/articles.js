import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import Articles from '@/components/[Articles]';
import Footer from '@/components/Footer';


export const getStaticProps = async () => {
    const res = await fetch("http://localhost:5001/media");
    const data = await res.json();
  
    return {
      props: { articles : data },
    };
  };

const Page = ( {articles} ) => {
    return (
        <ChakraProvider>
            <Navbar />
            {articles.map(article => (
                <Articles key={article._id} article = {article} />
            ))}
            
            <Footer />
        </ChakraProvider>
    );
};

export default Page;
