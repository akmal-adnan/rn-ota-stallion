import {useCallback, useState} from 'react';
import {
  restart as stallionRestart,
  useStallionUpdate,
} from 'react-native-stallion';

export const useOTAUpdate = () => {
  const {isRestartRequired, newReleaseBundle} = useStallionUpdate();
  const [loading, setLoading] = useState(false);

  const restartApp = useCallback(async () => {
    try {
      setLoading(true);
      await stallionRestart();
    } catch (error) {
      console.error('OTA Restart failed:', error);
      setLoading(false);
    }
  }, []);

  return {
    // modal visibility
    isUpdateReady: isRestartRequired,

    // metadata
    version: newReleaseBundle?.version,
    releaseNotes: newReleaseBundle?.releaseNote,
    isMandatory: newReleaseBundle?.isMandatory ?? false,

    // action
    restartApp,
    loading,
  };
};
