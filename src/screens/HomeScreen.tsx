import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  ClaimsSnapshot,
  DashboardHeader,
  PoliciesPreview,
  PrimaryCoverageCard,
  QuickActions,
  StatusStrip,
  TipsSection,
} from '../components/dashboard';
import {UpdateModal} from '../components/modal/UpdateModal';
import {COLORS} from '../constants/colors';
import type {Policy} from '../data/mockData';
import {MOCK_CLAIMS, MOCK_POLICIES, MOCK_TIPS} from '../data/mockData';
import {useOTAUpdate} from '../hooks/useOtaUpdate';
import {RootStackParamList} from '../navigation/RootStack';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const HomeScreen = (): React.JSX.Element => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const insets = useSafeAreaInsets();
  const primaryPolicy = MOCK_POLICIES[0];
  const {isUpdateReady, loading, restartApp} = useOTAUpdate();

  const handleOpenPolicy = (policy: Policy): void => {
    navigation.navigate('PoliciesDetail', {policy});
  };

  const handleViewPolicies = (): void => {
    if (!primaryPolicy) {
      navigation.navigate('PoliciesDetail');
      return;
    }

    handleOpenPolicy(primaryPolicy);
  };

  const handleFileClaim = (): void => {
    // navigation.navigate('Claims');
  };

  const handleMakePayment = (): void => {
    // navigation.navigate('Payments');
  };

  const handleContactSupport = (): void => {
    // navigation.navigate('Support');
  };

  const quickActions = [
    {label: 'View policies', onPress: handleViewPolicies},
    {label: 'File a claim', onPress: handleFileClaim},
    {label: 'Make a payment', onPress: handleMakePayment},
    {label: 'Support', onPress: handleContactSupport},
  ];

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <DashboardHeader
          onAvatarPress={() => navigation.navigate('AppUpdate')}
        />

        <StatusStrip
          message="Payment due in 3 days for your auto policy."
          actionLabel="Review"
          onAction={handleMakePayment}
        />

        <PrimaryCoverageCard
          policy={primaryPolicy}
          onViewPolicy={() => {
            if (primaryPolicy) {
              handleOpenPolicy(primaryPolicy);
            } else {
              navigation.navigate('PoliciesDetail');
            }
          }}
        />

        <QuickActions actions={quickActions} />

        <PoliciesPreview
          policies={MOCK_POLICIES}
          onPolicyPress={handleOpenPolicy}
          onSeeAll={handleViewPolicies}
        />

        <ClaimsSnapshot claims={MOCK_CLAIMS} onStartClaim={handleFileClaim} />

        <TipsSection tips={MOCK_TIPS} />

        <UpdateModal
          onRestart={restartApp}
          loading={loading}
          visible={isUpdateReady}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
  },
});
