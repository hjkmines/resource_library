import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import Articles from '@/components/[Articles]';
import Footer from '@/components/Footer';


// export async function getServerSideProps(context) {
//     const res = await fetch("http://localhost:5001/media");
//     const data = await res.json();
  
//   const query = context.query;
//   console.log(query)

//     return {
//       data
//     };
//   };

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
