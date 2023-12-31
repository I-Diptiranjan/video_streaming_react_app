import {
  Container,
  Heading,
  VStack,
  Box,
  Text,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { RiCheckboxCircleFill, RiErrorWarningFill } from 'react-icons/ri';

import { Link } from 'react-router-dom';

const PaymentFailed = () => {
  return (
    <Container h={'90vh'}>
      <VStack justifyContent={'center'} h={'full'} spacing={'4'}>
        <RiErrorWarningFill size={'5rem'} />
        <Heading>Payment Failed</Heading>
        <Link to={'/subscribe'}>
          <Button variant={'outline'} colorScheme="purple">
            Try Again
          </Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default PaymentFailed;
