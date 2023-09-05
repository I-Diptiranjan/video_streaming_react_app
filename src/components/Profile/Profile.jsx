import {
  Avatar,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  VStack,
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
  Input,
  ModalFooter,
  useDisclosure,
  ModalContent,
  ModalHeader,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import st from '../../assets/images/st.jpeg';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { fileUploadCss } from '../Auth/Register';
import {
  updateProfile,
  updateProfilePic,
  removeFromPlaylist,
} from '../../redux/Actions/profile';
import { useDispatch, useSelector } from 'react-redux';
import { cancelSubscripton, getMyProfile } from '../../redux/Actions/user';
import Loader from '../Layout/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';

const Profile = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message, error, loading } = useSelector(state => state.profile);
  const {
    message: msg,
    error: err,
    loading: load,
  } = useSelector(state => state.subscription);
  const changeImageSubmitHandler = async (e, image) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('file', image);
    await dispatch(updateProfilePic(myForm));
    dispatch(getMyProfile());
  };

  const removeFromPlaylistHandler = async id => {
    dispatch(removeFromPlaylist(id));
  };

  const cancelSubscriptionHandler = async id => {
    await dispatch(cancelSubscripton());
  };

  useEffect(() => {
    if (message) {
      dispatch({ type: 'clearMessage' });
      dispatch(getMyProfile());
    }
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (msg) {
      toast.success(msg);
      dispatch({ type: 'clearMessage' });
      dispatch(getMyProfile());
    }
    if (err) {
      toast.error(err);
      dispatch({ type: 'clearError' });
    }
  }, [dispatch, error, message, msg, err]);

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Container maxW={'container.lg'} py={'8'} minH={'95vh'}>
      <Heading children="Profile" m={'8'} textTransform={'uppercase'} />
      <Stack
        justifyContent={'flex-start'}
        direction={['column', 'row']}
        alignItems={['center']}
        spacing={['8', '16']}
        padding={'8'}
      >
        <VStack>
          <Avatar boxSize={'48'} src={user.avtar.url} />
          <Button colorScheme="purple" variant={'ghost'} onClick={onOpen}>
            Change Photo
          </Button>
        </VStack>
        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text fontWeight={'bold'}>Name</Text>
            <Text>{user.name}</Text>
          </HStack>
          <HStack>
            <Text fontWeight={'bold'}>Email</Text>
            <Text>{user.email}</Text>
          </HStack>
          <HStack>
            <Text fontWeight={'bold'}>Created Since</Text>
            <Text>{user.createdAt.split('T')[0]}</Text>
          </HStack>

          {user.role !== 'admin' && (
            <HStack>
              <Text fontWeight={'bold'}>Subscription</Text>
              {user.subscription && user.subscription.status === 'active' ? (
                <Button
                  color={'red'}
                  variant={'unstyled'}
                  onClick={cancelSubscriptionHandler}
                  isLoading={load}
                >
                  Cancel Subscription
                </Button>
              ) : (
                <Link to={'/subscribe'}>
                  <Button colorScheme="purple" variant={'solid'}>
                    Subscribe
                  </Button>
                </Link>
              )}
            </HStack>
          )}

          <Stack direction={['column', 'row']} alignItems={['center']}>
            <Link to={'/updateprofile'}>
              <Button>Update Profile</Button>
            </Link>
            <Link to={'/changepassword'}>
              <Button>Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>
      <Heading children="Playlist" my={8} size={'md'} />
      {user.playlist.length > 0 && (
        <Stack
          direction={['column', 'row']}
          alignItems={'center'}
          flexWrap={'wrap'}
          p={4}
        >
          {user.playlist.map(element => (
            <VStack w={48} m={2} key={element.movie}>
              <Image
                boxSize={'full'}
                objectFit={'contain'}
                src={element.poster}
              />
              <HStack>
                <Link to={`/movie/${element.movie}`}>
                  <Button variant={'ghost'} colorScheme="purple">
                    Watch Now
                  </Button>
                </Link>
                <Button
                  variant={'unstyled'}
                  onClick={() => removeFromPlaylistHandler(element.movie)}
                  isLoading={loading}
                >
                  <RiDeleteBin7Fill />
                </Button>
              </HStack>
            </VStack>
          ))}
        </Stack>
      )}
      <ChangePhotoBox
        isOpen={isOpen}
        onClose={onClose}
        changeImageSubmitHandler={changeImageSubmitHandler}
      />
      <Toaster />
    </Container>
  );
};

export default Profile;

function ChangePhotoBox({ isOpen, onClose, changeImageSubmitHandler }) {
  const [imagePrev, setImagePrev] = useState('');
  const [image, setImage] = useState('');
  const { loading } = useSelector(state => state.profile);
  const changeImage = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const closeHandler = () => {
    onClose();
    setImage('');
    setImagePrev('');
  };

  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay backdropFilter={'blur(10px)'} />
      <ModalContent margin={8}>
        <ModalHeader>Change Image</ModalHeader>
        <ModalCloseButton onClick={closeHandler} />
        <ModalBody>
          <Container>
            <form onSubmit={e => changeImageSubmitHandler(e, image)}>
              <VStack spacing={8} mt={8}>
                <Avatar boxSize={40} src={imagePrev} />
                <Input
                  type="file"
                  css={{ '&::file-selector-button': fileUploadCss }}
                  onChange={changeImage}
                />
                <Button
                  w={'full'}
                  colorScheme="purple"
                  type="submit"
                  isLoading={loading}
                >
                  Change
                </Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button mr={3} onClick={closeHandler}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
