
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated,Dimensions,Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/RootNavigator';
import COLORS from '../constants/Colors';

const { width } = Dimensions.get('window');
const Splash: React.FC<NativeStackScreenProps<RootStackParamList, 'Splash'>> = ({ navigation }) => {
  const fadeAnim = new Animated.Value(0);
  

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      navigation.replace('OnboardingScreenOne');
    });
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
    <Image source={require('../assets/images/logo.png')} style={styles.image} resizeMode="cover" />
  </Animated.View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.DAWAMU_GREEN,
  },
  title: {
    fontSize: 24,
    color: COLORS.PURE_WHITE,
    fontWeight: 'bold',
  },
  image: {
    width: width - 80,
    height: 240,
    borderRadius: 20,
    marginBottom: 24,
}
});


export default Splash;