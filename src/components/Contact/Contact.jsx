import {
  Container,
  FormLabel,
  Heading,
  VStack,
  Input,
  Box,
  Button,
  Textarea,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { contact } from '../../redux/Actions/others';
const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();
  const {
    error,
    loading,
    message: statemessage,
  } = useSelector(state => state.other);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (statemessage) {
      toast.success(statemessage);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, statemessage, error]);

  const submitHandler = e => {
    e.preventDefault();
    dispatch(contact(name, email, message));
  };

  return (
    <Container w={'100vw'} my={40} h={'60vh'}>
      <VStack>
        <Heading children="Contact Us" />
        <form onSubmit={submitHandler} style={{ width: '70%' }}>
          <Box my={6}>
            <FormLabel htmlFor="name" children="Enter Your Name" />
            <Input
              required
              id="name"
              type="text"
              focusBorderColor="purple.400"
              placeholder="abc"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </Box>
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
            <FormLabel htmlFor="message" children="Enter Your Message" />
            <Textarea
              required
              id="message"
              focusBorderColor="purple.400"
              placeholder="my message...."
              value={message}
              onChange={e => setMessage(e.target.value)}
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
              Contact Now
            </Button>
          </Box>

          <Box my={6}>
            Request a Movie ?{' '}
            <Link to="/request">
              <Button variant={'link'} colorScheme="purple">
                {' '}
                Click{' '}
              </Button>
            </Link>{' '}
            Here
          </Box>
        </form>
      </VStack>
    </Container>
  );
};
export default Contact;
