import React from 'react';
import { Text } from 'react-native';

type Props = {
  children?: string;
  style?: object;
};

const AppText = ({ children, style }: Props) => {
  return <Text style={{ fontFamily: 'Quicksand', ...style }}>{children}</Text>;
};

export default AppText;
