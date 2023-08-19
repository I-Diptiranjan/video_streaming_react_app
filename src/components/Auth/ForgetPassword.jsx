import {
  Container,
  Heading,
  Box,
  FormLabel,
  Input,
  Button,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  return (
    <Container mt={40} h={'90vh'} py={20}>
      <VStack>
        <Heading children="Forget PassWord" textTransform={'uppercase'} />
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
          <Box>
            <Button
              variant={'solid'}
              justifyContent={'center'}
              alignItems={'center'}
              colorScheme="purple"
              type="submit"
              w={'full'}
            >
              Send Forget Password Link
            </Button>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default ForgetPassword;
