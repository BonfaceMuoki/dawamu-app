import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Log In</Text>

      <Text style={styles.label}>Email Address</Text>
      <TextInput
        style={styles.input}
        placeholder="john.doe@gmail.com"
        placeholderTextColor="#aaa"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        placeholderTextColor="#aaa"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>OR</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <MaterialCommunityIcons name="google" size={22} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <MaterialCommunityIcons name="facebook" size={22} color="#4267B2" />
        </TouchableOpacity>
      </View>

      <Text style={styles.footerText}>
        Don’t have an account?{' '}
        <Text style={styles.signupText}>Sign up</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  label: {
    fontSize: 14,
    color: '#444',
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#00C853',
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 24,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotText: {
    color: '#00C853',
    textAlign: 'center',
    marginTop: 12,
  },
  orText: {
    textAlign: 'center',
    marginVertical: 16,
    color: '#888',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  socialButton: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    marginHorizontal: 8,
  },
  footerText: {
    marginTop: 24,
    textAlign: 'center',
    color: '#555',
  },
  signupText: {
    color: '#00C853',
    fontWeight: 'bold',
  },
});
