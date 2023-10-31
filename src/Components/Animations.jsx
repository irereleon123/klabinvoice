// AnimationImage.js
import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimationImage = () => {
  const animatedProps = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
  });

  return (
    <animated.div style={animatedProps}>
      <img src="public/pexels-luke-miller-18714731.jpg" alt="Animated Image" />
    </animated.div>
  );
};

export default AnimationImage;
