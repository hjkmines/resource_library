import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Articles from "@/components/articles/[Articles]";
import Footer from "@/components/Footer";

const Page = ({ allArticles }) => {
  return (
    <ChakraProvider>
      <Navbar />
      <Articles allArticles={allArticles} />
      <Footer />
    </ChakraProvider>
  );
};

export default Page;

//runs on server and runs before components
export async function getServerSideProps() {
  const res = await fetch("http://localhost:5001/media/");
  const resources = await res.json();

  const allArticles = resources.media.filter(
    (item) => item.mediaCategory === "Article"
  );

  return {
    props: {
      allArticles: allArticles,
    },
  };
}
