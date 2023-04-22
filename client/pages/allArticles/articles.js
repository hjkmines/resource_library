import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import Articles from '@/components/articles/[Articles]';
import Footer from '@/components/Footer';

const Page = ( { title } ) => {
    return (
        <ChakraProvider>
            <Navbar />
            <Articles title={title} />
            <Footer />
        </ChakraProvider>
    );
};

export default Page;

//runs on server and runs before components
export async function getServerSideProps() {
    // const query = context.query;

    // const { id } = query;

    const res = await fetch(`http://localhost:5001/media/`);
    const data = await res.json();
   
 console.log(data)
  
  
    return {
      props: { 
        data: data },
    };
  };
