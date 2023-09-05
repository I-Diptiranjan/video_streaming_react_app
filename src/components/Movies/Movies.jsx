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

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovies } from '../../redux/Actions/movie';
import { toast } from 'react-hot-toast';
import { addToPlaylist } from '../../redux/Actions/profile';
import { getMyProfile } from '../../redux/Actions/user';
import Loader from '../Layout/Loader/Loader';

const Movie = ({
  views,
  title,
  image,
  id,
  addToPlaylistHandler,
  provider,
  description,
  episods,
  loading,
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
          isLoading={loading}
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, movies, message } = useSelector(state => state.movie);

  const addToPlaylistHandler = async movieId => {
    dispatch(addToPlaylist(movieId));
  };
  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    dispatch(getAllMovies(category, keyword));
  }, [dispatch, category, keyword, error, message]);

  return (
    <Container minH={'95vh'} maxW={'container.lg'} py={'8'}>
      {loading ? (
        <Loader />
      ) : (
        <>
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
            {movies.length > 0 ? (
              movies.map(item => (
                <Movie
                  key={item._id}
                  id={item._id}
                  title={item.title}
                  description={item.description}
                  views={item.views}
                  image={item.poster.url}
                  provider={item.createdBy}
                  episods={item.numOfVideos}
                  addToPlaylistHandler={addToPlaylistHandler}
                  loading={loading}
                />
              ))
            ) : (
              <Heading children="Movie not Found" opacity={0.7} mt={16} />
            )}
          </Stack>
        </>
      )}
    </Container>
  );
};

export default Movies;
