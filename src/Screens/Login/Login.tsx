import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Button, 
  Alert, 
  StyleSheet, 
  KeyboardAvoidingView, 
  TouchableWithoutFeedback, 
  Keyboard,
  Platform
} from 'react-native';
import styles from './styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password");
    } else {
      Alert.alert("Login Info", `Email: ${email}\nPassword: ${password}`);
    }
  };

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.title}>Login Screen</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

          <View style={styles.buttonContainer}>
            <Button title="Login" onPress={handleLogin} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

