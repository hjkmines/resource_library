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

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignup = async () => {
    try {
      const response = await fetch('/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        closeSignupModal();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
    } catch (error) {
      console.error(error.message);
  }
};

return (
  <Modal
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
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Last name</FormLabel>
          <Input
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type='email'
            value={email}
            onChange={handleEmailChange}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type='password'
            value={password}
            onChange={handlePasswordChange}
          />
        </FormControl>
      </ModalBody>
      <ModalFooter>
        <Button bg="#FCB22E" mr={3} onClick={handleSignup}>
          Save
        </Button>
        <Button onClick={closeSignupModal}>Cancel</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);
}

export default SignupModal;