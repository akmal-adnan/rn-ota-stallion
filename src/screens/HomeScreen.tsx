import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  ClaimsSnapshot,
  DashboardHeader,
  PrimaryCoverageCard,
  PoliciesPreview,
  QuickActions,
  StatusStrip,
  TipsSection,
} from '../components/dashboard';
import {COLORS} from '../constants/colors';
import {
  MOCK_CLAIMS,
  MOCK_POLICIES,
  MOCK_TIPS,
} from '../data/mockData';
import {RootStackParamList} from '../navigation/RootStack';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const HomeScreen = (): React.JSX.Element => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const insets = useSafeAreaInsets();
  const primaryPolicy = MOCK_POLICIES[0];

  const handleViewAllPolicies = (): void => {
    navigation.navigate('PoliciesDetail');
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
    {label: 'View policies', onPress: handleViewAllPolicies},
    {label: 'File a claim', onPress: handleFileClaim},
    {label: 'Make a payment', onPress: handleMakePayment},
    {label: 'Support', onPress: handleContactSupport},
  ];

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <DashboardHeader onAvatarPress={() => navigation.navigate('AppUpdate')} />

        <StatusStrip
          message="Payment due in 3 days for your auto policy."
          actionLabel="Review"
          onAction={handleMakePayment}
        />

        <PrimaryCoverageCard
          policy={primaryPolicy}
          onViewPolicy={handleViewAllPolicies}
        />

        <QuickActions actions={quickActions} />

        <PoliciesPreview
          policies={MOCK_POLICIES}
          onPolicyPress={handleViewAllPolicies}
          onSeeAll={handleViewAllPolicies}
        />

        <ClaimsSnapshot
          claims={MOCK_CLAIMS}
          onStartClaim={handleFileClaim}
        />

        <TipsSection tips={MOCK_TIPS} />
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
