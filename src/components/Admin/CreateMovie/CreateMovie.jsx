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

  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Container py={16}>
        <form action="">
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
              orChange={e => setTitle(e.target.value)}
            />
            <Input
              type="text"
              focusBorderColor="purple.400"
              placeholder="Description"
              value={desc}
              orChange={e => setDesc(e.target.value)}
            />
            <Input
              type="text"
              focusBorderColor="purple.400"
              placeholder="Provider name"
              value={createdBy}
              orChange={e => setCreatedBy(e.target.value)}
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
            />
          </VStack>
        </form>
      </Container>
      <Sidebar />
    </Grid>
  );
};

export default CreateMovie;
