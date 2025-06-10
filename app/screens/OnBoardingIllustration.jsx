import React from 'react';
import { Image, useWindowDimensions } from 'react-native';

const images = [
  require('../assets/blah.png'),
  require('../assets/Group_6.png'),
  require('../assets/cuate.png'),
  require('../assets/Group_5.png'),
];

const OnBoardingIllustration = ({ slideIndex }) => {
  const { width } = useWindowDimensions();
  return (
    <Image
      source={images[slideIndex]}
      style={{
        width: width * 0.7,
        height: width * 0.7,
        resizeMode: 'contain',
      }}
    />
  );
};

export default OnBoardingIllustration;