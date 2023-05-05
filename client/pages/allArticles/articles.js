import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import Articles from '@/components/articles/[Articles]';
import Footer from '@/components/Footer';

const Page = ( { resources } ) => {
    return (
        <ChakraProvider>
            <Navbar />
            <Articles resources={resources} />
            <Footer />
        </ChakraProvider>
    );
};

export default Page;

//runs on server and runs before components
export async function getServerSideProps() {
  

    const res = await fetch(`http://localhost:5001/media/`);
    const resources = await res.json();
   
//  console.log(resources)
  
  
    return {
      props: { 
        resources: resources.media },
    };
  };