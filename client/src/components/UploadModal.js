import { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

// export const getStaticProps = async () => {
//   const res = await fetch ('/media');
//   const data = await res.json();

//   return {
//     props: { media: data}
//   }

// }

function UploadModal({ uploadModalOpen, openUploadModal, closeUploadModal }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mediaCategory, setMediaCategory] = useState("");
  const [error, setError] = useState(null);
  const [isloading, setIsLoading] = useState(true);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleMediaCategoryChange= (event) => {
    setMediaCategory(event.target.value);
  };

  const isError = error === ''

  const handleSubmit = async (e) => {
    e.preventDefault();

    const media = { title, description, mediaCategory };

    const response = await fetch("/media", {
      method: "POST",
      body: JSON.stringify(media),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      console.log(`Title: ${title} description: ${description}`);
      setTitle();
      setDescription();
      setMediaCategory();
      setError(null);
    }
    closeUploadModal();
  };

  return (
    <div>
      <Modal isOpen={uploadModalOpen} onClose={closeUploadModal} isCentered>
        <ModalOverlay backdropFilter="blur(10px) hue-rotate(90deg)" />
        <ModalContent>
          <ModalHeader>Resource Information</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired isInvalid={isError}>
              <FormLabel>Name</FormLabel>
              <Input type="title" value={title} onChange={handleTitleChange} />
              {!isError ? (
        <FormHelperText>
          Enter name of media you'd like to submit.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
            </FormControl>
            <FormControl sRequired mt={4}>
              <FormLabel>Description</FormLabel>
              <Input
                type="description"
                value={description}
                onChange={handleDescriptionChange}
              />
            </FormControl>
            <FormControl sRequired>
              <FormLabel>Type of Media</FormLabel>
              <Select 
              placeholder="What media are you uploading?"
              value={mediaCategory}
              onChange={handleMediaCategoryChange}>
                <option>Video</option>
                <option>Article</option>
                <option>Event</option>
                <option>Humor</option>
              </Select>
            </FormControl>
          </ModalBody>
          <ModalFooter alignItems="center">
            <Button mr={3} bg="#FCB22E" onClick={handleSubmit}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default UploadModal;
