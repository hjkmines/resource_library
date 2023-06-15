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
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Select,
  useToast,
  Textarea,
} from "@chakra-ui/react";
import { CheckIcon, WarningIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

function UploadModal({
  uploadModalOpen,
  openUploadModal,
  closeUploadModal,
  loggedIn,
}) {
  const [title, setTitle] = useState("");
  const [resourceLink, setResourceLink] = useState("");
  // const [description, setDescription] = useState("");
  const [mediaCategory, setMediaCategory] = useState("");
  const [errors, setErrors] = useState([]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleResourceChange = (event) => {
    setResourceLink(event.target.value);
  };

  // const handleDescriptionChange = (event) => {
  //   setDescription(event.target.value);
  // };

  const handleMediaCategoryChange = (event) => {
    setMediaCategory(event.target.value);
  };

 //redirect to the same page with updates
  const router = useRouter();

  //to signal error messages
  // let isError = errors === "";

  //Toast notifications
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const media = { title, description, resourceLink, mediaCategory };

    try {
      const response = await fetch("/media", {
        method: "POST",
        body: JSON.stringify(media),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();

      if (response.ok) {
        console.log(`Title: ${title} description: ${description}`);
        setTitle();
        setResourceLink();
        // setDescription();
        setMediaCategory();
        setErrors([]);
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
    } catch (error) {
      setErrors(error);
      console.log(error);
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
    router.push("/");
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
            {loggedIn ? (
              <>
                {/* Title */}
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="title"
                    value={title}
                    onChange={handleTitleChange}
                  />
                  {/* {!isError ? (
                    <FormHelperText>Enter name of media.</FormHelperText>
                  ) : (
                    <FormErrorMessage>{errors.title}</FormErrorMessage>
                  )} */}
                </FormControl>

                {/* Resource Link */}
                <FormControl mt={4} isRequired>
                  <FormLabel>Resource Link</FormLabel>
                  <Input
                    type="resourceLink"
                    value={resourceLink}
                    onChange={handleResourceChange}
                  />
                  {/* {!isError ? (
                    <FormHelperText>Paste in link.</FormHelperText>
                  ) : (
                    <FormErrorMessage>Link is required.</FormErrorMessage>
                  )} */}
                </FormControl>

                {/* Description */}
                {/* <FormControl mt={4} isRequired>
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    type="description"
                    value={description}
                    onChange={handleDescriptionChange}
                  /> */}
                  {/* {!isError ? (
                    <FormHelperText>Enter a description.</FormHelperText>
                  ) : (
                    <FormErrorMessage>
                      Description is required.
                    </FormErrorMessage>
                  )} */}
                {/* </FormControl> */}
                <br />
                {/* Media options*/}
                <FormControl isRequired>
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
                  {/* {!isError ? (
                    <FormHelperText>Select an option</FormHelperText>
                  ) : (
                    <FormErrorMessage>An option is required.</FormErrorMessage>
                  )} */}
                </FormControl>
              </>
            ) : (
              <p>Please log in to upload a file.</p>
            )}
          </ModalBody>
          <ModalFooter alignItems="center">
            <Button mr={3} bg="#FCB22E" onClick={handleSubmit} type="submit">
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default UploadModal;
