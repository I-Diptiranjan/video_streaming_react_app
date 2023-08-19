import {
  Button,
  Container,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
  Image,
} from '@chakra-ui/react';
import st from '../../assets/images/st.jpeg';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Movie = ({
  views,
  title,
  image,
  id,
  addToPlaylistHandler,
  provider,
  description,
  episods,
}) => {
  return (
    <VStack className="movie" alignItems={['center', 'flex-start']}>
      <Image src={image} boxSize={60} objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW={'200px'}
        fontFamily={'sans-serif'}
        noOfLines={2}
        children={title}
        size={'sm'}
      />
      <Text noOfLines={2} children={description} w={60} />
      <HStack>
        <Text
          children={'Provider'}
          fontWeight={'bold'}
          textTransform={'uppercase'}
        />
        <Text children={provider} fontFamily={'cursive'} />
      </HStack>
      <Heading
        textAlign={'center'}
        children={`Episodes : ${episods}`}
        size={'xs'}
        textTransform={'uppercase'}
      />
      <Heading
        textAlign={'center'}
        children={`Views : ${views}`}
        size={'xs'}
        textTransform={'uppercase'}
      />
      <Stack direction={['column', 'row']} alignItems={'center'}>
        <Link to={`/movie/${id}`}>
          <Button colorScheme="purple"> Watch Now</Button>
        </Link>
        <Button
          variant={'outline'}
          colorScheme="purple"
          onClick={() => addToPlaylistHandler(id)}
        >
          Add to Playlist
        </Button>
      </Stack>
    </VStack>
  );
};

const Movies = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
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
  const addToPlaylistHandler = () => {
    alert('Added to PlayList');
  };

  return (
    <Container minH={'95vh'} maxW={'container.lg'} py={'8'}>
      <Heading children="All Movies / Series" m={'6'} />
      <Input
        placeholder="Search a Movie / Series"
        focusBorderColor={'purple.600'}
        onChange={e => setKeyword(e.target.value)}
        type="text"
        borderColor={'purple.300'}
      />
      <HStack
        overflowX={'auto'}
        py={'6'}
        sx={{
          '&::-webkit-scrollbar': {
            height: '8px',
            borderRadius: '8px',
            backgroundColor: `rgba(0, 0, 0, 0.05)`,
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: `purple.300`,
          },
        }}
      >
        {categories.map((cat, index) => (
          <Button
            key={index}
            minW={['20', '60']}
            onClick={() => setCategory(cat)}
          >
            <Text children={cat} />
          </Button>
        ))}
      </HStack>
      <Stack
        direction={['column', 'row']}
        flexWrap={'wrap'}
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <Movie
          title={'Stranger Things 2'}
          description={
            'The series was created by the Duffer Brothers, who also serve as executive producers along with Shawn Levy, Dan Cohen and Iain Paterson'
          }
          views={'100k'}
          image={st}
          provider={'Netflix'}
          episods={9}
          addToPlaylistHandler={addToPlaylistHandler}
        />
      </Stack>
    </Container>
  );
};

export default Movies;
