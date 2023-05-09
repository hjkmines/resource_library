import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import Articles from '@/components/articles/[Articles]';
import Footer from '@/components/Footer';

const Page = ( { resources, articles } ) => {


    return (
        <ChakraProvider>
            <Navbar />
            <Articles resources={resources} articles={articles}/>
            <Footer />
        </ChakraProvider>
    );
};

export default Page;

//runs on server and runs before components
export async function getServerSideProps() {
  

    const res = await fetch(`http://localhost:5001/media/`);
    const resources = await res.json();
    const articles = resources.media.filter(item => item.mediaCategory === 'Article');

  //console.log(resources.media.title[0])
// console.log(resources)
  
    // if (resources.media.mediaCategory === 'Article') {
    //     return {
    //         props: {
    //             article : resources.media.mediaCategory
    //         }
    //     }
    // }
  
    return {

      props: { 
        resources: resources.media,
    articles: articles},
    };
  };