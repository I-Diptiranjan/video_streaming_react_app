import {
  Avatar,
  Container,
  Heading,
  Stack,
  VStack,
  Text,
  Button,
  Box,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { RiSecurePaymentFill } from 'react-icons/ri';

import vid from '../../assets/videos/cinematiUniverse.mp4';

const About = () => {
  return (
    <Container maxW={'container.lg'} padding="16">
      <Heading children="About Us" textAlign={['center', 'left']} />
      <Stack direction={['column', 'row']} spacing={['4', '16']} padding={8}>
        <VStack>
          <Avatar
            src="https://avatars.githubusercontent.com/u/115134901?s=400&u=1caebba7548659d7376d06d04e689d5b8e0485f7&v=4"
            boxSize={['40', '48']}
          />
          <Text color={'grey'}>Founder , The Cinematic Universe</Text>
        </VStack>
        <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
          <Heading children="Diptiranjan Sahoo" size={['md', 'xl']} />
          <Text
            children="Hii Guys .. I am Diptiranjan Sahoo. I am an undergraduate Student and a Web Developer. Currently I am Pursuing my B.Tech. degree in Computer Science and Engineering."
            textAlign={['center', 'left']}
          />
        </VStack>
      </Stack>
      <Stack margin={8} direction={['column', 'row']} alignItems={'center'}>
        <Text textAlign={['center', 'left']} fontFamily={'cursive'} m={8}>
          It is a Video Streaming Platform. Where you can see your favourite
          Movies and Web Series.
        </Text>
        <Link to={'/subscribe'}>
          <Button variant={'ghost'} colorScheme="purple">
            Checkout Our Plans
          </Button>
        </Link>
      </Stack>
      <HStack m={8} p={4}>
        <RiSecurePaymentFill />
        <Heading children="Payment Securely with Razorpay" size={'xs'} />
      </HStack>
      <Box>
        <video
          controls
          autoPlay
          loop
          controlsList="nodownload nofullscreen noremoteplayback noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={vid}
        ></video>
      </Box>
    </Container>
  );
};

export default About;
