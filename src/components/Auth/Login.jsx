import {
  Container,
  FormLabel,
  Heading,
  VStack,
  Input,
  Box,
  Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container w={'100vw'} my={40} h={'60vh'}>
      <VStack>
        <Heading children="The Cinematic Universe" />
        <form action="5" style={{ width: '70%' }}>
          <Box my={6}>
            <FormLabel htmlFor="email" children="Enter Your Email" />
            <Input
              required
              id="email"
              type="email"
              focusBorderColor="purple.400"
              placeholder="abc@gmail.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Box>
          <Box my={6}>
            <FormLabel htmlFor="pasword" children="Enter Your Password" />
            <Input
              required
              id="password"
              type="password"
              focusBorderColor="purple.400"
              placeholder="*********"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Box>
          <Box>
            <Button
              variant={'solid'}
              justifyContent={'center'}
              alignItems={'center'}
              colorScheme="purple"
              type="submit"
              w={'full'}
            >
              Login Now
            </Button>
          </Box>
          <Box>
            <Link to={'/forgetpassword'}>
              <Button
                variant={'link'}
                fontFamily={'monospace'}
                fontStyle={'oblique'}
                textDecoration={'underline'}
                colorScheme="black"
                mt={3}
              >
                Forget Password
              </Button>
            </Link>
          </Box>
          <Box my={6}>
            Not a User ?{' '}
            <Link to="/register">
              <Button variant={'link'} colorScheme="purple">
                {' '}
                Signup
              </Button>
            </Link>{' '}
            Here
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
