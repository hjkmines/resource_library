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
} from "@chakra-ui/react";

const SignupModal = ({ signupModalOpen, openSignupModal, closeSignupModal }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  const handleSignup = () => {
    // You can add your login logic here
    console.log(`Sign up Email: ${email} Signup Password: ${password}`);
    closeSignupModal();
  };

  return (
<Modal
        // initialFocusRef={initialRef}
        // finalFocusRef={finalRef}
        isOpen={signupModalOpen}
        onClose={closeSignupModal}
        isCentered
      >
        <ModalOverlay 
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input 
                // ref={initialRef} 
                placeholder='First name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder='Last name' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleSignup}>
              Save
            </Button>
            <Button onClick={closeSignupModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  );
}

export default SignupModal;