import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Animated,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import OnBoardingIllustration from './OnBoardingIllustration';

const { width } = Dimensions.get('window');

const OnBoarding = ({ navigation }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const panGestureRef = useRef(null);

  const slides = [
    {
      id: 1,
      title: 'One Account to Travel the Globe',
      description: 'Transfer funds across borders in seconds, securely.',
      backgroundColor: '#F8FFF0',
    },
    {
      id: 2,
      title: 'Manage Your Finance with Ease',
      description: 'Experience seamless digital transactions with a tap.',
      backgroundColor: '#E0F7FA',
    },
    {
      id: 3,
      title: 'Stay Notified',
      description: 'Get instant alerts and stay updated on your activity.',
      backgroundColor: '#F0F8FF',
    },
    {
      id: 4,
      title: 'Safe and Secure',
      description: 'Manage your finances, cards, and security in one place.',
      backgroundColor: '#F8F0FF',
    },
  ];

  const animateSlide = (direction) => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: direction === 'next' ? -50 : 50,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => {
      const newSlide = direction === 'next'
        ? Math.min(currentSlide + 1, slides.length - 1)
        : Math.max(currentSlide - 1, 0);

      setCurrentSlide(newSlide);

      slideAnim.setValue(direction === 'next' ? 50 : -50);

      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    });
  };

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      animateSlide('next');
    } else {
      navigation.navigate('Login');
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      animateSlide('previous');
    }
  };

  const handleSkip = () => {
    navigation.navigate('Login');
  };

  const handleGestureEvent = (event) => {
    const { translationX } = event.nativeEvent;
    if (Math.abs(translationX) > 50) {
      if (translationX > 0 && currentSlide > 0) {
        handlePrevious();
      } else if (translationX < 0 && currentSlide < slides.length - 1) {
        animateSlide('next');
      } else if (translationX < 0 && currentSlide === slides.length - 1) {
        navigation.navigate('Login');
      }
    }
  };

  const handleGestureStateChange = (event) => {
    if (event.nativeEvent.state === State.END) {
      handleGestureEvent(event);
    }
  };

  const goToSlide = (index) => {
    if (index !== currentSlide) {
      const direction = index > currentSlide ? 'next' : 'previous';

      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: direction === 'next' ? -50 : 50,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setCurrentSlide(index);

        slideAnim.setValue(direction === 'next' ? 50 : -50);

        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
        ]).start();
      });
    }
  };

  const renderProgressDots = () => (
    <View style={styles.progressContainer}>
      {slides.map((_, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => goToSlide(index)}
          style={[
            styles.progressDot,
            {
              backgroundColor: index === currentSlide ? '#C7F464' : '#E0E0E0',
              transform: [{ scale: index === currentSlide ? 1.2 : 1 }],
            },
          ]}
        />
      ))}
    </View>
  );

  const currentSlideData = slides[currentSlide];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <PanGestureHandler
        ref={panGestureRef}
        onGestureEvent={handleGestureEvent}
        onHandlerStateChange={handleGestureStateChange}
        minPointers={1}
        maxPointers={1}
      >
        <View style={styles.gestureContainer}>
          {/* Main Content */}
          <View style={styles.content}>
            {/* Illustration Container */}
            <Animated.View
              style={[
                styles.illustrationContainer,
                {
                  backgroundColor: currentSlideData.backgroundColor,
                  opacity: fadeAnim,
                  transform: [{ translateX: slideAnim }],
                },
              ]}
            >
              <View style={styles.iconWrapper}>
                <OnBoardingIllustration slideIndex={currentSlide} />
                {/* Decorative elements */}
                <View style={[styles.decorativeCircle, styles.circle1]} />
                <View style={[styles.decorativeCircle, styles.circle2]} />
                <View style={[styles.decorativeCircle, styles.circle3]} />
              </View>
            </Animated.View>

            {/* Text Content */}
            <Animated.View
              style={[
                styles.textContainer,
                {
                  opacity: fadeAnim,
                  transform: [{ translateX: slideAnim }],
                },
              ]}
            >
              <Text style={styles.title}>{currentSlideData.title}</Text>
              <Text style={styles.description}>{currentSlideData.description}</Text>
            </Animated.View>

            {/* Swipe Indicator */}
            <View style={styles.swipeIndicator}>
              <Text style={styles.swipeText}>Swipe to navigate</Text>
            </View>
          </View>

          {/* Bottom Navigation */}
          <View style={styles.bottomContainer}>
            {renderProgressDots()}

            <View style={styles.navigationContainer}>
              <TouchableOpacity
                style={styles.skipButton}
                onPress={handleSkip}
                activeOpacity={0.7}
              >
                <Text style={styles.skipButtonText}>Skip</Text>
              </TouchableOpacity>

              {/* Next Button */}
              <TouchableOpacity
                style={styles.nextButton}
                onPress={handleNext}
                activeOpacity={0.8}
              >
                <Text style={styles.nextButtonText}>
                  {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </PanGestureHandler>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  gestureContainer: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  illustrationContainer: {
    width: width * 0.8,
    height: width * 0.8,
    borderRadius: width * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    position: 'relative',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  iconWrapper: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  decorativeCircle: {
    position: 'absolute',
    borderRadius: 50,
    backgroundColor: 'rgba(199, 244, 100, 0.2)',
  },
  circle1: {
    width: 30,
    height: 30,
    top: -60,
    right: -40,
  },
  circle2: {
    width: 20,
    height: 20,
    bottom: -50,
    left: -30,
  },
  circle3: {
    width: 25,
    height: 25,
    top: -20,
    left: -60,
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: 16,
    letterSpacing: -0.5,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 10,
  },
  swipeIndicator: {
    marginTop: 30,
    alignItems: 'center',
  },
  swipeText: {
    fontSize: 12,
    color: '#999',
    fontStyle: 'italic',
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    color:'#69DDF1'

  },
  progressDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 6,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skipButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  skipButtonText: {
    fontSize: 16,
    color: '#999',
    fontWeight: '500',
  },
  nextButton: {
    backgroundColor: '#69DDF1',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  nextButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
    marginRight: 8,
  },
  nextButtonIcon: {
    marginLeft: 4,
  },
});

export default OnBoarding;