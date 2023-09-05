import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import vid from '../../assets/videos/cinematiUniverse.mp4';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieEpisodes } from '../../redux/Actions/movie';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Loader from '../Layout/Loader/Loader';

const MoviePage = ({ user }) => {
  const [episodeNumber, setEpisodeNumber] = useState(0);

  const dispatch = useDispatch();
  const params = useParams();

  const { episodes, loading } = useSelector(state => state.movie);
  console.log(episodes);

  useEffect(() => {
    dispatch(getMovieEpisodes(params.id));
  }, [dispatch, params.id]);

  if (
    user.role !== 'admin' &&
    (user.subscription === undefined || user.subscription.status !== 'active')
  ) {
    return <Navigate to={'/subscribe'} />;
  }

  return loading ? (
    <Loader />
  ) : (
    <Grid
      minH={'90vh'}
      templateColumns={['1fr', '3fr 1fr']}
      ml={{ base: 'none', md: '8' }}
    >
      {episodes && episodes.length > 0 ? (
        <>
          <Box>
            <video
              width={'100%'}
              controls
              autoPlay
              controlsList="nodownload noremoteplayback"
              disablePictureInPicture
              disableRemotePlayback
              src={episodes[episodeNumber].video.url}
            ></video>
            <Heading
              size={'lg'}
              m={4}
              children={`Episode-${episodeNumber + 1} , ${
                episodes[episodeNumber].title
              }`}
            />

            <Heading m={4} size={'md'}>
              Description :
            </Heading>

            <Text m={4} children={episodes[episodeNumber].description} />
          </Box>

          <VStack>
            {episodes.map((item, index) => (
              <button
                key={item._id}
                style={{
                  width: '100%',
                  padding: '1rem',
                  textAlign: 'center',
                  margin: 0,
                  borderBottom: '1px solid grey',
                }}
                onClick={() => setEpisodeNumber(index)}
              >
                <Text>
                  {index + 1} {item.title}
                </Text>
              </button>
            ))}
          </VStack>
        </>
      ) : (
        <Heading
          children="No Videos Available.We will be Uploading Soon"
          m={16}
        />
      )}
    </Grid>
  );
};

export default MoviePage;
