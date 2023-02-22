import { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const LoginModal = ({ loginModalOpen, openLoginModal, closeLoginModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // You can add your login logic here
    console.log(`Email: ${email} Password: ${password}`);
    closeLoginModal();
  };

  return (
    <Modal isOpen={loginModalOpen} onClose={closeLoginModal} isCentered>
      <ModalOverlay 
        // bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
      <ModalContent>
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
          <Button mt={8} colorScheme="blue" onClick={handleLogin}>
            Login
          </Button>
          <p>Not a Member yet?</p>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default LoginModal;