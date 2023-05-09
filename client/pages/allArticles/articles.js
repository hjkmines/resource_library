import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Articles from "@/components/articles/[Articles]";
import Footer from "@/components/Footer";

const Page = ({ resources, files }) => {
  return (
    <ChakraProvider>
      <Navbar />
      <Articles resources={resources} files={files} />
      <Footer />
    </ChakraProvider>
  );
};

export default Page;

//runs on server and runs before components
export async function getServerSideProps() {
  const res = await fetch('http://localhost:5001/media/');
  const resources = await res.json();
  
  const files = resources.media.filter(
    (item) => item.mediaCategory === "Article"
  );

  return {
    props: {
      resources: resources.media,
      files: files,
    },
  };
}
