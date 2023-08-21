import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Box,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export const fileUploadCss = {
  cursor: 'pointer',
  width: '110%',
  marginLeft: '-5%',
  border: 'none',
  height: '100%',
  color: 'black',
  backgroundColor: 'white',
  fontWeight: 'bold',
  borderRadius: '10px',
};

const styleInputFile = {
  '&::file-selector-button': fileUploadCss,
};

export default function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [imagePrev, setImagePrev] = useState('');
  const [image, setImage] = useState('');

  const imageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  return (
    <form>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          rounded={'xl'}
          p={6}
          my={12}
          justifyContent={'center'}
        >
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '2xl', sm: '3xl' }}
            justifyContent={'center'}
            mb={10}
            ml={55}
          >
            REGISTER NOW !!
          </Heading>
          <FormControl id="userName">
            <Stack direction={['column', 'row']} spacing={6}>
              <Center>
                <Avatar size="xl" src={imagePrev}></Avatar>
              </Center>
              <Center w="full">
                <Input
                  type="file"
                  css={styleInputFile}
                  required
                  accept="image/*"
                  onChange={imageHandler}
                  focusBorderColor="purple"
                />
              </Center>
            </Stack>
          </FormControl>
          <FormControl id="userName" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="UserName"
              _placeholder={{ color: 'gray.500' }}
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: 'gray.500' }}
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="password"
              _placeholder={{ color: 'gray.500' }}
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </FormControl>
          <Stack spacing={6} direction={['column', 'row']}>
            <Button
              bg={'purple.400'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'purple.500',
              }}
              type="submit"
            >
              Submit
            </Button>
          </Stack>
          <Box my={6}>
            Already Registered ?{' '}
            <Link to="/login">
              <Button variant={'link'} colorScheme="purple">
                {' '}
                Login
              </Button>
            </Link>{' '}
            Here
          </Box>
        </Stack>
      </Flex>
    </form>
  );
}
