import { useState } from 'react'
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
  } from "@chakra-ui/react";

  // export const getStaticProps = async () => {
  //   const res = await fetch ('/media');
  //   const data = await res.json();

  //   return {
  //     props: { media: data}
  //   }

  // }

function UploadModal({ uploadModalOpen, openUploadModal, closeUploadModal}) {
    const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();

    const media = {title, description}

    const response = await fetch("/media", {
        method: "POST",
        body: JSON.stringify(media),
        headers: {
            "Content-Type": "application/json",
        },
    });

    const json = await response.json();

    if (!response.ok) {
        setError(json.error)
    }

    if (response.ok){
    console.log(`Title: ${title} description: ${description}`);
    setTitle();
    setDescription();
    setError(null);
    }
    closeUploadModal();
  };

    return (
    <div>
        <Modal isOpen={uploadModalOpen} onClose={closeUploadModal} isCentered>
      <ModalOverlay
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
      <ModalContent
      >
        <ModalHeader>Resource Information</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="title" value={title} onChange={handleTitleChange} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Input
              type="description"
              value={description}
              onChange={handleDescriptionChange}
            />
          </FormControl>

        </ModalBody>
        <ModalFooter alignItems='center'>
          <Button mr={3} bg="#FCB22E" onClick={handleSubmit}>
            Submit
          </Button>

        </ModalFooter>
      </ModalContent>
    </Modal>
    </div>
  )
}

export default UploadModal
