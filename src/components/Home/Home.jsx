import React from 'react';
import {
  Button,
  Heading,
  Stack,
  VStack,
  Image,
  Box,
  HStack,
} from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import './home.css';
import { Link } from 'react-router-dom';

import vg from '../../assets/images/bg.png';
import { SiNetflix, SiAmazon } from 'react-icons/si';

import { CgYoutube, CgGoogle } from 'react-icons/cg';
import { DiAws } from 'react-icons/di';

import vid from '../../assets/videos/cinematiUniverse.mp4';
const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height={'100%'}
          justifyContent={['center', 'space-between']}
          alignItems={'center'}
          spacing={['16', '56']}
        >
          <VStack
            width={'full'}
            alignItems={['center', 'flex-end']}
            spacing={'4'}
          >
            <Heading children=" THE CINEMATIC UNIVERSE" size={'2xl'} />
            <Text
              textAlign={['center', 'left']}
              children="Your Gateway to Blockbusters and Hidden Gems!"
              fontFamily={'cursive'}
              fontSize={'large'}
            />
            <Link to={'/movies'}>
              <Button size={'lg'} colorScheme="purple">
                Explore Now
              </Button>
            </Link>
          </VStack>
          <Image
            className="vector-graphics"
            boxSize={'md'}
            src={vg}
            objectFit={'contain'}
          />
        </Stack>
      </div>

      <Box padding={'8'} bg={'blackAlpha.800'}>
        <Heading
          children="OUR PARTNERS"
          textAlign={'center'}
          fontFamily={'body'}
          color={'purple.400'}
        />
        <HStack className="brandsBanner" justifyContent={'space-evenly'} mt={4}>
          <SiNetflix />
          <CgYoutube />
          <SiAmazon />
          <CgGoogle />
        </HStack>
      </Box>

      <div className="container2">
        <video
          controls
          autoPlay
          loop
          controlsList="nodownload nofullscreen noremoteplayback noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={vid}
        ></video>
      </div>
    </section>
  );
};

export default Home;
