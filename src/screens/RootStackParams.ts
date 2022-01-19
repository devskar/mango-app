import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Main: undefined;
  Transactions: undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList>;
