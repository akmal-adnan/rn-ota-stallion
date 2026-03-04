import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {COLORS} from '../../constants/colors';

export interface QuickActionItem {
  label: string;
  onPress: () => void;
}

interface QuickActionsProps {
  actions: QuickActionItem[];
}

export function QuickActions({actions}: QuickActionsProps): React.JSX.Element {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Quick actions</Text>
      <View style={styles.quickActionsRow}>
        {actions.map((action, index) => (
          <TouchableOpacity
            key={index}
            style={styles.quickAction}
            onPress={action.onPress}>
            <Text style={styles.quickActionLabel}>{action.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 12,
  },
  quickActionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quickAction: {
    width: '48%',
    backgroundColor: COLORS.card,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginBottom: 12,
    shadowColor: COLORS.black,
    shadowOpacity: 0.03,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 1},
    elevation: 1,
  },
  quickActionLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.textPrimary,
  },
});
