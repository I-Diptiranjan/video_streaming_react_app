import {
  Grid,
  Heading,
  Box,
  Container,
  VStack,
  Input,
  Select,
  Image,
  Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import { fileUploadCss } from '../../Auth/Register';
import { createMovie } from '../../../redux/Actions/admin';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

const CreateMovie = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');

  const categories = [
    'Action',
    'Animation',
    'Comedy',
    'Crime',
    'Drama',
    'Experimental',
    'Fantasy',
    'Historical',
  ];

  const imageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const styleInputFile = {
    '&::file-selector-button': fileUploadCss,
  };

  const dispatch = useDispatch();
  const { loading, error, message } = useSelector(state => state.admin);
  const submitHandler = e => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('title', title);
    myForm.append('description', desc);
    myForm.append('category', category);
    myForm.append('createdBy', createdBy);
    myForm.append('file', image);

    dispatch(createMovie(myForm));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Container py={16}>
        <form onSubmit={submitHandler}>
          <Heading
            my={16}
            textAlign={['center', 'left']}
            textTransform={'uppercase'}
          >
            Upload Movie
          </Heading>
          <VStack m={'auto'} spacing={8}>
            <Input
              type="text"
              focusBorderColor="purple.400"
              placeholder="Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <Input
              type="text"
              focusBorderColor="purple.400"
              placeholder="Description"
              value={desc}
              onChange={e => setDesc(e.target.value)}
            />
            <Input
              type="text"
              focusBorderColor="purple.400"
              placeholder="Provider name"
              value={createdBy}
              onChange={e => setCreatedBy(e.target.value)}
            />
            <Select
              focusBorderColor="purple.400"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              {categories.map(item => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </Select>
            <Input
              type="file"
              css={styleInputFile}
              required
              accept="image/*"
              onChange={imageHandler}
              focusBorderColor="purple"
            />
            {image && (
              <Image src={imagePrev} boxSize={64} objectFit={'contain'} />
            )}
            <Button
              w={'full'}
              type="submit"
              children="Upload"
              colorScheme="purple"
              isLoading={loading}
            />
          </VStack>
        </form>
      </Container>
      <Sidebar />
    </Grid>
  );
};

export default CreateMovie;
