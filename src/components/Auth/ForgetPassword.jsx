import {
  Container,
  Heading,
  Box,
  FormLabel,
  Input,
  Button,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { forgetPassword } from '../../redux/Actions/profile';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    dispatch(forgetPassword(email));
  };

  const { loading, message, error } = useSelector(state => state.profile);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  return (
    <Container mt={40} h={'90vh'} py={20}>
      <VStack>
        <Heading children="Forget PassWord" textTransform={'uppercase'} />
        <form onSubmit={submitHandler} style={{ width: '70%' }}>
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
              isLoading={loading}
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
