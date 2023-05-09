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

const LoginModal = ({ loginModalOpen, closeLoginModal, openSignupModal, setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setEmail('');
        setPassword('');
        closeLoginModal();
        setLoggedIn(true);
      } else {
        throw new Error('Invalid email or password.');
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Modal isOpen={loginModalOpen} onClose={closeLoginModal} isCentered>
      <ModalOverlay
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
      <ModalContent
      >
        <ModalHeader>Login</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={email} onChange={handleEmailChange} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter alignItems='center'>
          <Button mr={3} bg="#FCB22E" onClick={handleLogin}>
            Login
          </Button>
          <Button mr={3} bg="#A4BB9A" onClick={openSignupModal}>
            Sign Up!
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default LoginModal;