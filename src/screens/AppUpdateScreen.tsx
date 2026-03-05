import React, {useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {sync} from 'react-native-stallion';

import {UpdateModal} from '../components/modal/UpdateModal';
import {useOTAUpdate} from '../hooks/useOtaUpdate';

const CHECKING_DURATION_MS = 3000;

const AppUpdateScreen = () => {
  const {isUpdateReady, restartApp, loading, version} = useOTAUpdate();
  const [checking, setChecking] = useState(false);

  const handleCheckForUpdates = () => {
    setChecking(true);
    sync();
    setTimeout(() => setChecking(false), CHECKING_DURATION_MS);
  };

  const isButtonDisabled = checking || loading;

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>App Update</Text>
      <Text style={styles.subtitle}>
        Check for over-the-air updates from Stallion.
      </Text>

      <TouchableOpacity
        style={[styles.button, isButtonDisabled && styles.buttonDisabled]}
        onPress={handleCheckForUpdates}
        disabled={isButtonDisabled}
        activeOpacity={0.8}>
        {checking ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Check for updates</Text>
        )}
      </TouchableOpacity>

      <UpdateModal
        visible={isUpdateReady}
        onRestart={restartApp}
        loading={loading}
        version={version != null ? String(version) : undefined}
      />
    </View>
  );
};

export default AppUpdateScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 24,
    minWidth: 200,
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
