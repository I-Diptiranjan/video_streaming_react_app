import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import vid from '../../assets/videos/cinematiUniverse.mp4';

const MoviePage = () => {
  const [episodeNumber, setEpisodeNumber] = useState(0);

  const episodes = [
    {
      _id: 'hsajlascnsk',
      title: 'Sample',
      description:
        'The series was created by the Duffer Brothers, who also serve as executive producers along with Shawn Levy, Dan Cohen and Iain Paterson',
      video: {
        url: 'hisdja',
      },
    },
    {
      _id: 'hsajlascnsk',
      title: 'Sample',
      description:
        'The series was created by the Duffer Brothers, who also serve as executive producers along with Shawn Levy, Dan Cohen and Iain Paterson',
      video: {
        url: 'hisdja',
      },
    },
    {
      _id: 'hsajlascnsk',
      title: 'Sample',
      description:
        'The series was created by the Duffer Brothers, who also serve as executive producers along with Shawn Levy, Dan Cohen and Iain Paterson',
      video: {
        url: 'hisdja',
      },
    },
  ];

  return (
    <Grid
      minH={'90vh'}
      templateColumns={['1fr', '3fr 1fr']}
      ml={{ base: 'none', md: '16' }}
      mt={{ base: '14', md: 'none' }}
    >
      <Box>
        <video
          width={'100%'}
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={vid}
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
    </Grid>
  );
};

export default MoviePage;
