import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {COLORS} from '../../constants/colors';

interface DashboardHeaderProps {
  appName?: string;
  greeting?: string;
  subGreeting?: string;
  avatarInitials?: string;
  onAvatarPress?: () => void;
}

export function DashboardHeader({
  appName = 'Stallion Insurance',
  greeting = 'Hi, Maria',
  subGreeting = 'You are fully covered today.',
  avatarInitials = 'M',
  onAvatarPress,
}: DashboardHeaderProps): React.JSX.Element {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.appName}>{appName}</Text>
        <Text style={styles.greeting}>{greeting}</Text>
        <Text style={styles.subGreeting}>{subGreeting}</Text>
      </View>
      <TouchableOpacity style={styles.avatar} onPress={onAvatarPress}>
        <Text style={styles.avatarInitials}>{avatarInitials}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  appName: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 2,
  },
  greeting: {
    fontSize: 22,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  subGreeting: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: 4,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInitials: {
    color: COLORS.white,
    fontWeight: '600',
  },
});
