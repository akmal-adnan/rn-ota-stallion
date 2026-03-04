import {useNavigation, useRoute} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {COLORS} from '../constants/colors';
import type {Policy} from '../data/mockData';
import type {RootStackParamList} from '../navigation/RootStack';

type PoliciesDetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'PoliciesDetail'
>;

type PoliciesDetailRoute = {
  key: string;
  name: 'PoliciesDetail';
  params?: {policy: Policy};
};

const PoliciesDetailScreen = (): React.JSX.Element => {
  const navigation = useNavigation<PoliciesDetailScreenNavigationProp>();
  const route = useRoute<PoliciesDetailRoute>();
  const insets = useSafeAreaInsets();

  const policy = route.params?.policy;

  if (!policy) {
    return (
      <View style={[styles.container, {paddingTop: insets.top}]}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Policy details</Text>
          <View style={styles.headerSpacer} />
        </View>

        <View style={styles.emptyState}>
          <Text style={styles.emptyTitle}>Policy not found</Text>
          <Text style={styles.emptyBody}>
            We couldn’t load this policy. Please go back and try again.
          </Text>
        </View>
      </View>
    );
  }

  const isActive = policy.status.toLowerCase() === 'active';

  const handleMakePayment = (): void => {
    // placeholder
    console.log('Make payment for policy', policy.id);
  };

  const handleViewDocuments = (): void => {
    // placeholder
    console.log('View documents for policy', policy.id);
  };

  const handleContactSupport = (): void => {
    // placeholder
    console.log('Contact support for policy', policy.id);
  };

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Policy details</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.summaryCard}>
          <View style={styles.summaryTopRow}>
            <View style={styles.summaryTextBlock}>
              <Text style={styles.policyType}>{policy.type}</Text>
              <Text style={styles.policyNumber}>Policy {policy.number}</Text>
            </View>

            <View
              style={[
                styles.statusPill,
                isActive ? styles.statusPillActive : styles.statusPillWarning,
              ]}>
              <Text
                style={[
                  styles.statusPillText,
                  isActive
                    ? styles.statusPillTextActive
                    : styles.statusPillTextWarning,
                ]}>
                {policy.status}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Details</Text>

          <View style={styles.detailsCard}>
            <DetailRow label="Coverage" value={policy.coverageAmount} />
            <Divider />
            <DetailRow label="Deductible" value={policy.deductible} />
            <Divider />
            <DetailRow label="Next payment" value={policy.nextPaymentDate} />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Actions</Text>

          <View style={styles.actionsCard}>
            <ActionRow label="Make a payment" onPress={handleMakePayment} />
            <Divider />
            <ActionRow label="View documents" onPress={handleViewDocuments} />
            <Divider />
            <ActionRow label="Contact support" onPress={handleContactSupport} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PoliciesDetailScreen;

function DetailRow({label, value}: {label: string; value: string}): React.JSX.Element {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={styles.rowValue}>{value}</Text>
    </View>
  );
}

function ActionRow({
  label,
  onPress,
}: {
  label: string;
  onPress: () => void;
}): React.JSX.Element {
  return (
    <TouchableOpacity style={styles.actionRow} onPress={onPress}>
      <Text style={styles.actionLabel}>{label}</Text>
      <Text style={styles.actionChevron}>›</Text>
    </TouchableOpacity>
  );
}

function Divider(): React.JSX.Element {
  return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backText: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: '500',
    width: 64,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  headerSpacer: {
    width: 64,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  summaryCard: {
    backgroundColor: COLORS.card,
    borderRadius: 14,
    padding: 14,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.border,
    marginBottom: 16,
  },
  summaryTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  summaryTextBlock: {
    flex: 1,
    paddingRight: 10,
  },
  policyType: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  policyNumber: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  statusPill: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: StyleSheet.hairlineWidth,
  },
  statusPillActive: {
    borderColor: COLORS.success,
    backgroundColor: COLORS.white,
  },
  statusPillWarning: {
    borderColor: COLORS.warning,
    backgroundColor: COLORS.white,
  },
  statusPillText: {
    fontSize: 12,
    fontWeight: '600',
  },
  statusPillTextActive: {
    color: COLORS.success,
  },
  statusPillTextWarning: {
    color: COLORS.warning,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.textSecondary,
    marginBottom: 8,
  },
  detailsCard: {
    backgroundColor: COLORS.card,
    borderRadius: 14,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.border,
    overflow: 'hidden',
  },
  actionsCard: {
    backgroundColor: COLORS.card,
    borderRadius: 14,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.border,
    overflow: 'hidden',
  },
  row: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowLabel: {
    fontSize: 13,
    color: COLORS.textSecondary,
  },
  rowValue: {
    fontSize: 13,
    fontWeight: '500',
    color: COLORS.textPrimary,
  },
  actionRow: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  actionLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.textPrimary,
  },
  actionChevron: {
    fontSize: 18,
    color: COLORS.textSecondary,
    marginLeft: 10,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: COLORS.border,
  },
  emptyState: {
    paddingHorizontal: 16,
    paddingTop: 36,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 6,
  },
  emptyBody: {
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 20,
  },
});
