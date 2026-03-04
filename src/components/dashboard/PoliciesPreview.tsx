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
              <View style={styles.statusPill}>
                <Text style={styles.statusPillText}>{policy.status}</Text>
              </View>

              <Text style={styles.policyStatusMeta}>
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
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.textPrimary,
    marginBottom: 0,
  },
  sectionLink: {
    fontSize: 13,
    color: COLORS.primary,
    fontWeight: '500',
  },
  policiesCarousel: {
    paddingVertical: 2,
  },
  policyCard: {
    width: 200,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginRight: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.border,
  },
  policyType: {
    fontSize: 13,
    fontWeight: '500',
    color: COLORS.textPrimary,
    marginBottom: 2,
  },
  policyNumber: {
    fontSize: 11,
    color: COLORS.textSecondary,
    marginBottom: 10,
  },
  policyStatusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  statusPill: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.success,
    backgroundColor: COLORS.white,
  },
  statusPillText: {
    fontSize: 11,
    fontWeight: '500',
    color: COLORS.success,
  },
  policyStatusMeta: {
    marginLeft: 8,
    fontSize: 11,
    color: COLORS.textSecondary,
    flexShrink: 1,
  },
  policyMeta: {
    fontSize: 11,
    color: COLORS.textSecondary,
  },
});
