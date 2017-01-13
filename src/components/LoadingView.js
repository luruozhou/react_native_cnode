import React from 'react';
import {
  ActivityIndicator,
  Text,
  StyleSheet,
  View
} from 'react-native';

const LoadingView = () => (
  <View style={styles.loading}>
    <ActivityIndicator
      size="large"
      color="#fe5b56"
    />
    <Text style={styles.loadingText}>数据加载中...</Text>
  </View>
);

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    marginTop: 10,
    textAlign: 'center'
  }
});

export default LoadingView;
