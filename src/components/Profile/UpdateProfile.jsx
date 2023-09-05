import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../redux/Actions/profile';
import toast, { Toaster } from 'react-hot-toast';
import { getMyProfile } from '../../redux/Actions/user';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = ({ user }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async e => {
    e.preventDefault();
    await dispatch(updateProfile(name, email));
    dispatch(getMyProfile());
    navigate('/profile');
  };

  const { loading, message, error } = useSelector(state => state.profile);

  useEffect(() => {
    if (error) {
      dispatch({ type: 'clearError' });
    }
    if (message) {
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  return (
    <Container py={16} minH={'92vh'}>
      <form onSubmit={submitHandler}>
        <Heading
          my={16}
          textAlign={['center', 'left']}
          textTransform={'uppercase'}
        >
          Update Profile
        </Heading>
        <VStack spacing={8}>
          <Input
            type="text"
            focusBorderColor="purple.400"
            placeholder="Name"
            onChange={e => setName(e.target.value)}
            value={name}
          />
          <Input
            type="email"
            focusBorderColor="purple.400"
            placeholder="Emaik"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <Button
            w={'full'}
            colorScheme="purple"
            type="submit"
            isLoading={loading}
          >
            Update
          </Button>
        </VStack>
      </form>
      <Toaster />
    </Container>
  );
};

export default UpdateProfile;
