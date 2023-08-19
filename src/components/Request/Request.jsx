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

const Request = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [movie, setMovie] = useState('');

  return (
    <Container w={'100vw'} my={40} h={'60vh'}>
      <VStack>
        <Heading children="Request a Movie / Series" />
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
            <FormLabel
              htmlFor="movie"
              children="Enter Your Requested Movies / Series"
            />
            <Textarea
              required
              id="movie"
              focusBorderColor="purple.400"
              placeholder="my message...."
              value={movie}
              onChange={e => setMovie(e.target.value)}
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
              Request
            </Button>
          </Box>

          <Box my={6}>
            Want to See Our Movies / Series{' '}
            <Link to="/movies">
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

export default Request;
