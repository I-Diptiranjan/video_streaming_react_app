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

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  return (
    <Container mt={40} h={'90vh'} py={20}>
      <VStack>
        <Heading children="Reset PassWord" textTransform={'uppercase'} />
        <form action="5" style={{ width: '60%' }}>
          <Box my={6}>
            <FormLabel htmlFor="password" children="Enter Your New Password" />
            <Input
              required
              id="password"
              type="password"
              focusBorderColor="purple.400"
              placeholder="********"
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
              Reset Password
            </Button>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};
export default ResetPassword;
