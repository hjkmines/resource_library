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
  useToast,
  Textarea,
} from "@chakra-ui/react";
import { CheckIcon, WarningIcon } from "@chakra-ui/icons";

// export const getStaticProps = async () => {
//   const res = await fetch ('/media');
//   const data = await res.json();

//   return {
//     props: { media: data}
//   }

// }

function UploadModal({ uploadModalOpen, openUploadModal, closeUploadModal }) {
  const [title, setTitle] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [description, setDescription] = useState("");
  const [mediaCategory, setMediaCategory] = useState("");
  const [error, setError] = useState(null);
  const [isloading, setIsLoading] = useState(true);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleVideoChange = (event) => {
    setVideoLink(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleMediaCategoryChange = (event) => {
    setMediaCategory(event.target.value);
  };

  //to signal error messages
  const isError = error === "";

  //Toast notifications
  const toast = useToast();

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
      toast({
        title: "Missing information",
        description: "Please correct the following information",
        duration: 5000,
        isClosable: true,
        status: "error",
        position: "top",
        icon: <WarningIcon />,
      });
    }

    if (response.ok) {
      console.log(`Title: ${title} description: ${description}`);
      setTitle();
      setDescription();
      setMediaCategory();
      setError(null);
      toast({
        title: "Successfully Uploaded",
        description: "We received your submission",
        duration: 5000,
        isClosable: true,
        status: "success",
        position: "top",
        icon: <CheckIcon />,
      });
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
            <FormControl isInvalid={isError}>
              <FormLabel>Name</FormLabel>
              <Input type="title" value={title} onChange={handleTitleChange} />
              {!isError ? (
                <FormHelperText>
                  Enter name of media you'd like to submit.
                </FormHelperText>
              ) : (
                <FormErrorMessage>Name is required.</FormErrorMessage>
              )}
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Video Link</FormLabel>
              <Input
                type="videolink"
                value={videoLink}
                onChange={handleVideoChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
                type="description"
                value={description}
                onChange={handleDescriptionChange}
              />
              {!isError ? (
                <FormHelperText>Enter a description.</FormHelperText>
              ) : (
                <FormErrorMessage>Description is required.</FormErrorMessage>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Type of Media</FormLabel>
              <Select
                placeholder="What media are you uploading?"
                value={mediaCategory}
                onChange={handleMediaCategoryChange}
              >
                <option>Video</option>
                <option>Article</option>
                <option>Event</option>
                <option>Humor</option>
              </Select>
              {!isError ? (
                <FormHelperText>Select an option</FormHelperText>
              ) : (
                <FormErrorMessage>An option is required.</FormErrorMessage>
              )}
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
