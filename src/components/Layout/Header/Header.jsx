import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { TiThMenu } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/Actions/user';

const LinkButton = ({ name, url, onClose }) => {
  return (
    <Link to={url} onClick={onClose}>
      <Button variant={'ghost'}>{name}</Button>
    </Link>
  );
};

const Header = ({ isAuthenticated = false, user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();

  const logoutHandler = () => {
    onClose();
    dispatch(logout());
  };
  return (
    <>
      <Box display={'flex'} justifyContent={'flex-end'} m={3}>
        <ColorModeSwitcher />
      </Box>
      <Button
        colorScheme="purple"
        width={'12'}
        height={'12'}
        rounded={'full'}
        position={'fixed'}
        top={'3'}
        left={'3'}
        zIndex={'overlay'}
        onClick={onOpen}
      >
        <TiThMenu />
      </Button>

      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay backdropFilter={'blur(2px)'} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'4px'}>
            THE CINEMATIC UNIVERSE
          </DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'} spacing={4}>
              <LinkButton onClose={onClose} url={'/'} name={'Home'} />
              <LinkButton
                onClose={onClose}
                url={'/movies'}
                name={'Browse Movies / Series'}
              />
              <LinkButton
                onClose={onClose}
                url={'/request'}
                name={'Request A Movie / Series'}
              />
              <LinkButton onClose={onClose} url={'/about'} name={'About'} />
              <LinkButton
                onClose={onClose}
                url={'/contact'}
                name={'Contact Us'}
              />
            </VStack>

            <HStack
              justifyContent={'space-evenly'}
              position={'absolute'}
              bottom={'2rem'}
              width={'80%'}
            >
              {isAuthenticated ? (
                <>
                  <VStack>
                    <HStack>
                      <Link to={'/profile'} onClick={onClose}>
                        <Button variant={'ghost'} colorScheme="purple">
                          Profile
                        </Button>
                      </Link>
                      <Button variant={'ghost'} onClick={logoutHandler}>
                        Logout
                      </Button>
                    </HStack>
                    {user && user.role === 'admin' && (
                      <Link to={'/admin/dashboard'} onClick={onClose}>
                        <Button>Admin Dashboard</Button>
                      </Link>
                    )}
                  </VStack>
                </>
              ) : (
                <>
                  <Link to={'/login'} onClick={onClose}>
                    <Button colorScheme="purple">Login</Button>
                  </Link>
                  OR
                  <Link to={'/register'} onClick={onClose}>
                    <Button colorScheme="purple">Sign Up</Button>
                  </Link>
                </>
              )}
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
