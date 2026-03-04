import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {COLORS} from '../../constants/colors';

interface StatusStripProps {
  message: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function StatusStrip({
  message,
  actionLabel = 'Review',
  onAction,
}: StatusStripProps): React.JSX.Element {
  return (
    <View style={styles.statusStrip}>
      <Text style={styles.statusStripText}>{message}</Text>
      {onAction && (
        <TouchableOpacity style={styles.statusStripButton} onPress={onAction}>
          <Text style={styles.statusStripButtonText}>{actionLabel}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  statusStrip: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.statusStripBg,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 20,
  },
  statusStripText: {
    flex: 1,
    fontSize: 13,
    color: COLORS.statusStripText,
    marginRight: 8,
  },
  statusStripButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: COLORS.statusStripButton,
  },
  statusStripButtonText: {
    fontSize: 12,
    color: COLORS.white,
    fontWeight: '500',
  },
});
