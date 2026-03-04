import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {COLORS} from '../../constants/colors';
import type {Policy} from '../../data/mockData';

interface PrimaryCoverageCardProps {
  policy: Policy;
  onViewPolicy?: () => void;
  onIdCard?: () => void;
  onDocuments?: () => void;
  onShare?: () => void;
}

export function PrimaryCoverageCard({
  policy,
  onViewPolicy,
  onIdCard,
  onDocuments,
  onShare,
}: PrimaryCoverageCardProps): React.JSX.Element {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Your coverage</Text>
      <View style={styles.primaryCard}>
        <View style={styles.primaryCardHeader}>
          <View>
            <Text style={styles.primaryPolicyType}>{policy.type}</Text>
            <Text style={styles.primaryPolicyNumber}>
              Policy {policy.number}
            </Text>
          </View>
          <View style={styles.statusChipActive}>
            <Text style={styles.statusChipText}>{policy.status}</Text>
          </View>
        </View>
        <View style={styles.primaryCardRow}>
          <View style={styles.primaryCardItem}>
            <Text style={styles.primaryCardLabel}>Coverage amount</Text>
            <Text style={styles.primaryCardValue}>{policy.coverageAmount}</Text>
          </View>
          <View style={styles.primaryCardItem}>
            <Text style={styles.primaryCardLabel}>Deductible</Text>
            <Text style={styles.primaryCardValue}>{policy.deductible}</Text>
          </View>
        </View>
        <View style={styles.primaryCardFooter}>
          <Text style={styles.primaryCardLabel}>Next payment</Text>
          <Text style={styles.primaryCardValue}>{policy.nextPaymentDate}</Text>
        </View>
        <View style={styles.primaryCardActions}>
          <TouchableOpacity
            style={styles.primaryActionButton}
            onPress={onViewPolicy}>
            <Text style={styles.primaryActionButtonText}>View policy</Text>
          </TouchableOpacity>
          <View style={styles.secondaryActions}>
            <TouchableOpacity style={styles.secondaryActionButton} onPress={onIdCard}>
              <Text style={styles.secondaryActionText}>ID card</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryActionButton} onPress={onDocuments}>
              <Text style={styles.secondaryActionText}>Documents</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryActionButton} onPress={onShare}>
              <Text style={styles.secondaryActionText}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  primaryCard: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 16,
    shadowColor: COLORS.black,
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
  },
  primaryCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  primaryPolicyType: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  primaryPolicyNumber: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  statusChipActive: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: COLORS.chipSuccessBg,
  },
  statusChipText: {
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.success,
  },
  primaryCardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  primaryCardItem: {
    flex: 1,
    marginRight: 12,
  },
  primaryCardLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginBottom: 4,
  },
  primaryCardValue: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.textPrimary,
  },
  primaryCardFooter: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: COLORS.border,
    paddingTop: 12,
    marginTop: 4,
  },
  primaryCardActions: {
    marginTop: 16,
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
  secondaryActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secondaryActionButton: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.border,
    alignItems: 'center',
    marginRight: 8,
  },
  secondaryActionText: {
    fontSize: 13,
    color: COLORS.textSecondary,
  },
});
