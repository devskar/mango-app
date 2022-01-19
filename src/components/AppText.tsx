import React from 'react';
import { StyleSheet, Text } from 'react-native';
import styleProperties from '../config/styleProperties';

type Props = {
  children?: string;
  style?: object;
  type?: 'primary' | 'secondary' | 'custom';
};

const AppText = ({ children, style, type = 'primary' }: Props) => {
  const styles = StyleSheet.create({
    text: {
      fontFamily: 'Quicksand',
      color:
        type == 'primary'
          ? styleProperties.primary_text_color
          : type == 'secondary'
          ? styleProperties.secondary_text_color
          : 'black',
    },
  });

  return <Text style={{ ...styles.text, ...style }}>{children}</Text>;
};

export default AppText;
