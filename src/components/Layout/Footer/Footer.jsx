import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
import React from 'react';

import {
  TiSocialGithub,
  TiSocialInstagram,
  TiSocialLinkedin,
} from 'react-icons/ti';

const Footer = () => {
  return (
    <Box p={4} minH={'10vh'} bg={'blackAlpha.900'}>
      <Stack direction={['column', 'row']}>
        <VStack
          alignItems={{ base: 'center', md: 'flex-start' }}
          width={'full'}
        >
          <Heading
            children="All Rights Reserverd"
            color={'whiteAlpha.700'}
            size={'lg'}
          />
          <Heading
            children="Diptiranjan Sahoo"
            size={'sm'}
            color={'purple.200'}
          />
        </VStack>
        <HStack
          spacing={['2', '10']}
          justifyContent={'center'}
          color={'white'}
          fontSize={'30'}
        >
          <a href="https://github.com/I-Diptiranjan" target="_blank">
            <TiSocialGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/diptiranjan-sahoo-811817234/"
            target="_blank"
          >
            <TiSocialLinkedin />
          </a>
          <a href="" target="_blank">
            <TiSocialInstagram />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
