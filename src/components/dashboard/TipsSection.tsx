import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {COLORS} from '../../constants/colors';
import type {Tip} from '../../data/mockData';

interface TipsSectionProps {
  tips: Tip[];
}

export function TipsSection({tips}: TipsSectionProps): React.JSX.Element {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Tips for you</Text>
      {tips.map((tip, index) => (
        <View key={index} style={styles.tipCard}>
          <Text style={styles.tipTitle}>{tip.title}</Text>
          <Text style={styles.tipBody}>{tip.body}</Text>
        </View>
      ))}
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
  tipCard: {
    backgroundColor: COLORS.card,
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.border,
  },
  tipTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  tipBody: {
    fontSize: 13,
    color: COLORS.textSecondary,
  },
});
