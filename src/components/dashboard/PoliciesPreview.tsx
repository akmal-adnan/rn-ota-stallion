import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {COLORS} from '../../constants/colors';
import type {Policy} from '../../data/mockData';

interface PoliciesPreviewProps {
  policies: Policy[];
  onPolicyPress?: (policy: Policy) => void;
  onSeeAll?: () => void;
}

export function PoliciesPreview({
  policies,
  onPolicyPress,
  onSeeAll,
}: PoliciesPreviewProps): React.JSX.Element {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Your policies</Text>
        <TouchableOpacity onPress={onSeeAll}>
          <Text style={styles.sectionLink}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.policiesCarousel}>
        {policies.map(policy => (
          <TouchableOpacity
            key={policy.id}
            style={styles.policyCard}
            onPress={() => onPolicyPress?.(policy)}>
            <Text style={styles.policyType}>{policy.type}</Text>
            <Text style={styles.policyNumber}>Policy {policy.number}</Text>

            <View style={styles.policyStatusRow}>
              <View style={styles.statusChipActiveSmall}>
                <Text style={styles.statusChipTextSmall}>{policy.status}</Text>
              </View>

              <Text style={styles.policyMeta}>
                Next payment {policy.nextPaymentDate}
              </Text>
            </View>

            <Text style={styles.policyMeta}>
              Coverage {policy.coverageAmount} • Deductible {policy.deductible}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
  policiesCarousel: {
    paddingVertical: 4,
  },
  policyCard: {
    width: 220,
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 14,
    marginRight: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.border,
  },
  policyType: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 2,
  },
  policyNumber: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginBottom: 8,
  },
  policyStatusRow: {
    flex: 1,
    gap: 8,
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  statusChipActiveSmall: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    backgroundColor: COLORS.chipSuccessBg,
    marginRight: 8,
  },
  statusChipTextSmall: {
    fontSize: 11,
    fontWeight: '500',
    color: COLORS.warning,
  },
  policyMeta: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
});
