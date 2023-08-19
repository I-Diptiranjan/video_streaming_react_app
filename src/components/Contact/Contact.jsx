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
import { Link } from 'react-router-dom';
const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  return (
    <Container w={'100vw'} my={40} h={'60vh'}>
      <VStack>
        <Heading children="Contact Us" />
        <form action="5" style={{ width: '70%' }}>
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
