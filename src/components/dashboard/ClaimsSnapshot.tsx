import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {COLORS} from '../../constants/colors';
import type {Claim} from '../../data/mockData';

interface ClaimsSnapshotProps {
  claims: Claim[];
  onStartClaim?: () => void;
}

export function ClaimsSnapshot({
  claims,
  onStartClaim,
}: ClaimsSnapshotProps): React.JSX.Element {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Claims & activity</Text>
        <TouchableOpacity onPress={onStartClaim}>
          <Text style={styles.sectionLink}>Start a claim</Text>
        </TouchableOpacity>
      </View>
      {claims.length > 0 ? (
        <View style={styles.claimsCard}>
          {claims.map(claim => (
            <View key={claim.id} style={styles.claimRow}>
              <View style={styles.claimMain}>
                <Text style={styles.claimTitle}>{claim.title}</Text>
                <Text style={styles.claimMeta}>
                  {claim.type} • Updated {claim.updatedAt}
                </Text>
              </View>
              <View style={styles.statusChipWarning}>
                <Text style={styles.statusChipTextSmall}>{claim.status}</Text>
              </View>
            </View>
          ))}
        </View>
      ) : (
        <View style={styles.claimsCard}>
          <Text style={styles.emptyTitle}>No active claims</Text>
          <Text style={styles.emptyBody}>
            You have no ongoing claims. If something happens, you can file a
            claim in just a few steps.
          </Text>
          <TouchableOpacity
            style={styles.primaryActionButton}
            onPress={onStartClaim}>
            <Text style={styles.primaryActionButtonText}>Start a claim</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 12,
  },
  sectionLink: {
    fontSize: 13,
    color: COLORS.primary,
    fontWeight: '500',
  },
  claimsCard: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 14,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.border,
  },
  claimRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  claimMain: {
    flex: 1,
    marginRight: 12,
  },
  claimTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.textPrimary,
    marginBottom: 2,
  },
  claimMeta: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  statusChipWarning: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    backgroundColor: COLORS.chipWarningBg,
  },
  statusChipTextSmall: {
    fontSize: 11,
    fontWeight: '500',
    color: COLORS.warning,
  },
  emptyTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  emptyBody: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginBottom: 12,
  },
  primaryActionButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 999,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  primaryActionButtonText: {
    color: COLORS.white,
    fontWeight: '600',
    fontSize: 14,
  },
});
