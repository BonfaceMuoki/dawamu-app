import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, ViewStyle } from 'react-native';

interface GradientBackgroundProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({ children, style }) => {
  return (
    <LinearGradient
      colors={["#007AFF", "#00C6FF"]}
      style={[styles.container, style]}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GradientBackground;