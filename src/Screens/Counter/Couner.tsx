// Counter.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {styles} from './styles';
/**
 * Simple Counter screen
 */
const Counter = () => {
  // State that holds the current count
  const [count, setCount] = useState(0);

  // Handlers
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Title */}
        <Text style={styles.title}>Counter</Text>

        {/* Current count */}
        <Text style={styles.countText}>{count}</Text>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={decrement}>
            <Text style={styles.buttonText}>–</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={increment}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Counter;

